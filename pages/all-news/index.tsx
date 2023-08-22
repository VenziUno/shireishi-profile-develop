import React, {useEffect, useState} from "react";
import Image from "next/image";
import SvgComponent from "@/components/common/svgComponent";
import {useRouter} from "next/router";
import Header from "@/components/header";
import {allDataLanding} from "@/interface/landing";
import axios from "axios";
import {LandingLoader} from "@/components/loader";
import Footer from "@/components/footer";
import Link from "next/link";

const AllNews: React.FC = () => {

    const router = useRouter()
    const {game_id,searchs} = router.query
    const [search, setSearch] = useState('')
    const [landing, setLanding] = useState<allDataLanding>()
    const [loading, setLoading] = useState(false)
    const [listNews, setListNews] = useState<any>()

    useEffect(() => {
        setLoading(true)
        axios.get(`${process.env.API_URL}/all-data`).then((res) => {
            setLanding(res?.data?.data)
            setLoading(false)
        }).catch((res) => {
            res && setLoading(false)
        })

        axios.get(`${process.env.API_URL}/game-news?game=${game_id??''}&search=${searchs??''}`).then((res) => {
            setListNews(res?.data?.data)
        })

    }, [game_id,searchs])


    return (
        <>
            <LandingLoader isLoading={loading}/>
            <Header/>
            <div className="relative">
                <div
                    className="relative w-full h-[300px] z-[10] bg-gradient-to-r from-[#000000] to-[#000000]"
                >
                    <Image
                        src={'/images/newss-bg.png'}
                        alt={'blog banner'}
                        width={1024}
                        height={380}
                        className={'w-full h-[300px] object-cover'}
                    />
                </div>
                <div className="absolute w-full h-[300px] px-12 md:px-0 flex items-center justify-center z-[12] top-1">
                    <div
                        className="flex shadow border-gray-400 bg-white items-center rounded-[10px] font-[Candara] overflow-hidden w-full md:w-[650px] lg:min-w-[975px]">
                        <select
                            value={game_id}
                            className={'p-2 font-[600] text-center focus:outline-none w-[100px] md:w-[200px]'}
                            onChange={(e) => {
                                router.replace({
                                    query: {
                                        ...router.query,
                                        game_id: e.target.value
                                    }
                                })
                            }}
                        >
                            <option value="0">Select Game</option>
                            {landing?.game.map((row) => (
                                <option className='' key={row.id} value={row.id}>{row.name}</option>
                            ))}
                        </select>
                        <input
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value)
                            }}
                            placeholder={'Search'}
                            className={'font-sans border-l border-gray-500 font-[600] p-2 w-full focus:outline-none'}
                            type="search"/>
                        <button
                            onClick={() => {
                                router.replace({
                                    query: {
                                        ...router.query,
                                        searchs: search
                                    }
                                })
                            }}
                            className={'p-2 bg-[#393939] px-3'}
                        >
                            <SvgComponent type={'search'}/>
                        </button>
                    </div>
                </div>
            </div>

            <div className="py-8 md:py-[150px] lg:container px-4 md:px-4 xl:max-w-[1100px] mx-auto">
                {listNews && listNews.map((row:any, key: number) => (
                    <Link key={row.id} href={`/games/detail/${row.id}`}>
                        <div key={row.id}
                             className={`md:flex items-center rounded-[20px] overflow-hidden shadow-lg font-[Candara] ${key > 0 ? ' mt-[25px] md:mt-[50px]' : ''}`}>
                            <div className="">
                                <Image
                                    src={row.file_link}
                                    alt={`image ${row.title}`}
                                    width={440}
                                    height={260}
                                    className={'md:w-[440px] md:h-[260px] object-cover'}
                                />
                            </div>
                            <div className="bg-white w-full md:h-[260px] p-4">
                                <p className={'font-[700] text-[#5F6368] text-[24px]'}>{row.title}</p>
                                <div className="flex gap-4 mt-2">
                                    <p className="px-[12px] py-[10px] bg-red-500 text-white font-[400]">{row.category.name}</p>
                                    <p className=""></p>
                                </div>
                                <div className="flex gap-4 mt-2">
                                    <p className="">{row.admin.fullname}</p>
                                    <p className="">{new Date(row.created_at).toLocaleDateString('en-US', {dateStyle: "long"})}</p>
                                </div>
                                <p className="text-4-line mt-2" dangerouslySetInnerHTML={{__html: row.body}}/>

                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {landing && <Footer social_media={landing.social_media}/>}
        </>
    )
}

export default AllNews