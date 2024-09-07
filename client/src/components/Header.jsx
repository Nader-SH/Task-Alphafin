/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useState } from 'react';
import logo from "../public/logo.svg"
const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    const services = [
        "First Home Buyer",
        "Buying Next Home",
        "Purchase an Investment",
        "Review Current Loans",
        "Commercial Loan",
        "Asset Finance",
        "Vehicle Finance",
        "Personal Loan",
        "Self-Managed Super Fund (SMSF) Lending",
        "Other Services",
    ];
    return (
        <header className=" text-gray-800 px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold flex-shrink-0 flex items-center" style={{ margin: "0px 30px" }}>
                <img src={logo} height="90" width='90' class="h-8 w-auto" alt='logo' />
            </div>
            <nav className="flex space-x-6">
                <a href="/" className="hover:text-gray-400">Home</a>
                <a href="/about" className="hover:text-gray-400">About Us</a>
                <div className="relative">
                    <button onClick={toggleDropdown} className="hover:text-gray-400 flex items-center">
                        Services
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    {dropdownOpen && (
                        <ul className="absolute bg-white text-gray-800 mt-2 w-80 shadow-lg rounded-lg">
                            {services.map((service, index) => (
                                <li key={index} className="py-2 px-4 hover:bg-gray-100 opacity-100">
                                    <a href="#">{service}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <a href="/faqs" className="hover:text-gray-400">FAQs</a>
            </nav>
            <a href="/contact" className="ml-auto bg-gray-800  text-white py-2 px-4 rounded hover:bg-gray-700 ">
                Contact Us
            </a>
        </header>
    );
};

export default Header;
