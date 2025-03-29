import React, {useState, useEffect, useRef} from 'react';
import {TiThMenu, TiTimes} from 'react-icons/ti';
import PropTypes from 'prop-types';
import IconDarkmode from "./IconDarkmode.jsx";
import './IconDarkmode.css'

const Menu = ({menuItems = []}) => {
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

    const defaultItems = ['Home', 'About', 'Experience', 'Education', 'Certifications', 'Skills', 'Portfolio', 'Services'];

    const itemsToRender = menuItems.length > 0 ? menuItems : defaultItems;

    return (
        <header
        ref={menuRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${isScrolled ? ' bg-white shadow-md py-1' : 'bg-slate-900/900  py-1'}`}>
        <div className="container mx-auto px-4 sm:px-6" id='menu'>
            <nav className="flex items-center justify-between">
                {/* Brand Logo */}
                <a
                    href="#home"
                    className="text-xl font-bold hover:text-blue-600 transition-colors"
                    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                >
                        <span className="font-bold bg-gradient-to-r from-blue-400
                    to-cyan-400 bg-clip-text text-transparent">Ahmad Rasouli</span>
                </a>

                {/* Desktop Menu */}
                <IconDarkmode/>
                <ul className="hidden lg:flex space-x-8">
                    {itemsToRender.map((item) => (<li key={item}>
                        <a
                            href={`#${item.toLowerCase()}`}
                            className="relative px-1 py-2 bg-gradient-to-r from-blue-400
                    to-cyan-400 bg-clip-text text-transparent  hover:text-blue-500
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0
                  after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300
                  hover:after:w-full"
                        >
                            {item}
                        </a>
                    </li>))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2  focus:outline-none focus:ring-2 focus: rounded-md"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation">
                    {isOpen ? (<TiTimes className=" w-6 h-6 "/>) : (<TiThMenu className=" w-6 h-6 "  color='rgb(157,163,174)' />)}
                </button>

                {/* Mobile Menu */}
                <div
                    className={`fixed  lg:hidden inset-0 backdrop-blur-lg z-40 transition-all 
                        duration-300 ease-in-out transform
                         ${isOpen ? 'translate-x-1 opacity-500 ' : '-translate-x-full opacity-0 '}`}
                    style={{top: '4.5rem'}}
                >
                    <ul className="flex flex-col space-y-1   ">
                        {itemsToRender.map((item) => (<li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                onClick={handleItemClick}
                                className="block text-center  text-2xl font-medium
                    transition-colors py-3 border-b border-gray-200"
                            >
                                {item}
                            </a>
                        </li>))}
                    </ul>
                </div>
            </nav>
        </div>
    </header>);
};

Menu.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.string),
};

export default Menu;