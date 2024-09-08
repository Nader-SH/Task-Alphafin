import React from 'react';
import { FaTwitter, FaGitlab, FaTelegram, FaWordpress, FaViber } from 'react-icons/fa';

const IconsComponents = () => {
    return (
        <div className="flex gap-4">
        <a href="https://gitlab.com" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 bg-orange-500 hover:bg-[#22232D] hover:text-white p-2 rounded-md">
            <FaGitlab className="text-2xl text-gray-600 hover:text-white" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 bg-orange-500 hover:bg-[#22232D] hover:text-white p-2 rounded-md">
            <FaTwitter className="text-2xl text-gray-600 hover:text-white" />
        </a>
        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 bg-orange-500 hover:bg-[#22232D] hover:text-white p-2 rounded-md">
            <FaTelegram className="text-2xl text-gray-600 hover:text-white" />
        </a>
        <a href="https://wordpress.org" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 bg-orange-500 hover:bg-[#22232D] hover:text-white p-2 rounded-md">
            <FaWordpress className="text-2xl text-gray-600 hover:text-white" />
        </a>
        <a href="https://viber.com" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 bg-orange-500 hover:bg-[#22232D] hover:text-white p-2 rounded-md">
            <FaViber className="text-2xl text-gray-600 hover:text-white" />
        </a>
    </div>
    );
}

export default IconsComponents;
