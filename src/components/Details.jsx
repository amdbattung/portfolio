import { useState } from "react";
import MainDetails from "./detailsItems/MainDetails";
import Accomplishments from "./detailsItems/Accomplishments";

import LeftArrow from "../assets/left_arrow.svg?react";
import RightArrow from "../assets/right_arrow.svg?react";

const items = [
    <MainDetails />,
    <Accomplishments />
]

function Details() {

    const [currentIndex, setCurrentIndex] = useState(0);

    function nextItem() {
        if (currentIndex < items.length - 1) {
            setCurrentIndex(currentIndex + 1)
        }
    };

    function prevItem() {
        if (currentIndex >= 1) {
            setCurrentIndex(currentIndex - 1)
        }
    };

    return (
        <section className="m-5 p-5 flex items-center justify-center animate-appear delay-100 fill-mode-forwards opacity-0">
            <button className="disabled:opacity-0" onClick={prevItem} disabled={ currentIndex < items.length - 1 }>
                <LeftArrow className="fill-white w-9 h-min" />
            </button>
            <div className="w-full flex flex-col max-h-[85vh] overflow-y-auto items-center p-7 gap-8">
                {items[currentIndex]}
            </div>
            <button className="disabled:opacity-0" onClick={nextItem} disabled={ currentIndex >= 1 }>
                <RightArrow className="fill-white w-9 h-min" />
            </button>
        </section>
    )
}

export default Details
