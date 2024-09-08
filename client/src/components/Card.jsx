"use client"

import React, { useState, useEffect } from 'react'
import imageCard1 from "../public/imageCard1.jpg";
import imageCard2 from "../public/imageCard2.jpg";
import imageCard3 from "../public/imageCard3.jpg";

const images = [
    imageCard1,
    imageCard2,
    imageCard3,
]

const PageCards = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isZoomedIn, setIsZoomedIn] = useState(false)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsZoomedIn(true)
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
                setIsZoomedIn(false)
            }, 1500)  // Zoom effect duration
        }, 4000) // Image change duration

        return () => clearInterval(intervalId)
    }, [])

    return (
        <div className="relative w-full h-[600px] overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={` absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{
                        backgroundImage: `url(${image})`, 
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transform: isZoomedIn ? 'scale(1.5)' : 'scale(1)',
                        transition: 'transform 1.5s ease-in-out, opacity 1.5s ease-in-out',
                    }}
                />
            ))}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-8">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">Empowering Financial Security For Everyone.</h1>
                <p className="text-xs md:text-xs mb-8 text-center max-w-xl">
                    We are committed to provide accessible and reliable financial services to help individuals and families.
                </p>
                <button size="lg" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-10 rounded-md px-8 bg-white text-black hover:bg-gray-200">
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default PageCards;
