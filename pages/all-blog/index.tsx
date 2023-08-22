import React, {useEffect, useState} from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import axios from "axios";
import {LandingLoader} from "@/components/loader";
import Image from "next/image";
import SvgComponent from "@/components/common/svgComponent";
import Link from "next/link";
import {allDataLanding} from "@/interface/landing";
import {useRouter} from "next/router";

const AllBlogPage: React.FC = () => {

    const [landing, setLanding] = useState<allDataLanding>();
    const [allBlog, setAllBlog] = useState<Array<any>>([]);
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState(0)
    const [search, setSearch] = useState('')

    const router = useRouter()
    const {hashtag, searchs} = router.query

    useEffect(() => {
        axios
            .get(`${process.env.API_URL}/all-data`)
            .then((res) => {
                setLanding(res.data.data);
                // setAllBlog(res.data.data.blog);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });

        axios.get(`${process.env.API_URL}/blog?category=${hashtag ?? ''}&search=${searchs ?? ''}`).then((res) => {
            setAllBlog(res?.data?.data)
        }).catch((err) => {
            console.log(err)
        })

        if (hashtag){
            setActive(Number(hashtag))
        }

    }, [hashtag, searchs]);

    const filterCategory = (idParams: number) => {
        if (idParams === 0) {
            router.replace({
                query: {
                    hashtag: 0,
                    search: ''
                }
            })
        } else {
            router.replace({
                query: {
                    ...router.query,
                    hashtag: idParams
                }
            })
        }
        setActive(idParams)
    }


    return (
        <>
            <LandingLoader isLoading={loading}/>
            <Header/>
            <main>
                {landing &&
                    <>
                        <div className="relative">
                            <div
                                className="relative w-full h-[300px] z-[10] bg-gradient-to-r from-[#000000] to-[#000000]"
                            >
                                <Image
                                    src={'/images/blog-banner.png'}
                                    alt={'blog banner'}
                                    width={1024}
                                    height={300}
                                    className={'w-full h-[300px] object-cover'}
                                />
                            </div>
                            <div className="absolute w-full h-[300px] flex items-center justify-center z-[12] top-1">
                                <div
                                    className="flex shadow  border-gray-400 items-center rounded-[10px] overflow-hidden w-[60%]">
                                    <input
                                        onChange={(e) => {
                                            setSearch(e.target.value)
                                        }}
                                        placeholder={'search'}
                                        className={'font-sans font-[600] p-2 w-full focus:outline-none'}
                                        type="search"/>
                                    <button
                                        onClick={() => {
                                            router.replace({
                                                query: {
                                                    ...router.query,
                                                    searchs: search
                                                }
                                            })
                                            // const temp: any = landing?.blog?.filter((row) => row.title.includes(searchs ?? ''))
                                            // setAllBlog(temp)

                                        }}
                                        className={'p-2 bg-[#393939] px-3'}
                                    >
                                        <SvgComponent type={'search'}/>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="py-[65px] px-4 xl:px-0">
                                <p className="text-center text-[36px]">All Our Blog</p>
                                <div className="flex gap-4 flex-grow-0 font-[Candara] pt-[50px] w-full overflow-x-auto scroll__custom whitespace-nowrap">
                                    <button onClick={() => filterCategory(0)}
                                            className={`border border-1 border-[#ADADAD] px-6 py-1 ${active === 0 ? "bg-black text-white" : "bg-white"}`}>All
                                    </button>
                                    {landing.blogCategory.map((row) => (
                                        <button
                                            key={row.id}
                                            onClick={() => filterCategory(row.id)}
                                            className={`border border-1 border-[#ADADAD] px-6 py-1 ${active === row.id ? "bg-black text-white" : "bg-white"}`}>#{row.name}</button>
                                    ))}
                                </div>

                                <div className="mt-5 grid grid-cols-12 relative gap-5">
                                    {allBlog.map((row) => (
                                        <div
                                            key={row.id}
                                            className={'bg-white col-span-12 md:col-span-6 lg:col-span-4 bg-white rounded-[10px] p-5'}>
                                            <div className="">
                                                <Image
                                                    src={row.file_link}
                                                    alt={'image'}
                                                    width={365}
                                                    height={240}
                                                    className={'w-full h-[240px] object-cover'}
                                                />
                                            </div>
                                            <Link key={row.id} href={`/all-blog/${row.id}?category=${row.category.id}`}>
                                                <p className="font-[Candara] capitalize mt-[20px] font-bold text-[24px]">{row.title}</p>
                                            </Link>
                                            <div className="flex gap-2 items-center my-6 font-[Candara]">
                                                <p className='flex gap-2 items-center text-[15px]'>
                                                    <SvgComponent type={'user'}/>
                                                    {row.admin.fullname}
                                                </p>
                                                <p className={'flex items-center gap-2 text-[15px]'}>
                                                    <SvgComponent type={'date-gray'}/>
                                                    {new Date(row.created_at).toLocaleDateString('id-ID', {dateStyle: "full"})}
                                                </p>
                                                <p className={'flex items-center gap-2 text-[15px]'}>
                                                    <SvgComponent type={'feed'}/>
                                                    {row.category.name}
                                                </p>
                                            </div>
                                            <p className="font-[Candara] break-words whitespace-pre-wrap text-4-line"
                                               dangerouslySetInnerHTML={{__html: row.body}}/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Footer social_media={landing.social_media}/>
                    </>
                }
            </main>
        </>
    )
}

export default AllBlogPage