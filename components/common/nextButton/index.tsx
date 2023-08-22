import React from "react";
import Image from "next/image";
import ChangeRight from "@/images/arrowRight.png";
import Right from "@/images/arrow-right.png";


interface props {
    onClick?: () => void
    setNextButtonOnHover: (e: boolean) => void
    nextButtonOnHover: boolean
    rightClass?: string
    topClass?: string

}

const NextButton: React.FC<props> = (props) => {
    const {onClick, setNextButtonOnHover, nextButtonOnHover, rightClass, topClass} = props
    return (
        <button
            onClick={onClick}
            className={`absolute ${rightClass} ${topClass}`} onMouseEnter={() => setNextButtonOnHover(true)}
            onMouseLeave={() => setNextButtonOnHover(false)}
        >
            <Image
                src={nextButtonOnHover ? ChangeRight : Right}
                alt="left"
                className="max-w-[36px]"
            />
        </button>
    )
}

export default NextButton

NextButton.defaultProps = {
    rightClass: 'right-[5%]',
    topClass: 'top-[42%]'
}