import Title from "../title";
import "video-react/dist/video-react.css";
import YouTube from "react-youtube";

interface Props {
  link: string;
}

const PromotionalVideo: React.FC<Props> = ({ link }) => {
  return (
    <section id="PromotionalVideo" className="container sm:px-16 px-6 mx-auto mb-32">
      <div className="flex flex-col gap-16 items-center">
        <h2 className="uppercase md:text-2xl sm:text-xl text-lg text-white flex items-center justify-center games__background py-6 drop-shadow-[0_7px_4px_rgba(0,0,0,0.4)] lg:w-fit w-full lg:px-36">
          Promotional Video
        </h2>
        <div className="w-full flex items-center justify-center player-container ">
          <YouTube videoId={link} />
        </div>
      </div>
    </section>
  );
};

export default PromotionalVideo;
