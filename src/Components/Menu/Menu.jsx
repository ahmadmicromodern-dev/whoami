import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";


function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white shadow-sm">
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between flex-wrap py-4">
                    {/* Brand Logo */}
                    <a href="#home" className="text-lg font-bold uppercase text-gray-800 hover:text-gray-600">
                       Ahmad Rasouli.
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle navigation"
                    >
                        <TiThMenu className="w-6 h-6 text-black" />
                    </button>

                    {/* Responsive Menu */}
                    <div className={`${isOpen ? 'block' : 'hidden'} w-full lg:flex lg:items-center
                     lg:w-auto uppercase`}>
                        <ul className="lg:flex lg:space-x-6 mt-4 lg:mt-0">
                            {/* Menu Items */}
                            {['Home', 'About', 'Skills', 'Portfolio', 'Services', ].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="block text-gray-800 hover:text-gray-600 px-3 py-2">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Menu;