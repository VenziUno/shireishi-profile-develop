import Left from "@/images/arrow-left.png";
import Right from "@/images/arrow-right.png";
import ChangeLeft from "@/images/arrowLeft.png";
import ChangeRight from "@/images/arrowRight.png";
import Image from "next/image";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CarouselHeader from "./carouselHeader";
import {Banner} from "@/interface/landing";


interface Props {
  banners: Banner[]
}

const Carousel: React.FC<Props> = ({ banners }) => {

  const sliderRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [prevButtonOnHover, setPrevButtonOnHover] = useState(false);
  const [nextButtonOnHover, setNextButtonOnHover] = useState(false);

  const settings = {
    className: "small-slider",
    infinite: true,
    slidesToShow: Math.min(banners?.length ?? 0, 4),
    arrows: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    beforeChange: (current: number, next: number) => {
      setCurrentIndex(next);
    },
  };

  const handleSliderItemOnClick = (index: number) => {
    const activeSlide = sliderRef.current?.innerSlider?.list.querySelector(
      `.slick-slide:nth-child(${index + 1}) .slider-item`
    ) as HTMLElement;
    if (activeSlide) {
      activeSlide.classList.add("active");
    }
    setCurrentIndex(index);
  };
  const prevButtonOnClick = () => {
    (sliderRef.current as Slider).slickPrev();
  };

  const nextButtonOnClick = () => {
    (sliderRef.current as Slider).slickNext();
  };

  return (
    <section id="carousel" className="flex flex-col gap-4">
      <CarouselHeader data={banners[currentIndex]} />
      <div className="flex flex-col-reverse items-center md:flex-row xl:pt-24 pt-12 xl:pb-32 pb-24 gap-12 custom__container">
        <div className="flex gap-4 items-center">
          <button
            onClick={() => prevButtonOnClick()}
            onMouseEnter={() => setPrevButtonOnHover(true)}
            onMouseLeave={() => setPrevButtonOnHover(false)}
          >
            <Image
                src={prevButtonOnHover ? ChangeLeft : Left}
                alt="left"
                className="max-w-[36px]"
            />
          </button>
          <button
            onClick={() => nextButtonOnClick()}
            onMouseEnter={() => setNextButtonOnHover(true)}
            onMouseLeave={() => setNextButtonOnHover(false)}
          >
            <Image
              src={nextButtonOnHover ? ChangeRight : Right}
              alt="left"
              className="max-w-[36px]"
            />
          </button>
        </div>

        <div className="md:w-1/2 w-full flex-1 items-center px-4">
          <Slider ref={sliderRef} variableWidth={true} {...settings}>
            {banners.map((item, index) => {
              return (
                <div className="w-fit h-48 !flex items-center" key={index}>
                  <button
                    className={`rounded-xl overflow-hidden scale-y-100 ${index === currentIndex ? "active scale-y-[1.13]" : ""
                      } h-[158px] transition-all ease-in-out duration-750`}
                    onClick={() => handleSliderItemOnClick(index)}
                  >
                    <Image
                      src={item.thumbnail_link}
                      alt={""}
                      width={282}
                      height={169}
                      className={`w-[300px] h-full hover:cursor-pointer object-cover`}
                    />
                  </button>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
