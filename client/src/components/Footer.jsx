/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import IconsComponents from './IconsComponents.jsx';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 m-auto">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-orange-500">Quick Contact</h3> {/* Increased font size */}
                        <p className="mb-4 text-white text-lg font-bold"> {/* Increased font size and bold */}
                            At Alphaa Financial Solutions, we believe in empowering your property dreams with our premium financial services.
                        </p>
                        <div className='m-8'>
                            <p className="mb-4 flex items-center text-white text-lg font-bold"> {/* Increased font size and bold */}
                                <FaMapMarkerAlt className="text-orange-500 mr-3" /> Sydney, Australia
                            </p>
                            <p className="mb-4 flex items-center text-white text-lg font-bold"> {/* Increased font size and bold */}
                                <FaPhoneAlt className="text-orange-500 mr-3" /> 0468328227
                            </p>
                            <p className="mb-4 flex items-center text-white text-lg font-bold"> {/* Increased font size and bold */}
                                <FaEnvelope className="text-orange-500 mr-3" /> Nadershak149@example.com
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Newsletter Signup</h3>
                        <form className="bg-gray-800 p-4 rounded-lg shadow-md">
                            <h4 className="font-bold text-white m-4">Opening Hours</h4>
                            <div className="mt-4 text-gray-400 m-4">
                                <div className='flex justify-between items-center pb-2 mb-2'>
                                    <p className="text-orange-500">Mon to Fri</p>
                                    <span className="flex-1 border-b border-dotted border-gray-600 mx-4"></span>
                                    <span className="text-white">9:00am - 5:00pm</span>
                                </div>
                                <div className='flex justify-between items-center pb-2'>
                                    <p className="text-orange-500">Sat to Sun</p>
                                    <span className="flex-1 border-b border-dotted border-gray-600 mx-4"></span>
                                    <span className="text-white">Appointments Only</span>
                                </div>
                            </div>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full p-3 mb-4 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="w-full bg-orange-500 text-white py-2 px-4 rounded transition-colors duration-300 font-bold"
                            >
                                Schedule a visit
                            </button>

                        </form>
                    </div>
                </div>
                <div className="flex justify-around text-center align-middle mt-8 border-t border-gray-700 pt-6 flex-wrap">
                    <IconsComponents />
                    <p className="col-lg-12 col-md-12 col-sm-12 col-xs-12 flex justify-center items-center">
                        2024 © All Rights Reserved | Developed with ❤️ by    
                        <span className='text-orange-500 m-1'> Psyber Inc </span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
