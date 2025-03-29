import React from 'react';
import PropTypes from 'prop-types';
import {
    FaGithub,
    FaTelegram,
    FaFacebook,
    FaLinkedin,
    FaCodepen
} from 'react-icons/fa';
import { RiTwitterXLine } from "react-icons/ri";

const footerData = {
    socialLinks: [
        {
            name: "GitHub",
            url: "https://github.com/Darkcode-it",
            icon: <FaGithub className="w-5 h-5" />,
            ariaLabel: "Visit GitHub profile"
        },
        {
            name: "Telegram",
            url: "https://t.me/Darkcodeit",
            icon: <FaTelegram className="w-5 h-5" />,
            ariaLabel: "Contact via Telegram"
        },
        {
            name: "Twitter",
            url: "https://x.com/MusaRahdit",
            icon: <RiTwitterXLine className="w-5 h-5" />,
            ariaLabel: "Follow on Twitter"
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/DarkCodeit",
            icon: <FaFacebook className="w-5 h-5" />,
            ariaLabel: "Connect on Facebook"
        }
    ],
    copyright: {

        author: {
            name: "Ahmad Rasouli",
            email: "darkcodeit@protonmail.com"
        },
        credits: {
            text: "Initial Design by Siavash Sattari",
            email: "siavash.sattari.dev@gmail.com"
        }
    }
};

function Footer() {
    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto p-9">
                <div className="flex flex-col items-center">

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6 mb-8">
                        {footerData.socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                                aria-label={link.ariaLabel}
                            >
                                <span className="sr-only">{link.name}</span>
                                <div className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all">
                                    {link.icon}
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Copyright Text */}
                    <div className="flex flex-col md:flex-row items-center text-center text-gray-500 text-sm space-y-2 md:space-y-0 md:space-x-4">
                        <p>{footerData.copyright.text}</p>
                        <div className="hidden md:block">•</div>
                        <p>
                            Developed by{" "}
                            <a
                                href={`mailto:${footerData.copyright.author.email}`}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                {footerData.copyright.author.name}
                            </a>
                        </p>
                        <div className="hidden md:block">•</div>
                        <p>
                            {footerData.copyright.credits.text}{" "}
                            <a
                                href={`mailto:${footerData.copyright.credits.email}`}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                {footerData.copyright.credits.email.split('@')[0]}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    footerData: PropTypes.shape({
        socialLinks: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
                icon: PropTypes.element.isRequired,
                ariaLabel: PropTypes.string.isRequired
            })
        ).isRequired,
        copyright: PropTypes.shape({
            text: PropTypes.string.isRequired,
            author: PropTypes.shape({
                name: PropTypes.string.isRequired,
                email: PropTypes.string.isRequired
            }).isRequired,
            credits: PropTypes.shape({
                text: PropTypes.string.isRequired,
                email: PropTypes.string.isRequired
            }).isRequired
        }).isRequired
    })
};

export default Footer;