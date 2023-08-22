import React, {useEffect, useRef, useState} from "react";
import Slider from "react-slick";
import Image from "next/image";
import ChangeLeft from "@/images/arrowLeft.png";
import Left from "@/images/arrow-left.png";
import ChangeRight from "@/images/arrowRight.png";
import Right from "@/images/arrow-right.png";
import NextButton from "@/components/common/nextButton";
import PreviewButton from "@/components/common/previewButton";
import {Banner} from "@/interface/landing";
import Link from "next/link";

interface props {
    assetLanding: Banner[]
}

type slickSettings = {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    pauseOnHover?: boolean;
    arrows?: boolean;
    prevArrow?: React.ReactNode;
    nextArrow?: React.ReactNode;
    beforeChange?: (currentSlide: number, nextSlide: number) => void;
    afterChange?: (currentSlide: number) => void;
}


const BannerLanding: React.FC<props> = ({assetLanding}) => {

    const [nav1, setNav1] = useState<any>(null);
    const [nav2, setNav2] = useState<any>(null);
    const [prevButtonOnHover, setPrevButtonOnHover] = useState(false)
    const [nextButtonOnHover, setNextButtonOnHover] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className={'relative'}>
            {(nav2) &&
                <Slider
                    asNavFor={nav2}
                    ref={(slider) => setNav1(slider)}
                    prevArrow={
                        <PreviewButton
                            leftClass={'left-[120px]'}
                            topClass={'bottom-[50px] z-10'}
                            prevButtonOnHover={prevButtonOnHover}
                            setPrevButtonOnHover={setPrevButtonOnHover}
                        />
                    }
                    nextArrow={
                        <NextButton
                            rightClass={'right-[120px]'}
                            topClass={'bottom-[50px] z-10'}
                            nextButtonOnHover={nextButtonOnHover}
                            setNextButtonOnHover={setNextButtonOnHover}
                        />
                    }
                >
                    {assetLanding.map((row,key:number) => (
                        <Link href={`/games/${row.id}`} key={key}>
                            <div key={row.id} className={'relative'}>
                                <Image
                                    alt={'image'}
                                    width={1920}
                                    src={row.file_link}
                                    height={800}
                                    blurDataURL={row.file_link}
                                    placeholder={"blur"}
                                    className={'object-cover position h-[250px] md:h-[500px] xl:h-[800px] mx-auto'}
                                />
                                <div
                                    className={'absolute w-full h-full left-0 top-0 flex flex-col justify-center'}
                                >
                                    <div className="absolute w-3/4  h-full top-0 left-0 bg-gradient-to-r from-white to-transparent"></div>
                                    <div className="custom__container relative h-full flex mt--200 justify-center flex-col px-8">
                                        <p
                                            className="font-semibold leading-tight text-start xl:text-[60px] capitalize text-white md:text-gray-800"
                                            style={{textShadow: "1px 1px white"}}
                                            dangerouslySetInnerHTML={{__html: row.title}}/>

                                        <p
                                            className="font-bold text-[12px] md:text-[18px] w-1/2 text-start font-[Candara] capitalize text-white md:text-gray-800 mt-10"
                                            style={{filter: "drop-shadow(0px 0px 10px #FFF)"}}
                                            dangerouslySetInnerHTML={{__html: row.description}}/>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Slider>
            }

            <div className="w-full h-[100px] absolute bottom-[0px]">
                <Image
                    src={'/images/newbg-blur.png'}
                    alt={'image'}
                    width={1920}
                    height={100}
                    className={'object-cover w-full h-[100px]'}
                />
            </div>

            <div className={`${assetLanding.length>3? 'container':'max-w-[1000px]'} mx-auto mt--200 xl:block hidden`}>
                <Slider
                    asNavFor={nav1}
                    beforeChange={(currentSlide, nextSlide) => {
                        setActiveIndex(nextSlide)
                    }}
                    ref={(slider) => setNav2(slider)}
                    slidesToScroll={1}
                    focusOnSelect={true}
                    slidesToShow={assetLanding.length > 4 ? 4 : assetLanding.length}
                    prevArrow={
                        <></>
                    }
                    nextArrow={
                        <></>
                    }
                    responsive={[
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                infinite: true
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            }
                        }
                    ]}
                >
                    {assetLanding.map((row,key:number) => (
                        <div
                            key={row.id} className={`relative w-[340px] px-2 h-[200px] rounded-[10px] overflow-hidden`}
                        >
                            <Image
                                src={row.thumbnail_link} alt={'thumbnail'}
                                width={280}
                                blurDataURL={row.thumbnail_link}
                                placeholder={"blur"}
                                className={`w-[300px] h-[200px] object-cover rounded-[10px] mx-auto ${key===activeIndex? 'border border-4 border-blue-500' :''}`}
                                height={220}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default BannerLanding