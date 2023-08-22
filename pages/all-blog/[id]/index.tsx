import Header from "@/components/header";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";
import SvgComponent from "@/components/common/svgComponent";
import Link from "next/link";
import Footer from "@/components/footer";
import {allDataLanding, detailBlog} from "@/interface/landing";
import Slider from "react-slick";
import {FacebookShareButton, FacebookShareCount, TwitterShareButton} from "react-share";

const BlogId = () => {

    const router = useRouter()
    const {id, category} = router.query

    const [detailBlog, setDetailBlg] = useState<detailBlog>()
    const [moreBlog, setMoreBlog] = useState([])
    const [landing, setLanding] = useState<allDataLanding>();

    useEffect(() => {
        if (id && category) {
            axios.get(`${process.env.API_URL}/blog?id=${id}`).then((res) => {
                setDetailBlg(res?.data?.data)
            })
            axios.get(`${process.env.API_URL}/blog?category=${category}`).then((res) => {
                const temp = res?.data?.data.filter((row: { id: number }) => row.id !== Number(id))
                setMoreBlog(temp)
            })
        }
        axios.get(`${process.env.API_URL}/all-data`).then((res) => {
            setLanding(res.data.data)
        })

    }, [id, category])

    const BlogPreviewSliderButton = ({onClick}: any) => {
        return (
            <button
                className={'absolute top-[40%] md:top-[46%] z-[10] left-[25px]'}
                onClick={onClick}
            >
                <svg width="35" height="35" viewBox="0 0 62 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5"
                          d="M3.78995e-06 31.5C3.77629e-06 48.8967 13.8846 63 31 63C48.1154 63 62 48.8967 62 31.5C62 14.1033 48.1154 0 31 0C13.8846 0 3.80362e-06 14.1033 3.78995e-06 31.5Z"
                          fill="black"/>
                    <path
                        d="M35.904 17.9002L35.9038 17.9005L23.1055 29.7557C23.1055 29.7557 23.1055 29.7557 23.1055 29.7557C22.9765 29.8755 22.8928 29.9978 22.8449 30.1215L22.6118 30.0312L22.8449 30.1215C22.7931 30.2551 22.7667 30.4002 22.7676 30.5591L22.7676 30.5605C22.7676 30.7198 22.7945 30.8654 22.8464 30.9994C22.8945 31.1234 22.9779 31.2458 23.1058 31.3655C23.1059 31.3656 23.106 31.3657 23.1061 31.3658L35.904 43.256C36.2075 43.5379 36.5878 43.6831 37.0631 43.6831C37.5335 43.6831 37.9279 43.5294 38.2601 43.2207C38.5948 42.9098 38.75 42.5624 38.75 42.1689C38.75 41.7754 38.5948 41.428 38.2601 41.1171L38.26 41.1173L38.2521 41.1093L28.735 31.4372C28.2563 30.9507 28.2563 30.1702 28.735 29.6837L38.2521 20.0116L38.2519 20.0114L38.2601 20.0038C38.5638 19.7217 38.712 19.382 38.712 18.969C38.712 18.5614 38.5553 18.2089 38.2224 17.9005L38.2222 17.9002C37.8874 17.5892 37.5047 17.4378 37.0631 17.4378C36.6215 17.4378 36.2388 17.5892 35.904 17.9002Z"
                        fill="#FBFBFB" stroke="#999999" strokeWidth="0.5"/>
                </svg>

            </button>
        )
    }

    const BlogNextSliderButton = ({onClick}: any) => {
        return (
            <button
                className={'absolute z-[10] top-[40%] md:top-[46%] right-[25px]'}
                onClick={onClick}
            >
                <svg width="35" height="35" viewBox="0 0 62 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5"
                          d="M62 31.5C62 14.1033 48.1154 0 31 0C13.8846 0 3.84086e-08 14.1033 2.47434e-08 31.5C1.10782e-08 48.8967 13.8846 63 31 63C48.1154 63 62 48.8967 62 31.5Z"
                          fill="black"/>
                    <path
                        d="M26.096 45.0998L26.0962 45.0995L38.8945 33.2443C38.8945 33.2443 38.8945 33.2443 38.8945 33.2443C39.0235 33.1245 39.1072 33.0022 39.1551 32.8785L39.3882 32.9688L39.1551 32.8785C39.2069 32.7449 39.2333 32.5998 39.2324 32.4409L39.2324 32.4395C39.2324 32.2802 39.2055 32.1346 39.1536 32.0006C39.1055 31.8766 39.0221 31.7542 38.8942 31.6345C38.8941 31.6344 38.894 31.6343 38.8939 31.6342L26.096 19.744C25.7925 19.4621 25.4122 19.3169 24.9369 19.3169C24.4665 19.3169 24.0721 19.4706 23.7399 19.7793C23.4052 20.0902 23.25 20.4376 23.25 20.8311C23.25 21.2246 23.4052 21.572 23.7399 21.8829L23.74 21.8827L23.7479 21.8907L33.265 31.5628C33.7437 32.0493 33.7437 32.8298 33.265 33.3163L23.7479 42.9884L23.7481 42.9886L23.7399 42.9962C23.4362 43.2783 23.288 43.618 23.288 44.031C23.288 44.4386 23.4447 44.7911 23.7776 45.0995L23.7778 45.0998C24.1126 45.4108 24.4953 45.5622 24.9369 45.5622C25.3785 45.5622 25.7612 45.4108 26.096 45.0998Z"
                        fill="white" stroke="#999999" strokeWidth="0.5"/>
                </svg>

            </button>
        )
    }


    const [active,setActive] = useState(false)

    console.log(router)


    return (
        <>
            <Header/>
            <div className="mt-4 custom__container mx-auto">
                <div className={'md:flex gap-[65px] mt-8'}>
                    <div className={`md:w-8/12 w-full md:px-0`}>

                        <div className="flex gap-2 mb-4 items-center px-4">
                            <Link className={'font-[Candara] font-bold text-[18px] text-[#0053CA] hover:text-blue-500'} href={'/all-blog'}>ALL OUR BLOG</Link>
                            <SvgComponent type={'next'}/>
                            <Link className={'font-[Candara] font-bold text-[18px]'} href={'/all-blog'}>{detailBlog?.title}</Link>
                        </div>

                        {detailBlog && detailBlog.image.length > 0 &&
                            <Slider
                                nextArrow={<BlogNextSliderButton/>}
                                prevArrow={<BlogPreviewSliderButton/>}
                            >
                                {detailBlog.image.map((row: any, key) => (
                                    <div className='px-4' key={key}>
                                        <div key={row.id} className={'w-full mx-auto md:px-0'}>
                                            <Image
                                                src={row.file_link}
                                                alt={row.caption}
                                                width={1067}
                                                height={600}
                                                className={'w-full h-[250px] lg:h-[600px] object-cover rounded-[10px] shadow'}
                                            />
                                        </div>
                                        <div className="font-[Candara] mt-5 mb-3">
                                            <p className="font-semibold text-[#848484]">{row.caption}</p>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        }
                        {detailBlog && detailBlog.image.length === 0 &&
                            <div className="px-4">
                                <Image
                                    src={detailBlog.file_link}
                                    alt={'image detail'}
                                    width={1067}
                                    height={600}
                                    className={'w-full h-[300px] lg:h-[600px] object-cover rounded-[10px] shadow '}
                                />
                            </div>
                        }

                        <div className="h-[2px] my-4 bg-gray-400 w-[95%] mx-auto"/>

                        {detailBlog &&
                            <div className={'p-4'}>
                                <div className="">
                                    <p className={'font-[Candara] font-bold text-[24px]'}>{detailBlog.title}</p>
                                </div>

                                <div className="flex gap-4 items-center mt-3 mb-6 font-[Candara]">
                                    <p className={'flex items-center text-[15px]'}>
                                        {new Date(detailBlog.created_at).toLocaleDateString('id-ID', {dateStyle: "full"})}
                                    </p>
                                    <p className='flex gap-1 items-center text-[15px]'>
                                        <SvgComponent type={'user'}/>
                                        {detailBlog.admin.fullname}
                                    </p>
                                    <Link href={`/all-blog?hashtag=${detailBlog.category.id}`}
                                          className={'flex items-center gap-2 text-[15px]'}>
                                        <SvgComponent type={'feed'}/>
                                        {detailBlog.category.name}
                                    </Link>
                                </div>
                                <p className="font-[Candara] text-[#292929]" dangerouslySetInnerHTML={{__html: detailBlog.body}}/>

                                <div className="flex font-[Candara] mt-4 md:mt-[100px] gap-4">
                                    <div
                                        className={'border border-1 border-gray-400 bg-[#E53935] text-white p-1 px-4'}>Tags
                                    </div>
                                    {detailBlog?.has_hashtag.map((row) => (
                                        <div key={row.id}
                                             className={'border border-1 border-gray-400 p-1 px-4'}>{row.hashtag.name}
                                        </div>
                                    ))}
                                </div>

                                <div className="p-8 mb-10 bg-[#D9D9D9] mt-4 font-[Candara]">
                                    <p className='font-bold'>You can Share this post !</p>
                                    <div className="flex gap-4 mt-4">
                                        <FacebookShareButton
                                            url={`${process.env.URL}/${router.asPath}`}
                                        >
                                            <SvgComponent type={'facebook'}/>
                                        </FacebookShareButton>
                                        <TwitterShareButton
                                            url={`${process.env.URL}/${router.asPath}`}
                                        >
                                            <SvgComponent type={'twitter'}/>
                                        </TwitterShareButton>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                    <div className="md:w-4/12 mb-10 px-4 md:px-0">
                        <div className="bg-white rounded-[10px] md:px-[40px] p-4 md:py-[30px]">
                            <p className="font-[Candara] text-[#163055] text-[28px] md:text-[36px] font-[700]">More Like
                                This</p>

                            <div className="mt-4 font-[Candara]">
                                {moreBlog.length == 0 &&
                                    <>
                                        No Data
                                    </>
                                }
                                {moreBlog && moreBlog?.map((row: any, key: number) => (
                                    <Link href={`//all-blog/${row.id}?category=${row?.blog_categories_id}`} className={`${key > 0 ? 'mt-[20px]' : ''}`} key={key}>
                                        {key > 0 && <div className="h-[2px] my-4 bg-gray-400 w-full"/>}
                                        <div className={'w-full'}>
                                            <Image
                                                src={row.file_link}
                                                alt={row.title}
                                                width={720}
                                                height={422}
                                                className={'w-full h-[250px] object-cover'}
                                            />
                                        </div>
                                        <p className="text-[24px] mt-4 md:mt-[40px] font-[700] ">{row.title}</p>
                                        <div className="flex gap-3 items-center my-4 font-[Candara]">
                                            <p className='flex gap-1.5 items-center'>
                                                <SvgComponent type={'user'}/>
                                                {row?.admin?.fullname}
                                            </p>
                                            <p className={'flex gap-1.5 items-center'}>
                                                <SvgComponent type={'date-gray'}/>
                                                {new Date(row.created_at).toLocaleDateString('id-ID', {dateStyle: "long"})}
                                            </p>

                                            <p className={'flex gap-1.5 items-center'}>
                                                <SvgComponent type={'feed'}/>
                                                {row?.category?.name}
                                            </p>
                                        </div>

                                        <p
                                            className="font-[Candara] break-words text-4-line"
                                            dangerouslySetInnerHTML={{__html: row.body}}
                                        />
                                    </Link>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {
                landing &&
                <Footer social_media={landing.social_media}/>
            }

        </>
    )
}

export default BlogId