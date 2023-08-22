import { StaticImageData } from "next/image";

export type Banner = {
  image?: StaticImageData;
  href?: string;
  target: string;
  title?: string;
  baseColor?: string;
}

export type Images = {
  image: StaticImageData;
  href: string;
  target: string;
  title: string;
}

export type Poster = {
  poster: StaticImageData,
}

export type Position = {
  position: string,
}