import React from "react";
import {InstagramEmbed, TwitterEmbed} from "react-social-media-embed"

const FollowUs: React.FC = () => {


    return (
        <>
            <section className={'my-[150px]'}>
                <div className="flex flex-col gap-16 items-center sm:w-fit sm:mx-auto sm:py-12 py-0 z-50">
                    <h3 className="uppercase md:text-2xl sm:text-xl text-lg text-white flex items-center justify-center games__background py-6 drop-shadow-[0_7px_4px_rgba(0,0,0,0.4)] lg:w-fit w-full lg:px-36">
                        Follow Us
                    </h3>
                </div>

                <div
                    className={'flex flex-col md:flex-row justify-center md:items-start items-center gap-5 mt-8 md:mt-0'}
                    style={{justifyContent: 'center'}}>
                    <div className="bg-white h-full overflow-hidden h-[600px]">
                        <TwitterEmbed url={'https://twitter.com/ShireishiProd/status/1680138652809314305'} width={350} />
                    </div>
                    <div className="overflow-hidden w-[370px] overflow-y-auto h-[600px] mx-0">
                        <InstagramEmbed url={'https://www.instagram.com/p/CoEuprErKJe/'} width={350}/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FollowUs;
