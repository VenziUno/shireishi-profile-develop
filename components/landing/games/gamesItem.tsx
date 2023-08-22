
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import {Game} from "@/interface/landing";

type ContainerProps = {
    banner: Game;
    children: React.ReactNode;
};

type GamesProps = {
  banner: Game;
}

const GamesItemContainer: React.FC<ContainerProps> = ({ banner, children }) => {
  return (
    <>
        {banner?.name.toLowerCase()!=='coming soon' ? (
        <Link
          href={`/games/${banner.id}`}
          // target="_blank"
          rel="noreferrer"
          className="relative overflow-hidden rounded-lg hover:scale-[1.05] transition-all ease-in duration-200 group"
        >{children}</Link>
      ) : (
        <div className="relative overflow-hidden rounded-lg hover:scale-[1.05] transition-all ease-in duration-200 group">{children}</div>
        )}
    </>
  );
};

const GamesItem: React.FC<GamesProps> = ({ banner }) => {
  return (
    <GamesItemContainer banner={banner}>
      <div
        className={`w-full h-full ${banner?.cover_link ? "" : "bg-[#E6E6E6]"
          } shadow-2xl flex items-center justify-center text-3xl relative`}
      >
        {banner?.cover_link && (
          <Image
            src={banner.cover_link}
            alt="banner"
            width={400}
            height={400}
            className=""
          />
        )}
      </div>
      {banner?.name && (banner?.name.toLowerCase() !== "coming soon") && (
        <>
          <div className=" w-full h-full absolute inset-0 p-2">
            <div className="w-full h-full border-white border-2 rounded-lg"></div>
          </div>
          <div
            style={{ backgroundColor: `${banner?.color_background}`}}
            className={`absolute bottom-0 w-full py-4 px-6 backdrop-blur-[1.5px]`}
          >
            <p className="text-white candarab">{banner.name}</p>
          </div>
        </>
      )}
    </GamesItemContainer>
  );
};

export default GamesItem;
