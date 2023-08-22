import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {Banner} from "@/interface/landing";

interface Props {
  data: Banner;
}



const CarouselHeader: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row xl:gap-0 gap-6 justify-between items-center mx-auto custom__container">
      <div className="order-2 md:order-1 flex flex-col gap-4 justify-center w-fit md:w-1/2 md:items-start items-center">
        <h1
          className="candarab xl:text-6xl lg:text-4xl text-3xl text-[#163055] drop-shadow-[0_4px_1px_rgba(0,0,0,0.2)] md:text-left text-center w-fit"
          dangerouslySetInnerHTML={{ __html: data.title }}
        ></h1>
        <p
          className="candarab text-[15px] text-[#292929] md:text-left text-center px-2"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></p>
      </div>

      <div className="order-1 md:order-2 md:w-1/2 md:px-0">
        {data.redirect_link ? (
          <Link href={data.redirect_link} target="_blank" rel="noreferrer">
            <Image src={data.file_link} width={686} height={394} alt="image" className={'w-full h-[250px] object-cover'} />
          </Link>
        ) : (
          <Image src={data.file_link} width={686} height={394} alt="image"  className={'w-full h-[250px] object-cover'} />
        )}
      </div>
    </div>
  );
  ``;
};

export default CarouselHeader;
