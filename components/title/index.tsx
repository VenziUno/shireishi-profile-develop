import Coret from "@/images/coret-bg.png";
import Image from "next/image";

interface Props {
  title: string;
}

const Title: React.FC<Props> = ({ title }) => {
  return (
    <p className="uppercase md:text-2xl sm:text-xl text-lg text-white flex items-center justify-center games__background py-6 drop-shadow-[0_7px_4px_rgba(0,0,0,0.4)] lg:w-fit w-full lg:px-36">
      {title}
    </p>
  );
};

export default Title;
