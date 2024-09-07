/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import SocialMediaLinks from './SocialMediaLinks .jsx';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Contact Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
                        <p className="mb-2">5454 Example Sr.</p>
                        <p className="mb-2">City, Countre, State, 101010</p>
                        <p className="mb-2">Phone: (1010) 1010-1010</p>
                        <p>Email: <a href="mailto:Nadershak149@example.com" className="hover:text-blue-400">Nadershak149@example.com</a></p>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline hover:text-blue-400">Home</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-400">About Us</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-400">Services</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-400">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Follow Us</h3>
                        <div className="flex space-x-4">
                            <SocialMediaLinks />
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Newsletter Signup</h3>
                        <form className="bg-gray-800 p-4 rounded-lg shadow-md">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full p-3 mb-4 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center mt-8 border-t border-gray-700 pt-6">
                    <p className="text-sm">&copy; 2029 All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
