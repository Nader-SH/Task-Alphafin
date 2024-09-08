import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import contactImage from '../public/close-up.jpg'; // Replace with the actual path to the image
import { MdAccessTimeFilled } from "react-icons/md";
import IconsComponents from './IconsComponents';

const ContactInfo = () => {
    return (
        <div  className='max-w-80p mx-auto my-20px'>
            <div className="flex flex-wrap p-6 bg-white shadow-md rounded-lg">
                <div className="flex-1 flex flex-col justify-center m-4">
                    <h2 className="text-2xl font-bold mb-4">Contact </h2>
                    <p className="mb-4">At Alphaa Financial Solutions, we believe in empowering your property dreams with our premium financial services. </p>

                    <div className="mb-6">
                        <div className="flex items-center mb-2">
                            <FaMapMarkerAlt className="text-xl mr-2 text-gray-600" />
                            <p>Sydney, Australia</p>
                        </div>
                        <div className="flex items-center mb-2">
                            <FaPhoneAlt className="text-xl mr-2 text-gray-600" />
                            <p>0468328227</p>
                        </div>
                        <div className="flex items-center mb-2">
                            <MdAccessTimeFilled className="text-xl mr-2 text-gray-600"  />
                            <p>Mon - Fri: 9:00am - 5:00pm</p>
                        </div>
                        <div className="flex items-center mb-2">
                        <MdAccessTimeFilled className="text-xl mr-2 text-gray-600"  />
                            <p>Weekend Appointments Only</p>
                        </div>
                    </div>
                    <IconsComponents />
                </div>
                <div className="flex-1 text-center m-4 flex justify-center min-w-[200px]">
                    <img src={contactImage} alt="Contact" className="w-full max-w-[500px] h-auto rounded-sm shadow-md" />
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
