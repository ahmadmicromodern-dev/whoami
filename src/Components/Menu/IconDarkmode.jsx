import React, { useState, useRef, useEffect } from 'react';
import { useTheme, themes } from './Context';
import { FiSun, FiMoon } from 'react-icons/fi';

const IconDarkmode = () => {
    const { currentTheme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const themeIcons = {
        light: <FiSun className="w-5 h-5 text-[#1BBDF9]" />,
        dark: <FiMoon className="w-5 h-5 text-[#1BBDF9]" />
    };

    return (
        <div className="theme-switcher" ref={menuRef}>
            <button
                onClick={() => {
                    toggleTheme(currentTheme.name === 'light' ? 'dark' : 'light');
                    setIsMenuOpen(false);
                }}
                className="relative flex items-center justify-center w-10 h-10 rounded-full 
                          bg-[#1BBDF9] p-0.5 
                          shadow-md transition-all duration-300
                          overflow-hidden"
                aria-label="Toggle theme"
            >
                <div className="absolute inset-0 rounded-full bg-[#1BBDF9] opacity-75 blur-sm"></div>
                <div className="flex items-center justify-center w-full h-full rounded-full bg-white dark:bg-slate-800">
                    {themeIcons[currentTheme.name]}
                </div>
            </button>

            {isMenuOpen && (
                <div className="theme-switcher-menu">
                    {Object.entries(themes).map(([name, theme]) => (
                        <div
                            key={name}
                            className={`theme-option ${currentTheme.name === name ? 'active' : ''}`}
                            onClick={() => {
                                toggleTheme(name);
                                setIsMenuOpen(false);
                            }}
                        >
                            <div
                                className="theme-color-preview"
                                style={{ backgroundColor: theme.colors.primary }}
                            />
                            <span className="capitalize">{name}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default IconDarkmode;