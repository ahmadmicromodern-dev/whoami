import React, { useState, useEffect, useRef } from 'react';
import { TiThMenu, TiTimes } from 'react-icons/ti';
import PropTypes from 'prop-types';

const Menu = ({ menuItems = [] }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef(null);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleItemClick = () => {
        setIsOpen(false);
    };

    const defaultItems = ['Home', 'About','Experience','Education','Certifications', 'Skills', 'Portfolio', 'Services'];

    const itemsToRender = menuItems.length > 0 ? menuItems : defaultItems;

    return (
        <header
            ref={menuRef}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-3'
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6">
                <nav className="flex items-center justify-between">
                    {/* Brand Logo */}
                    <a
                        href="#home"
                        className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <span className="text-blue-600">Ahmad</span> Rasouli
                    </a>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex space-x-8">
                        {itemsToRender.map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="relative px-1 py-2 text-gray-700 hover:text-blue-600 font-medium
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0
                  after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300
                  hover:after:w-full"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? (
                            <TiTimes className="w-6 h-6 text-gray-900 " />
                        ) : (
                            <TiThMenu className="w-6 h-6 text-gray-900" />
                        )}
                    </button>

                    {/* Mobile Menu */}
                    <div
                        className={`fixed lg:hidden inset-0 bg-white backdrop-blur-lg z-40 transition-all duration-300 ease-in-out transform ${
                            isOpen
                                ? 'translate-x-0 opacity-100'
                                : '-translate-x-full opacity-0'
                        }`}
                        style={{ top: '4.5rem' }}
                    >
                        <ul className="flex flex-col space-y-6  bg-white p-8">
                            {itemsToRender.map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        onClick={handleItemClick}
                                        className="block text-2xl font-medium text-gray-900 hover:text-blue-600
                    transition-colors py-3 border-b border-gray-100"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

Menu.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.string),
};

export default Menu;