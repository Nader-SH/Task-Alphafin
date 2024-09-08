/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import logo from "../public/logo.svg";
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
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
        <header className="text-gray-800 px-6 py-4 flex justify-between items-center relative">
            {/* Desktop Logo */}
            <div className="hidden md:flex text-2xl font-bold flex-shrink-0 flex items-center">
                <img src={logo} width="220" height="252" alt='logo' />
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden text-2xl z-50"
                onClick={toggleMobileMenu}
            >
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-full bg-gray-900 text-white transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-40`}>
                <div className="flex flex-col items-center mt-10 relative">
                    <button
                        className="absolute top-4 right-4 text-2xl"
                        onClick={toggleMobileMenu}
                    >
                        <FaTimes className='text-white bg-white' />
                    </button>
                    <div className="text-2xl font-bold flex-shrink-0 flex items-center mb-8">
                        <img src={logo} width="220" height="252" alt='logo' />
                    </div>
                    <a href="/" className="text-xl py-2" onClick={toggleMobileMenu}>Home</a>
                    <a href="/about" className="text-xl py-2" onClick={toggleMobileMenu}>About Us</a>
                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="text-xl py-2 flex items-center"
                        >
                            Services
                            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        {dropdownOpen && (
                            <ul className="bg-gray-800 text-gray-300 mt-2 w-full shadow-lg rounded-lg z-50">
                                {services.map((service, index) => (
                                    <li key={index} className="py-2 px-4 hover:bg-gray-700">
                                        <a href="#" onClick={toggleMobileMenu}>{service}</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <a href="/faqs" className="text-xl py-2" onClick={toggleMobileMenu}>FAQs</a>
                    <a href="/contact" className="bg-gray-800 text-white py-2 px-4 rounded mt-4" onClick={toggleMobileMenu}>Contact Us</a>
                </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-6 relative justify-center items-center">
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
                        <ul className="absolute bg-white text-gray-800 mt-2 w-80 shadow-lg rounded-lg z-50 left-0">
                            {services.map((service, index) => (
                                <li key={index} className="py-2 px-4 hover:bg-gray-100 hover:text-gray-900">
                                    <a href="#">{service}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <a href="/faqs" className="hover:text-gray-400">FAQs</a>
            <a href="/contact" className="bg-gray-800 text-white py-2 px-4 hover:py-4 hover:px-6 rounded mt-4 " onClick={toggleMobileMenu}>Contact Us</a>
            </nav>
        </header>
    );
};

export default Header;
