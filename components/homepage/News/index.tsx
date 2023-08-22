import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import SvgComponent from "@/components/common/svgComponent";
import NextButton from "@/components/common/nextButton";
import PreviewButton from "@/components/common/previewButton";
import axios from "axios";

interface props {
    news: Array<{
        id: number
        body: string
        title: string
        category: {
            id: number
            name: string
        }
        admin: {
            fullname: string
        }
        created_at: string
        file_link: string
        has_hashtag: Array<{
            hashtag: {
                id: number
                name: string
            }
        }>
    }>
    blogCategory: Array<{
        id: number
        name: string
    }>
}

const CustomPaginate = (i: number, active: any) => {


    return (
        <div className={'flex items-center justify-center mt-6 h-[50px] w-[50px] mt-10'}>
            {i === active ?
                <SvgComponent type={'dotSelected'}/>
                : <SvgComponent type={'dots'}/>
            }
        </div>


    )
}

const NewsComponent: React.FC<props> = ({news, blogCategory}) => {

    const [activeIndex, setActiveIndex] = useState(0)
    const [prevButtonOnHover, setPrevButtonOnHover] = useState(false)
    const [nextButtonOnHover, setNextButtonOnHover] = useState(false)
    const [listNews, setListNews] = useState<Array<any>>([])
    const [activeCategory, setActiveCategory] = useState(0)

    useEffect(() => {
        if (news) {
            setListNews(news)
        }
    }, [news])

    const filterByCategoryId = (id: number) => {
        if (id !== 0) {
            const temp = news.filter((row) => row.category.id === id)
            setListNews(temp)
        }else {
            setListNews(news)
        }
        setActiveIndex(0)
        setActiveCategory(id)
    }


    return (
        <>
            <div className="mx-auto md:w-[400px] w-full px-14 md:p-3 mb-12" id={'news'}>
                <h2 className={'uppercase md:text-2xl mx-auto sm:text-xl text-lg text-white flex items-center justify-center games__background py-6 drop-shadow-[0_7px_4px_rgba(0,0,0,0.4)] lg:w-fit w-full lg:px-36'}>News</h2>
            </div>
            <div className="custom__container py-10">
                <div className="flex gap-4 md:gap-0 md:justify-between items-center px-4">
                    <div className="flex flex-grow gap-3 items-center font-sans overflow-x-auto whitespace-nowrap scroll__custom">
                        <button onClick={()=>filterByCategoryId(0)} className={`border-1 ${activeCategory===0?'bg-black text-white':''} border border-gray-300 rounded px-5 py-2 bg-white`}>All</button>
                        {blogCategory.map((row) => (
                            <button
                                key={row.id}
                                onClick={()=>filterByCategoryId(row.id)}
                                className={`border-1 border border-gray-300 rounded px-5 py-2 bg-white ${activeCategory===row.id?'bg-black text-white':''}`}>#{row.name}</button>
                        ))}
                    </div>
                    <div className="whitespace-nowrap hidden lg:block">
                        <Link href={'/all-blog'}>
                            <button className={'bg-black text-center font-[Candara] font-[600] p-2 text-white md:px-10 rounded-full'}>
                                See All Blog
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="block lg:hidden mt-8 px-4">
                    <Link href={'/all-blog'} className={'flex items-center'}>
                        <button className={'mx-auto bg-black text-center font-[Candara] font-[600] p-2 px-10 text-white md:px-10 rounded-full'}>
                            See All Blog
                        </button>
                    </Link>
                </div>

                <div className="my-12 news-slick">
                    <Slider

                        slidesToShow={listNews.length>2? 2:listNews.length}
                        dots={true}
                        customPaging={(i) => CustomPaginate(i, activeIndex)}
                        beforeChange={(prev, next) => {
                            setActiveIndex(next)
                        }}
                        nextArrow={
                            <NextButton
                                rightClass={'right-[-5%]'}
                                setNextButtonOnHover={setNextButtonOnHover}
                                nextButtonOnHover={nextButtonOnHover}
                            />
                        }
                        prevArrow={
                            <PreviewButton
                                leftClass={'left-[-5%]'}
                                setPrevButtonOnHover={setPrevButtonOnHover}
                                prevButtonOnHover={prevButtonOnHover}
                            />
                        }
                        responsive={[
                            {
                                breakpoint: 1025,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 426,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    nextArrow: <></>,
                                    prevArrow: <></>,
                                    // centerMode: true,
                                    // centerPadding: "20px"
                                }
                            }
                        ]}
                    >
                        {listNews && listNews.map((row) => (
                            <div className={'px-5'} key={row.id}>
                                <div key={row?.id} className="rounded-[10px] p-14 bg-white font-[Candara]">
                                    <div
                                        className="w-full h-full mx-auto rounded-[10px]">
                                        <Image
                                            src={row.file_link}
                                            alt={'image'}
                                            width={300}
                                            height={250}
                                            className={'w-full h-[250px] md:h-[300px] object-cover shadow mx-auto '}
                                        />
                                    </div>

                                    <div className="">
                                        <p className={' text-[18ox] text-1-line md:text-[28px] font-bold font-sans mt-6'}>{row.title}</p>
                                        <div className="flex gap-4 items-center my-4">
                                            <p className='flex gap-2 items-center text-[10px] text-[14px]'>
                                                <SvgComponent type={'user'}/>
                                                {row.admin.fullname}
                                            </p>
                                            <p className={'flex items-center gap-2 text-[10px] text-[14px]'}>
                                                <SvgComponent type={'date-gray'}/>
                                                {new Date(row.created_at).toLocaleDateString('id-ID', {dateStyle: "full"})}
                                            </p>
                                            <p className={'flex items-center gap-2 text-[10px] text-[14px]'}>
                                                <SvgComponent type={'feed'}/>
                                                {row.category.name}
                                            </p>
                                        </div>
                                        <p className=" my-6 whitespace-pre-wrap break-words text-4-line overflow-auto"
                                           dangerouslySetInnerHTML={{__html: row.body}}/>
                                        <Link href={`/all-blog/${row.id}?category=${row.category.id}`}
                                              className={'font-bold text-[#D8B98D] md:text-[16px]'}>
                                            Show More
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default NewsComponent