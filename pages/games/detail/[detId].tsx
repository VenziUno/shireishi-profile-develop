import React, {useEffect, useState} from "react";
import Header from "@/components/header";
import {useRouter} from "next/router";
import axios from "axios";
import SvgComponent from "@/components/common/svgComponent";
import Link from "next/link";
import Image from "next/image";
import {allDataLanding} from "@/interface/landing";
import Footer from "@/components/footer";
import {Simulate} from "react-dom/test-utils";


const Detail: React.FC = () => {

    const router = useRouter()
    const {detId} = router.query
    const [detail, setDetail] = useState<any>()
    const [landing, setLanding] = useState<allDataLanding>()

    useEffect(() => {
        if (detId) {
            axios.get(`${process.env.API_URL}/game-news?id=${detId}`).then((res) => {
                setDetail(res?.data?.data)
            })
        }
        axios.get(`${process.env.API_URL}/all-data`).then((res) => {
            setLanding(res?.data?.data)
        })
    }, [detId])

    const onTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            <Header/>
            {detail &&
                <>
                    <div className="container px-4 xl:px-0 pt-8 font-[Candara] font-bold">
                        <p className="flex gap-2 items-center text-[18px]">
                            <span>
                                <SvgComponent type={'emoticonInc'}/>
                            </span>
                            {detail.title}
                        </p>

                        <p className="text-[24px]">{detail.title}</p>
                        <div className="flex items-center gap-2">
                            <p className={'text-blue-600'}> {detail.admin.fullname} </p>
                            <p className="">{new Date(detail.created_at).toLocaleDateString('id-ID', {dateStyle: "full"})}</p> |
                            <p className={'p-1 px-6 bg-red-500 text-white'}>{detail.category.name}</p>
                        </div>
                        <div className=" mt-8">
                            <Image
                                src={detail.file_link}
                                alt={'image'}
                                width={1024}
                                height={400}
                                className={'w-full md:h-[550px] object-cover'}
                            />
                        </div>

                        <div className=" my-2" dangerouslySetInnerHTML={{__html: detail.body}}/>

                        <button onClick={onTop} className={'text-blue-600'}>Back To Top</button>

                        <div className='h-[1px] w-full bg-gray-400 my-2'/>
                        <div className="my-2">
                            <div className="p-8 bg-[#D9D9D9] mt-4 font-[Candara]">
                                <p className='font-bold'>You can Share this post !</p>
                                <div className="flex gap-4 mt-4">
                                    <Link href={'#'}>
                                        <SvgComponent type={'facebook'}/>
                                    </Link>
                                    <Link href={'#'}>
                                        <SvgComponent type={'twitter'}/>
                                    </Link>
                                    <Link href={'#'}>
                                        <SvgComponent type={'instagram'}/>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="my-[50px]">
                            <p className="text-[#163055] text-[18px] md:text-[36px] flex items-center gap-2">Neext Games
                                News <SvgComponent type={'arrow-next'}/></p>
                            <div className="overflow-x-auto">
                                <div className="mt-4 md:grid md:grid-cols-12 gap-4 flex inline-flex">
                                    {landing && landing.news.filter((row: { id: number }) => row?.id !== detail?.id).map((rows: any, key: number) => (
                                        <div key={key}
                                             className={'lg:col-span-4 md:col-span-6 col-span-12 w-[400px] md:w-full xl:w-[400px] relative'}>
                                            <Image
                                                src={rows.file_link} alt={'img'}
                                                width={430}
                                                height={315}
                                                className={'w-[400px] h-[250px] md:h-[200px] lg:h-[250px] xl:h-[315px] object-cover'}
                                            />

                                            <div
                                                className="absolute bottom-0 w-full xl:h-1/2 bg-gradient-to-b from-transparent to-black p-2 lg:p-4">
                                                <Link href={`/games/detail/${rows.id}`}>
                                                    <button
                                                        className={'bg-red-500 text-white p-2 px-3 uppercase font-[400]'}>
                                                        {rows.category.name}
                                                    </button>
                                                </Link>
                                                <div className="flex gap-4 text-white mt-[15px]">
                                                    <p className="text-white font-[400]">by {rows.admin.fullname}</p>
                                                    <p className="flex gap-2">
                                                        <SvgComponent type={'date'}/>
                                                        {new Date(rows.created_at).toLocaleDateString('en-US', {
                                                            month: "long",
                                                            day: '2-digit',
                                                            year: 'numeric'
                                                        })}
                                                    </p>
                                                </div>
                                                <p className="text-white lg:text-[20px] font-semibold"
                                                   dangerouslySetInnerHTML={{__html: rows.short_description}}/>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
            {landing &&
                <Footer social_media={landing.social_media}/>
            }
        </>
    )
}

export default Detail