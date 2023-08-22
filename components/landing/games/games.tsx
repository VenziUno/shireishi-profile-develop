import Title from "../../title";
import GamesItem from "./gamesItem";
import {Game} from "@/interface/landing";

interface Props {
    games: Game[];
}

const Games: React.FC<Props> = ({games}) => {

    return (
        <section id="games">
            <div className="w-full h-full game__background custom__container">
                <div className="flex flex-col w-fit mx-auto gap-16 items-center justify-center px-6 pt-24">
                    <h2 className="uppercase md:text-2xl sm:text-xl text-lg text-white flex items-center justify-center games__background py-6 drop-shadow-[0_7px_4px_rgba(0,0,0,0.4)] lg:w-fit w-full lg:px-36">
                        Games
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto w-fit relative gap-8">
                        {games.map((item, index) => {
                            return <GamesItem key={index} banner={item}/>;
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Games;
