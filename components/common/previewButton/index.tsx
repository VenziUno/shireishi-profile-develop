import Image from "next/image";
import ChangeLeft from "@/images/arrowLeft.png";
import Left from "@/images/arrow-left.png";
import React from "react";


interface props {
    onClick?: () => void
    setPrevButtonOnHover: (e: boolean) => void
    prevButtonOnHover: boolean
    leftClass?: string
    topClass?: string
}

const PreviewButton: React.FC<props> = (props) => {
    const {onClick, setPrevButtonOnHover, prevButtonOnHover,leftClass,topClass} = props
    return (
        <button
            onClick={onClick}
            className={`absolute z-[10] ${leftClass} ${topClass}`} onMouseEnter={() => setPrevButtonOnHover(true)}
            onMouseLeave={() => setPrevButtonOnHover(false)}
        >
            <Image
                src={prevButtonOnHover ? ChangeLeft : Left}
                alt="left"
                className="max-w-[36px]"
            />
        </button>
    )
}

export default PreviewButton

PreviewButton.defaultProps = {
    leftClass: 'left-[5%]',
    topClass: 'top-[42%]',
}