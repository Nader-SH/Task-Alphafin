import React from 'react';
import backgroundImage from "../public/bgsection-3.jpg";
import contactIcon from "../public/icon3.png";

const TalkTo = () => {
    return (
        <div
            className="relative flex flex-col items-center justify-center p-8 text-center"
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '400px' }}
        >
            <div className="relative z-10">
                <img
                    src={contactIcon}
                    alt="Contact Icon"
                    className="w-24 h-24 mb-6 mx-auto" // Increased size of the icon
                />
                <h2 className="text-4xl font-bold mb-6 text-[#2A2C38]">Talk to PAWAN now!</h2> {/* Increased font size */}
                <button className="bg-white text-black px-8 py-4 rounded-md font-bold mb-6 hover:py-6 hover:px-10 transition-all duration-400 ease-in-out">
                    Contact Us
                </button>

                <p className="mt-4 text-lg mb-2 text-[#2A2C38]">
                    Feel Free to Get in Touch for a No Obligations <span className='border-b-2 border-[#2A2C38]'>
                        Call PAWAN !!!
                    </span>
                </p>
            </div>
        </div>
    );
};

export default TalkTo;
