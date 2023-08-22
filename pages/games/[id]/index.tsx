import React, {useEffect, useState} from "react";
import Header from "@/components/header";
import axios from "axios";
import Footer from "@/components/footer";
import Slider from "react-slick";
import Image from "next/image";
import {allDataLanding} from "@/interface/landing";
import SliderComponent from "@/components/homepage/gamesDetail/sliderComponent";
import Link from "next/link";
import SvgComponent from "@/components/common/svgComponent";
import {useRouter} from "next/router";
import {LandingLoader} from "@/components/loader";
import SteamCopy from "@/components/homepage/gamesDetail/steamCopy";

const GamesById = () => {

    const [landing, setLanding] = useState<allDataLanding>()
    const [gameData, setGameData] = useState<any>()
    const [gameNews, setGameNews] = useState<Array<any>>([])
    const [listGames, setListGames] = useState([])
    const [loading, setLoading] = useState(false)
    const [dataSelected, setDataSelected] = useState<any>()
    const [hover, setHover] = useState(-1)
    const router = useRouter()
    const {id} = router.query

    useEffect(() => {
        setLoading(true)
        axios.get(`${process.env.API_URL}/all-data`).then((res) => {
            setLanding(res?.data?.data)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            setLoading(false)
        })
        if (id) {
            axios.get(`${process.env.API_URL}/game/${id}`).then((res) => {
                setGameData(res?.data.data)
            })
        }
        axios.get(`${process.env.API_URL}/game-news`).then((res) => {
            setGameNews(res?.data?.data)
        })
        axios.get(`${process.env.API_URL}/game`).then((res) => {
            setListGames(res?.data?.data)
        })

    }, [id])

    return (
        <>
            <LandingLoader isLoading={loading}/>
            <Header/>
            <div className="bg-transparent">
                <div className="relative bg-promotional w-full h-[1100px]">
                    {dataSelected &&
                        <div className="absolute top-0 w-full h-full z-10">
                            <Image
                                src={dataSelected.file_link}
                                alt={'imag'}
                                width={1920}
                                height={500}
                                className={'w-full h-full object-cover opacity-10'}
                            />
                        </div>
                    }

                    <div className="relative z-10 p-4 md:p-8 xl:px-8 lg:mx-w-[1024px] xl:max-w-[1500px] mx-auto">
                        {gameData &&
                            <>
                                <p className="md:text-[64px] text-[32px] text-[#45453D]">{gameData?.name.split(':')[0]} {gameData.name.split(':').length > 1 ? ":" : ""}</p>
                                <p className="md:text-[52px] text-[32px] text-[#45453D]">{gameData?.name.split(':')[1]}</p>
                                <div className="flex gap-4 uppercase py-6 flex-wrap">
                                    {gameData.has_category.map((row: any, key: number) => (
                                        <div key={key}
                                             className={`title__category md:px-12 p-2`}>
                                            <p className="text-center whitespace-nowrap text-[20px] text-white">{row.category.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        }

                        <div className="mt-[70px]">
                            <SteamCopy
                                gameData={gameData}
                                dataSelected={dataSelected}
                                setDataSelected={setDataSelected}
                            />
                        </div>

                    </div>
                </div>
            </div>

            <div className=" p-4 w-full relative z-30">
                <div className="absolute w-full left-0 top-[-120px] z-20 ">
                    <Image
                        src={'/images/corak1.png'}
                        alt={'corak'}
                        width={1920}
                        height={200}
                    />
                </div>

                <div className="custom__container mx-auto relative z-30">
                    <p className={'text-[24px] mt-[150px]'}>SYSTEM REQUIREMENTS</p>
                    <div className="md:flex gap-8 mt-6">
                        <div className="md:w-1/2 font-[Candara] text-[24px]">
                            <p> minimum : </p>

                            <table>
                                <tbody>
                                <tr>
                                    <th className='text-start py-3 pr-4'>OS</th>
                                    <td className={'p-2 py-3'}> : {gameData?.require?.min_os}</td>
                                </tr>
                                <tr>
                                    <th className='text-start py-3 pr-4'>Processor </th>
                                    <td className={'p-2 py-3'}> : {gameData?.require?.min_processor}</td>
                                </tr>
                                <tr>
                                    <th className='text-start py-3 pr-4'>Memory </th>
                                    <td className={'p-2 py-3'}> : {gameData?.require?.min_memory}</td>
                                </tr>
                                <tr>
                                    <th className='text-start py-3 pr-4'>Graphics </th>
                                    <td className={'p-2 py-3'}> : {gameData?.require?.min_graphics}</td>
                                </tr>
                                <tr>
                                    <th className='text-start py-3 pr-4'>Storage </th>
                                    <td className={'p-2 py-3'}> : {gameData?.require?.min_storage}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="md:w-1/2 font-[Candara] text-[24px] mt-8 md:mt-0">
                            <p> Recomended : </p>

                            <table>
                                <tbody>
                                <tr>
                                    <th className='text-start py-3 pr-4'>OS </th>
                                    <td className={'p-2 py-3'}> : {gameData?.require?.rec_os}</td>
                                </tr>
                                <tr>
                                    <th className='text-start py-3 pr-4'>Processor </th>
                                    <td className={'p-2 py-3'}> : {gameData?.require?.rec_processor}</td>
                                </tr>
                                <tr>
                                    <th className='text-start py-3 pr-4'>Memory </th>
                                    <td className={'p-2 py-3'}> : {gameData?.require?.rec_memory}</td>
                                </tr>
                                <tr>
                                    <th className='text-start py-3 pr-4'>Graphics </th>
                                    <td className={'p-2 py-3'}> : {gameData?.require?.rec_graphics}</td>
                                </tr>
                                <tr>
                                    <th className='text-start py-3 pr-4'>Storage </th>
                                    <td className={'p-2 py-3'}> : {gameData?.require?.rec_storage}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <p className={'text-[24px] uppercase mt-[150px]'}>Download Link</p>
                    <div className="flex gap-2 mt-[50px] inline-flex">
                        {gameData?.download_link?.map((row: any, key: number) => (
                            <Link key={row.id} href={row.redirect_link}
                                  onMouseEnter={() => setHover(key)}
                                  onMouseLeave={() => setHover(-1)}
                                  className={`uppercase md:px-6 p-0 font-[Candara] text-[12px] md:text-[32px] text-black font-bold 
                                  ${key < gameData.download_link.length - 1 ? 'border-r-2' : ''} border-black`}>
                                <p className={`whitespace-nowrap text-center ${hover === key ? 'text-[#909090]' : ''}`}>
                                    {row.name}
                                    {key !== hover ?
                                        <SvgComponent type={'underTitle'}/>
                                        : <SvgComponent type={'underTitleGray'}/>
                                    }
                                </p>
                            </Link>
                        ))}
                    </div>

                    <p className={'text-[24px] uppercase mt-[150px] mb-[50px]'}>Latest News</p>
                    <div className="md:grid md:grid-cols-12 lg:grid-cols-13 gap-4 md:gap-3">
                        {gameNews && gameNews?.map((row: any, key: number) => (
                            <>
                                {key < 5 &&
                                    <div
                                        className={`${key == 0 ? 'col-span-12 lg:col-span-5 md:row-span-2' : 'w-full md:col-span-4 lg:col-span-4'} my-4 md:my-0`}
                                        key={key}>
                                        <div className="relative overflow-hidden">
                                            <Image
                                                src={row.file_link}
                                                alt={'image'}
                                                width={500}
                                                height={500}
                                                className={`hover:scale-110 transition-all ease-in-out ${key == 0 ? 'w-full h-[300px] md:h-[512px]' : 'w-full h-[300px] md:h-[200px] lg:h-[250px]'} object-cover`}
                                            />
                                            <div
                                                className={`absolute z-10 w-full h-1/2 bottom-0 bg-gradient-to-b from-transparent to-black opacity-60`}
                                            />
                                            <Link href={`/games/detail/${row.id}`}>
                                                <div
                                                    className="absolute z-10 bottom-0 w-full xl:h-auto bg-gradient-to-b from-transparent to-black p-2 lg:p-4 font-[Candara]">
                                                    <button
                                                        className={'bg-red-500 text-white p-2 px-3 uppercase font-[400]'}>{row.category.name}</button>
                                                    <div className="flex gap-4 text-white mt-[15px]">
                                                        <p className="text-white font-[400]">by {row.admin.fullname}</p>
                                                        <p className="flex gap-2">
                                                            <SvgComponent type={'date'}/>
                                                            {new Date(row.created_at).toLocaleDateString('en-US', {
                                                                month: "long",
                                                                day: '2-digit',
                                                                year: 'numeric'
                                                            })}
                                                        </p>
                                                    </div>
                                                    <p className="text-white lg:text-[20px] text-4-line font-semibold"
                                                       dangerouslySetInnerHTML={{__html: row?.title}}/>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                }
                            </>
                        ))}
                    </div>

                    {gameNews && gameNews?.length > 5 &&
                        <div className={'md:mt-[60px] text-center'}>
                            <Link href={'/all-news'}>
                                <div className='font-[Candara] mt-4'>
                                    <button
                                        className='text-white bg-[#45453D] rounded-full py-1.5 px-6 md:text-[24px] mx-auto'>
                                        See All Games News
                                    </button>
                                </div>
                            </Link>
                        </div>
                    }

                    <p className={'text-[24px] uppercase mt-[75px] mb-[50px]'}>MORE FROM OUR GAMES</p>
                    <div className="grid-cols-12 grid gap-4 mb-12">
                        {listGames.filter((rows:{id:number,title:string})=>rows.id!==Number(id)).filter((res:{name:string})=>res.name!=='Coming Soon').map((row: any) => (
                            <div key={row.id} className={'lg:col-span-4 md:col-span-6 col-span-12'}>
                                <Link href={`/games/${row.id}`} className="">
                                    <Image
                                        src={row.cover_link}
                                        alt={'image'}
                                        width={450}
                                        height={300}
                                        className={'md:w-[450px] md:h-[200px] xl:h-[300px] object-cover shadow-lg rounded-[10px]'}
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {landing && <Footer social_media={landing.social_media}/>}
        </>
    );
}

export default GamesById