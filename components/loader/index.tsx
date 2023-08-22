import Image from "next/image";
import 'animate.css'

import Logo from "@/images/logo.png";
import { useEffect, useState } from "react";
interface Props {
  isLoading: boolean;
}

export const LandingLoader: React.FC<Props> = ({ isLoading }) => {
  const [display, setDisplay] = useState(true)

  const hide = async (ms: number) => {
    await new Promise((r) => setTimeout(r, ms));
    setDisplay(false);
  };

  useEffect(() => {
    !isLoading && hide(1000)
  }, [isLoading])

  return (
    <>
      <div
        className={`animate__animated  fixed inset-0 bg-black transition-all ease-in-out z-[100] duration-1000 flex items-center justify-center ${
          display ? "opacity-100 visible" : "opacity-0 z-[-100] animate__fadeOut invisible"
        }`}
      >
        <Image
          className="cursor-pointer"
          src={Logo}
          alt="Shireishi"
          layout="fixed"
          width={200}
          height={200}
        />
      </div>
    </>
  );
};
