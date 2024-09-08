import { useState, useEffect } from 'react';
import imageshape from "../public/img-shape-02-1.png";
import image1 from "../public/image1.jpg";
import image2 from "../public/image2.jpg";
import image3 from "../public/image3.jpg";
import icon1 from "../public/icon1.png";
import icon2 from "../public/icon2.png";
import icon3 from "../public/icon3.png";

const cardData = [
    {
        title: "Home Loans",
        description: "At Alphaa Financial Solutions, we specialize in guiding you through every step of your home loan journey.",
        icon: icon1,
    },
    {
        title: "Refinancing",
        description: "Refinancing is the process of replacing an existing loan with a new one, typically to take advantage of better terms.",
        icon: icon2,
    },
    {
        title: "Self-Managed Super Fund (SMSF)",
        description: "At Alphaa Financial Solutions, we offer expert guidance on Self-Managed Super Fund (SMSF) loans to help you maximize your investment potential.",
        icon: icon3,
    },
    {
        title: "Personal Loans",
        description: "We offer a range of personal loan options designed to meet your unique financial needs.",
        icon: icon1,
    },
    {
        title: "Commercial/Business Loans",
        description: "We specialize in providing comprehensive commercial and business loan solutions tailored to your unique needs.",
        icon: icon2,
    },
    {
        title: "Home Loan Services",
        description: "First Home Buyer, Investment Property",
        content: (
            <ul className="list-disc pl-5">
                <li><strong>First Home Buyer:</strong> A first-time homebuyer is an individual or household purchasing a home for the first time.</li>
                <li><strong>Investment Property:</strong> An investment property is a real estate asset purchased with the intention of generating income or profit.</li>
            </ul>
        ),
        icon: icon3,
    },
    {
        title: "Asset Finance",
        description: "We offer tailored asset and vehicle finance solutions to help you acquire the equipment or vehicle you need with ease.",
        icon: icon1,
    },
    {
        title: "Expat Loans",
        description: "We offer specialized expat loan services designed to meet the unique needs of expatriates.",
        icon: icon2,
    },
];

const images = [
    image1,
    image2,
    image3,
    // Add more image URLs as needed
];

const OurServices = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-6">
            <div className="flex flex-col justify-center items-center mb-8">
                <img src={imageshape} height={80} width={80} alt="shape" className="m-6" />
                <h2 className="text-center text-3xl font-bold">Our Services</h2>
            </div>
            <div className="flex gap-6 flex-wrap">
                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                        {cardData.map((card, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md m-4 border-b-4 border-orange-500 flex items-start">
                                <div className="flex-1">
                                    <div className='flex font-bold mb-2 border-b-2'>
                                        <img src={card.icon} alt="icon" className="w-12 h-12 mr-4" />
                                        <h2 className="text-xl border-black-800 pb-2 flex items-center">
                                        {card.title}
                                        </h2>
                                    </div>
                                    <p className="mb-4">{card.description}</p>
                                    {card.content && <div>{card.content}</div>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative flex-1 flex flex-col items-center justify-center p-6">
                    <div className="w-full h-full relative overflow-hidden">
                        <img
                            src={images[currentImage]}
                            alt="Dynamic"
                            className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
                        />
                    </div>
                    <div className="absolute bottom-10 top-12 left-0 right-0 p-6 bg-opacity-50 text-center text-white font-bold" style={{ top: "35rem" }}>
                        <p className="text-lg mb-2">At Alphaa Financial Solutions, we offer a comprehensive range of financial services. We have the expertise to guide you through the process.</p>
                        <p className="text-3xl">100+</p>
                        <p className="text-3xl">Simplify the loan</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
