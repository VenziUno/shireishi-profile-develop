import Footer from "@/components/footer";
import Header from "@/components/header";
import About from "@/components/landing/about";
import ContactUs from "@/components/landing/contactUs";
import FollowUs from "@/components/landing/followUs";
import Games from "@/components/landing/games/games";
import {useEffect, useState} from "react";
import axios from "axios";
import {LandingLoader} from "@/components/loader";
import {NextSeo} from "next-seo";
import BannerLanding from "@/components/homepage/banner";
import NewsComponent from "@/components/homepage/News";
import {allDataLanding} from "@/interface/landing";
import Carousel from "@/components/landing/carousel/carousel";
import Examples from "@/components/homepage/promotionalContent/examples";



export default function Home() {
    const [landing, setLanding] = useState<allDataLanding>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`${process.env.API_URL}/all-data`)
            .then((res) => {
                setLanding(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });

    }, []);

    return (
        <>
            <NextSeo/>
            <LandingLoader isLoading={loading}/>
            <Header/>
            <main className="relative flex flex-col">
                {landing && (
                    <>
                        <div className="hidden md:block bg-white">
                            <BannerLanding
                                assetLanding={landing.banner}
                            />
                        </div>
                        <div className="block md:hidden">
                            <Carousel banners={landing.banner}/>
                        </div>
                        <div className="bg-promotional pb-[100px]">
                            <Examples landing={landing.promotional_video}/>
                        </div>
                        <Games games={landing.game}/>
                        <About text={landing.web_profile.about_us}/>
                        <NewsComponent
                            news={landing.blog}
                            blogCategory={landing.blogCategory}
                        />
                        <FollowUs/>
                    </>
                )}
                {landing && <ContactUs email={landing.web_profile.contact_us}/>}
            </main>
            {landing && <Footer social_media={landing.social_media}/>}
        </>
    );
}
