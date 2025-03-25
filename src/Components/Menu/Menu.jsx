import React, {useState} from 'react';
import {TiThMenu} from "react-icons/ti";

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleItemClick = () => {
        setTimeout(() => setIsOpen(false), 300); // تأخیر برای هماهنگی با انیمیشن
    };

    return (<div className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between flex-wrap py-4">
                {/* Brand Logo */}
                <a href="#home"
                   className="text-lg font-bold uppercase text-gray-800 hover:text-gray-600 transition-colors duration-300">
                    Ahmad Rasouli.
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-1 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    <TiThMenu className="w-6 h-6 text-black"/>
                </button>

                {/* Responsive Menu */}
                <div
                    className={`w-full lg:flex lg:items-center lg:w-auto uppercase 
                    transition-all duration-1000 ease-in-out ${isOpen ? 'block opacity-1000 translate-y-0' 
                        : 'hidden opacity-0 -translate-y-4 lg:opacity-1000 lg:translate-y-0'}`}
                >
                    <ul className="lg:flex lg:space-x-6 mt-4 lg:mt-0">
                        {['Home', 'About', 'Skills', 'Portfolio', 'Services'].map((item) => (<li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                onClick={handleItemClick}
                                className="block text-gray-800 hover:text-blue-600
                                 px-3 py-2 transition-all duration-300 ease-in-out hover:scale-105"
                            >
                                {item}
                            </a>
                        </li>))}
                    </ul>
                </div>
            </nav>
        </div>
    </div>);
}

export default Menu;