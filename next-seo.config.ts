import { DefaultSeoProps } from "next-seo";

const APP_DEFAULT_SEO: DefaultSeoProps = {
  title: "SHIREISHI PRODUCTION",
  openGraph: {
    title: "SHIREISHI PRODUCTION",
    description:
      "Shireishi Production is a game studio based in the vibrant city of Malang, Indonesia. Our unwavering commitment to research and development fuels our passion for creating exceptional games that rival the very best in the world.",
    images: [
      {
        url: "/images/logo.png",
        alt: "SHIREISHI PRODUCTION",
      },
    ],
    type: "website",
    locale: "id_ID",
    url: process.env.URL,
    site_name: "Shireishi Production",
  },
  twitter: {
    handle: "@shireishi_production",
    site: "@shireishi_production",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, shrink-to-fit=no",
    },
    {
      httpEquiv: "x-ua-compatible",
      content: "IE=edge; chrome=1",
    },
  ],
};

export default APP_DEFAULT_SEO;
