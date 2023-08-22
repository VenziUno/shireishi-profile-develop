import Logo from "@/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import {SocialMedia} from "@/interface/landing";

interface Props {
  social_media: SocialMedia[];
}

const Footer: React.FC<Props> = ({ social_media }) => {
  return (
    <div className="footer__background z-50 relative">
      <div className="flex flex-col lg:flex-row justify-between items-center py-5 sm:px-44 px-24 gap-6 lg:gap-0">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src={Logo}
            alt="Shireishi"
            layout="fixed"
            width={60}
            height={40}
          />
        </Link>
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <p className="candara sm:text-base text-sm text-white">FOLLOW US:</p>
          <div className="grid grid-cols-4 gap-2">
            {social_media.map((item, index) => {
              return (
                <Link
                  href={item.link??'#'}
                  target="_blank"
                  key={index}
                >
                  <div className="p-2 bg-[#d9d9d9] w-fit rounded-[20%] hover:scale-[1.15] transition-all ease-in">
                    <Image
                      src={item.file_link}
                      alt="facebook"
                      width={20}
                      height={20}
                      className="group-hover"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col items-center justify-center pb-4 pt-4">
        <p className="md:text-md text-center md:text-left text-white candara">
          &#169; Copyright 2023. Shireishi Production
        </p>
      </div>
    </div>
  );
};
export default Footer;
