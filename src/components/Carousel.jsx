import { useState } from "react";

function Carousel({ items }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    function nextItem() {
        if (currentIndex < items.length) {
            setCurrentIndex(currentIndex + 1)
        }
    };

    function prevItem() {
        if (currentIndex >= 1) {
            setCurrentIndex(currentIndex - 1)
        }
    };

    return (
        <div class="flex items-center justify-center">
            <button onClick={prevItem}>&lt;</button>
            <div class="my-2 p-2 border w-full text-center">
                {items[currentIndex]}
            </div>
            <button onClick={nextItem}>&gt;</button>
        </div>
    );
};

export default Carousel;