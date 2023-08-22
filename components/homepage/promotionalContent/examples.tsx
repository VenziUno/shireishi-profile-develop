import {StackedCarousel, ResponsiveContainer, StackedCarouselSlideProps} from 'react-stacked-center-carousel';
import React, {useState} from "react";
import PreviewButton from "@/components/common/previewButton";
import NextButton from "@/components/common/nextButton";


function ExamplesCarousel({landing}: any) {

    const data = landing

    const [prevButtonOnHover, setPrevButtonOnHover] = useState(false)
    const [nextButtonOnHover, setNextButtonOnHover] = useState(false)

    const ref: any = React.useRef<any>();
    return (
        <>
            <div className="mx-auto text-center w-full mt-[100px] relative">
                <h2 className={'uppercase md:text-2xl mx-auto sm:text-xl text-lg text-white flex items-center justify-center games__background py-6 drop-shadow-[0_7px_4px_rgba(0,0,0,0.4)] lg:w-fit w-full lg:px-36'}>Promotional
                    Video</h2>
            </div>

            <div className={'pt-[40px] px-4 md:px-8 lg:px-0 container'} style={{position: 'relative'}}>
                <ResponsiveContainer
                    carouselRef={ref}
                    render={(width, carouselRef) => {
                        let currentVisibleSlide = 3;
                        if (width <= 1280) currentVisibleSlide = 3;
                        if (width <= 720) currentVisibleSlide = 1;
                        return (
                            <StackedCarousel
                                ref={carouselRef}
                                slideComponent={Slide}
                                slideWidth={750}
                                carouselWidth={width}
                                data={data}
                                maxVisibleSlide={5}
                                currentVisibleSlide={currentVisibleSlide}
                                disableSwipe
                                customScales={[1, 0.85, 0.7, 0.55]}
                                transitionTime={450}
                            />
                        );
                    }}
                />

                <PreviewButton onClick={() => {
                    ref.current.goNext();
                }} setPrevButtonOnHover={setPrevButtonOnHover} leftClass={'left-[10px] z-[99] lg:left-[-5%]'}
                               topClass={'md:top-[47%] top-[50%]'} prevButtonOnHover={prevButtonOnHover}/>

                <NextButton onClick={() => {
                    ref.current?.goBack();
                }} setNextButtonOnHover={setNextButtonOnHover} rightClass={'right-[2px] z-[99] lg:right-[-5%]'}
                            topClass={'md:top-[47%] top-[50%]'} nextButtonOnHover={nextButtonOnHover}/>

            </div>
        </>
    );
}

export default  ExamplesCarousel;

const Slide = React.memo(function (props: StackedCarouselSlideProps) {
    const {data, dataIndex, isCenterSlide, swipeTo, slideIndex} = props;
    const [loadDelay, setLoadDelay] = React.useState<any>();
    const [removeDelay, setRemoveDelay] = React.useState<any>();
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
        if (isCenterSlide) {
            clearTimeout(removeDelay);
            setLoadDelay(setTimeout(() => setLoaded(true), 1000));
        } else {
            clearTimeout(loadDelay);
            if (loaded) setRemoveDelay(setTimeout(() => setLoaded(false), 1000));
        }
    }, [isCenterSlide, loadDelay, loaded, removeDelay]);

    React.useEffect(() => () => {
        clearTimeout(removeDelay);
        clearTimeout(loadDelay);
    });

    const {link} = data[dataIndex];

    return (
        <div className='twitch-card h-[300px] md:h-[350px] lg:h-[575px]' draggable={false}>
            <div className={`cover fill ${isCenterSlide && loaded ? 'off' : 'on'}`}>
                <div
                    className='card-overlay fill'
                    onClick={() => {
                        if (!isCenterSlide) swipeTo(slideIndex);
                    }}
                />

                <iframe
                    src={`https://www.youtube.com/embed/${link.split('=')[1]}`}
                    className={'md:w-full w-full rounded-[30px] object-contain h-full'}
                />
            </div>
            {loaded && (
                <div className='detail fill'>
                    <iframe
                        src={`https://www.youtube.com/embed/${link.split('=')[1]}`}
                        className={'md:w-full w-full rounded-[30px] object-contain h-full'}
                    />

                </div>
            )}
        </div>
    );
});

Slide.displayName = 'Slide'; // Provide a display name for the component
