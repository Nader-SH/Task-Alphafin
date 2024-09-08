import React from 'react';
import founderImage from "../public/Pawan panjabi.jpg"; // Replace with the actual path to the founder's image
import iconImage from "../public/icon3.png"; // Replace with the actual path to the icon

const FounderCard = () => {
    return (
        <div className='flex justify-center'>
            <div className="relative flex flex-col items-center justify-center p-6 text-center bg-white rounded-lg shadow-md border-b-4 border-orange-500 max-w-sm mx-auto my-5" style={{ margin: '20px' }}>
                <img
                    src={iconImage}
                    alt="Icon"
                    className="w-12 h-12 mb-4"
                    style={{ filter: 'invert(21%) sepia(99%) saturate(6200%) hue-rotate(4deg) brightness(99%) contrast(100%)' }}
                />

                <img
                    src={founderImage}
                    alt="Founder"
                    className="w-full max-w-[300px] h-auto mb-4"
                    style={{ width: '250px' }}
                />
                <h2 className="text-lg font-bold mb-1">Mr. Pawan Punjabi</h2>
                <p className="text-md text-gray-700">Founder</p>
            </div>
        </div>
    );
};

export default FounderCard;
