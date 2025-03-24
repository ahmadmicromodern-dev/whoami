import React from 'react';
import { FaFacebook, FaGithub, FaTelegram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

function Footer() {
    return (
        <div>
            <footer className="bg-gray-800 py-8">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col items-center">
                        {/* Social Links */}
                        <div className="flex justify-center gap-6 mb-6">
                            <a
                                href="https://www.facebook.com/DarkCodeit"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-300"
                            >
                                <FaFacebook className="text-2xl" />
                            </a>
                            <a
                                href="https://github.com/Darkcode-it"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-300"
                            >
                                <FaGithub className="text-2xl" />
                            </a>
                            <a
                                href="https://t.me/Darkcodeit"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-300"
                            >
                                <FaTelegram className="text-2xl" />
                            </a>
                            <a
                                href="https://x.com/MusaRahdit"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-300"
                            >
                                <RiTwitterXLine className="text-2xl" />
                            </a>
                        </div>

                        {/* Copyright Text */}
                        <p className="text-gray-400 text-sm text-center mt-4">
                             Design & Development by{" "}
                            <a
                                href="mailto:siavash.sattari.dev@gmail.com"
                                className="text-gray-300 hover:text-white transition-colors duration-300"
                            >
                                Siavash Sattari
                            </a>
                            {" "}Change{" "}
                            <a
                                href="mailto:darkcodeit@protonmail.com"
                                className="text-gray-300 hover:text-white transition-colors duration-300"
                            >
                                Ahmad Rasouli
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;