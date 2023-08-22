import React, {useEffect, useState} from "react";
import Image from "next/image";


interface props {
    gameData: any
    dataSelected:any,
    setDataSelected:(e:any)=>void
}

const SteamCopy: React.FC<props> = ({gameData,dataSelected,setDataSelected}) => {

    useEffect(() => {
        if (gameData) {
            setDataSelected(gameData.photo[0])
        }
    }, [gameData, setDataSelected])

    return (
        <>
            <div className="md:flex gap-[60px]">
                <div className="md:w-1/2">
                    {dataSelected &&
                        <Image
                            src={dataSelected.file_link}
                            alt={'img selected'}
                            width={780}
                            height={440}
                            className={'w-full  h-[220px] md:h-[250px] xl:h-[440px] object-cover rounded-[40px]'}
                        />
                    }
                </div>
                <div className="md:w-1/2 flex flex-col items-start justify-center mt-6 md:mt-0">
                    <p className={'font-[Casual-Contact-MF-Regular] text-[35px] uppercase font-[400]'}>Description</p>
                    <p className="font-[Candara] text-[24px]" dangerouslySetInnerHTML={{__html: gameData?.description}}/>
                </div>
            </div>

            <div className="overflow-x-auto w-full">
                <div className="flex inline-flex gap-[30px] mt-10 h-[150px]">
                    {gameData?.photo.map((row: any, key: number) => (
                        <div
                            key={key}
                            onClick={() => {
                                const iFindYou = gameData.photo.find((finded: { id: number }) => finded.id == row.id)
                                setDataSelected(iFindYou)
                            }}
                            className={`w-[200px] cursor-pointer`}
                        >
                            <Image
                                src={row.file_link}
                                alt={'image'}
                                width={195}
                                height={110}
                                className={`w-[195px] h-[110px] object-cover ${row.id === dataSelected?.id ? 'shadow-lg border border-4 border-blue-500' : ''}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SteamCopy