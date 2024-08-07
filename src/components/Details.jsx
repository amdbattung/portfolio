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
        <section class="m-5 p-5 flex items-center justify-center overflow-hidden">
            <button class="disabled:opacity-0" onClick={prevItem} disabled={ currentIndex < items.length - 1 }>
                <LeftArrow class="fill-white w-9 h-min" />
            </button>
            <div class="w-full flex flex-col items-center p-7 gap-8">
                {items[currentIndex]}
            </div>
            <button class="disabled:opacity-0" onClick={nextItem} disabled={ currentIndex >= 1 }>
                <RightArrow class="fill-white w-9 h-min" />
            </button>
        </section>
    )
}

export default Details