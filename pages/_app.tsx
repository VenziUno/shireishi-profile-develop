import "../styles/globals.css";
import "/styles/styless.css";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import APP_DEFAULT_SEO from "@/next-seo.config";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import 'react-stacked-carousel/dist/index.css';
import Head from "next/head";



function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const cleanPath = asPath.split("#")[0].split("?")[0];
  const canonicalUrl = `${process.env.URL}${asPath === "/" ? "" : cleanPath}`;

  return (
    <>
      <DefaultSeo canonical={canonicalUrl} {...APP_DEFAULT_SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
