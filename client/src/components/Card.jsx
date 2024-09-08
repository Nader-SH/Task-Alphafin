import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import imageCard1 from "../public/imageCard1.jpg";
import imageCard2 from "../public/imageCard2.jpg";
import imageCard3 from "../public/imageCard3.jpg";
import imageCard4 from "../public/imageCard4.jpg";
import "./card.css"
const images = [
    imageCard1,
    imageCard2,
    imageCard3,
    imageCard4,
];


const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow custom-prev-arrow`}
            style={{ ...style }}
            onClick={onClick}
        >
            <FaChevronLeft className="text-white" />
        </div>
    );
};

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow custom-next-arrow`}
            style={{ ...style }}
            onClick={onClick}
        >
            <FaChevronRight className="text-white" />
        </div>
    );
};

// Main Component
const PageCards = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
    };

    return (
        <div className="relative w-full lg:h-[800px]  sm:h-[400px] md:h-[650px]  overflow-hidden">
            <Slider {...settings} className="w-full h-full">
                {images.map((image, index) => (
                    <div key={index} className="relative w-full h-full">
                        <img
                            src={image}
                            alt={`Slide ${index}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </Slider>
            <div className="absolute inset-0 h-auto bg-black bg-opacity-0 flex flex-col items-center justify-center text-white p-8">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
                    Empowering Financial Security for Everyone
                </h1>
                <p className="text-xs md:text-xs mb-8 text-center max-w-xl">
                    We are committed to providing accessible and reliable financial services to help individuals and families.
                </p>
            </div>
        </div>
    );
};

export default PageCards;
