import React from 'react';

const MissionAndStory = () => {
    return (
        <div className="w-full bg-gray-800 p-6 md:p-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-300">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
                    </div>
                    <div className="p-6 space-y-4">
                        <p className="text-gray-700">
                            Alpha Financial Solutions provides bespoke mortgage and finance services. We believe that financial freedom is not just a goal but a journey, and we are here to guide you every step of the way.
                        </p>
                        <button className="bg-gray-800 text-white hover:bg-gray-700 py-2 px-4 rounded transition-colors duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-300">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                    </div>
                    <div className="p-6">
                        <p className="text-gray-700">
                            At Alpha Financial Solutions, our mission is to empower individuals and businesses to achieve their financial aspirations through tailored solutions, expert advice, and exceptional service. We strive to build lasting relationships based on trust, integrity, and mutual success.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MissionAndStory;
