import React, {useState} from "react";
import Slider from "react-slick";
import Image from "next/image";


interface props {
    gameData: any
}

const SliderComponent: React.FC<props> = ({gameData}) => {

    const [nav1, setNav1] = useState<any>(null);
    const [nav2, setNav2] = useState<any>(null);

    const NullButton = () => {
        return (
            <>
            </>
        )
    }

    return (
        <>
            <div className="w-full flex flex-col md:flex-row gap-4 items-center">
                <div className="md:w-1/2 w-full">
                    <div className="">
                        {nav2 &&
                            <Slider
                                asNavFor={nav2}
                                ref={(slider) => setNav1(slider)}
                                // centerMode={true}
                                centerPadding={'10px'}
                                nextArrow={<NullButton/>}
                                prevArrow={<NullButton/>}
                            >
                                {gameData.photo.map((row: any) => (
                                    <div className="px-[10px]" key={row.id}>
                                        <Image
                                            src={row.file_link}
                                            alt={'image'}
                                            width={780}
                                            height={436}
                                            className={'w-full h-[180px] md:h-[300px] object-cover bg-gray-200 mx-auto shadow rounded-[40px]'}
                                        />
                                    </div>
                                ))}

                            </Slider>
                        }
                    </div>
                </div>
                <div className="md:w-1/2 md:p-8">
                    <p className={'font-[Casual-Contact-MF-Regular] text-[35px] uppercase font-[400]'}>Description</p>
                    <p className="font-[Candara] text-[24px]" dangerouslySetInnerHTML={{__html: gameData.description}}/>
                </div>
            </div>

            <div className=" mt-[50px]">
                {gameData &&
                    <Slider
                        asNavFor={nav1}
                        ref={(sldier) => setNav2(sldier)}
                        infinite={true}
                        slidesToScroll={1}
                        slidesToShow={gameData.photo.length > 6 ? 6 : gameData.photo.length}
                        responsive={[
                            {
                                breakpoint: 706,
                                settings: {
                                    slidesToShow: 2,
                                }
                            }
                        ]}
                    >
                        {gameData.photo.map((row: any) => (
                            <div key={row.id}>
                                <Image
                                    src={row.file_link}
                                    alt={'image'}
                                    width={300}
                                    height={200}
                                    className={'w-[150px] h-[90px] md:w-[210px] lg:w-[195px] lg:h-[110px] xl:w-[195px] md:h-[150px] xl:h-[110px] object-cover shadow-lg bg-gray-200 mx-auto'}
                                />
                            </div>
                        ))}
                    </Slider>
                }
            </div>
        </>
    )
}

export default SliderComponent