import React, {useState, useEffect, useRef} from 'react';
import {TiThMenu, TiTimes} from 'react-icons/ti';
import PropTypes from 'prop-types';
import IconDarkmode from "./IconDarkmode.jsx";
import './IconDarkmode.css'
import { useTranslation } from 'react-i18next';
import { FaLanguage } from 'react-icons/fa';

const Menu = ({menuItems = []}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef(null);
    const { t, i18n } = useTranslation();
    const [isAnimating, setIsAnimating] = useState(false);
    const [isChangingLanguage, setIsChangingLanguage] = useState(false);
    const [animationRipple, setAnimationRipple] = useState(false);

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

    const toggleLanguage = () => {
        // Start ripple effect animation
        setAnimationRipple(true);
        setTimeout(() => setAnimationRipple(false), 700);
        
        // Start icon animation
        setIsAnimating(true);
        
        // Start content fade animation
        setIsChangingLanguage(true);
        
        // Actually change the language after a delay
        setTimeout(() => {
            const newLang = i18n.language === 'en' ? 'fa' : 'en';
            i18n.changeLanguage(newLang);
            document.documentElement.lang = newLang;
            
            // End icon animation
            setTimeout(() => {
                setIsAnimating(false);
            }, 300);
            
            // End content animation after the language has changed
            setTimeout(() => {
                setIsChangingLanguage(false);
            }, 300);
        }, 400);
    };

    // Set initial language on component mount
    useEffect(() => {
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    const defaultItems = [
        { key: 'home', label: t('menu.home') },
        { key: 'about', label: t('menu.about') },
        { key: 'experience', label: t('menu.experience') },
        { key: 'education', label: t('menu.education') },
        { key: 'certifications', label: t('menu.certifications') },
        { key: 'skills', label: t('menu.skills') },
        { key: 'portfolio', label: t('menu.portfolio') },
        { key: 'services', label: t('menu.services') }
    ];

    const itemsToRender = menuItems.length > 0 ? menuItems : defaultItems;
    
    document.documentElement.dir = i18n.language === 'fa' ? 'rtl' : 'ltr';

    return (
        <header
        ref={menuRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
        ${isScrolled ? ' bg-white shadow-md py-1' : 'bg-slate-900/900  py-1'}`}>
        <div className="container mx-auto px-4 sm:px-6" id='menu'>
            <nav className="flex items-center justify-between">
                {/* Brand Logo */}
                <a
                    href="#home"
                    className={`text-xl font-bold hover:text-blue-600 transition-colors 
                    transition-all duration-500 ${isChangingLanguage ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'}`}
                    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                >
                    <span className="font-bold bg-gradient-to-r from-blue-400
                    to-cyan-400 bg-clip-text text-transparent">{t('name')}</span>
                </a>

                {/* Desktop Menu */}
                <div className="flex items-center space-x-2.5">
                    <IconDarkmode/>
                    <button 
                        onClick={toggleLanguage}
                        className="relative flex items-center justify-center w-10 h-10 rounded-full 
                                  bg-gradient-to-r from-blue-400 to-cyan-400 p-0.5 
                                  shadow-md hover:shadow-lg transition-all duration-300
                                  hover:scale-110 overflow-hidden"
                        aria-label="Toggle language"
                        disabled={isChangingLanguage || isAnimating}
                    >
                        {/* Ripple effect */}
                        <span className={`absolute inset-0 bg-white/30 rounded-full scale-0 transition-transform duration-700 
                                         ${animationRipple ? 'scale-[10] opacity-0' : 'scale-0 opacity-100'}`}></span>
                                         
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-75 
                                      blur-sm"></div>
                        <div className={`flex items-center justify-center w-full h-full rounded-full bg-white dark:bg-slate-800 
                                       transition-transform duration-500 ${isAnimating ? 'scale-0 rotate-180' : 'scale-100 rotate-0'}`}>
                            <span className="font-bold text-sm bg-gradient-to-r from-blue-400 to-cyan-400 
                                           bg-clip-text text-transparent">
                                {i18n.language === 'en' ? 'فا' : 'EN'}
                            </span>
                        </div>
                    </button>
                </div>
                <ul className={`hidden lg:flex space-x-8 transition-all duration-500 
                               ${isChangingLanguage ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'}`}>
                    {itemsToRender.map((item) => (<li key={item.key}>
                        <a
                            href={`#${item.key}`}
                            className="relative px-1 py-2 bg-gradient-to-r from-blue-400
                    to-cyan-400 bg-clip-text text-transparent  hover:text-blue-500
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0
                  after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300
                  hover:after:w-full"
                        >
                            {item.label}
                        </a>
                    </li>))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className={`lg:hidden p-2 focus:outline-none focus:ring-2 rounded-md
                              transition-all duration-500 ${isChangingLanguage ? 'opacity-0' : 'opacity-100'}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation">
                    {isOpen ? (<TiTimes className=" w-6 h-6 "/>) : (<TiThMenu className=" w-6 h-6 "  color='rgb(157,163,174)' />)}
                </button>

                {/* Mobile Menu */}
                <div
                    className={`fixed lg:hidden inset-0 backdrop-blur-lg z-40 transition-all 
                        duration-500 ease-in-out transform
                         ${isOpen ? 'translate-x-1 opacity-500 ' : '-translate-x-full opacity-0 '}`}
                    style={{top: '4.5rem'}}
                >
                    <ul className={`flex flex-col space-y-1 transition-all duration-500 
                                   ${isChangingLanguage ? 'opacity-0' : 'opacity-100'}`}>
                        {itemsToRender.map((item) => (<li key={item.key}>
                            <a
                                href={`#${item.key}`}
                                onClick={handleItemClick}
                                className="block text-center  text-2xl font-medium
                    transition-colors py-3 border-b border-gray-200"
                            >
                                {item.label}
                            </a>
                        </li>))}
                        <li>
                            <button 
                                onClick={toggleLanguage}
                                className="flex items-center justify-center w-full py-3 space-x-2 border-b border-gray-200"
                                disabled={isChangingLanguage || isAnimating}
                            >
                                <div className="relative flex items-center justify-center w-8 h-8 rounded-full 
                                              bg-gradient-to-r from-blue-400 to-cyan-400 p-0.5 shadow-md overflow-hidden">
                                    {/* Mobile ripple effect */}
                                    <span className={`absolute inset-0 bg-white/30 rounded-full scale-0 transition-transform duration-700 
                                                    ${animationRipple ? 'scale-[10] opacity-0' : 'scale-0 opacity-100'}`}></span>
                                    <div className={`flex items-center justify-center w-full h-full rounded-full 
                                                  bg-white dark:bg-slate-800 transition-transform duration-500 
                                                  ${isAnimating ? 'scale-0 rotate-180' : 'scale-100 rotate-0'}`}>
                                        <span className="font-bold text-sm bg-gradient-to-r from-blue-400 to-cyan-400 
                                                       bg-clip-text text-transparent">
                                            {i18n.language === 'en' ? 'فا' : 'EN'}
                                        </span>
                                    </div>
                                </div>
                                <span className="text-gray-700 dark:text-gray-300">
                                    {i18n.language === 'en' ? 'Persian' : 'English'}
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>);
};

Menu.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    })),
};

export default Menu;