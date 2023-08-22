import Slider from "react-slick";
import YouTube from "react-youtube";
import {allDataLanding} from "@/interface/landing";


export default function PromotionalContent({landing}: allDataLanding|any) {
    return (
        <div className="home__background md:h-[100vh] px-8 py-10">
            <div className="games__background mx-auto md:w-[800px] p-3">
                <p className={'text-center text-white md:text-[36px]'}>Promotional Video</p>
            </div>

            <div className="mt-8 text-center">
                <div className="container">
                    <Slider
                        centerMode={true} centerPadding={'60px'} slidesToShow={1}
                        slidesToScroll={1}
                        responsive={[
                            {
                                breakpoint: 480,
                                settings: {
                                    centerMode: false,
                                    centerPadding: "0px"
                                }
                            }
                        ]}
                    >
                        {landing?.promotional_video?.map((row:any) => (
                            <div key={row?.id} className={'text-center w-full h-[200px] md:h-[500px] md:px-5'}>
                                <YouTube
                                    videoId={row.link.split('=')[1]}
                                    iframeClassName={'mx-auto w-full h-[200px] md:h-[500px] rounded-[10px]'}/>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}