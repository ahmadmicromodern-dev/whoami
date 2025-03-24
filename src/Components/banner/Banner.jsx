import React from 'react';
import { FaGithub, FaTelegram, FaFacebook, FaAngleDown } from 'react-icons/fa';
import { RiTwitterXLine } from "react-icons/ri";
import data from './Banner.json'; // Import the JSON file

function Banner() {
    const { name, jobTitle, profileImage, backgroundImage, socialLinks } = data;

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
        >
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center text-center">
                    {/* Profile Image */}
                    <div className="profile-img mb-6" data-aos="zoom-in">
                        <img
                            src={profileImage}
                            alt="profile-img"
                            className="rounded-full w-48 h-48 object-cover border-3 p-1 border-red-500 shadow-lg"
                        />
                    </div>

                    {/* Name and Job Title */}
                    <div data-aos="fade-up" data-aos-duration="1200">
                        <h2 className="text-white text-4xl font-bold mb-2">
                            Hello, I'm {name}
                        </h2>
                        <p className="text-white text-xl mb-6">
                            {jobTitle}
                        </p>

                        {/* Social Links */}
                        <div className="flex justify-center gap-6 mb-6">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-gray-300"
                                >
                                    {link.icon === 'FaFacebook' && <FaFacebook className="text-2xl" />}
                                    {link.icon === 'FaGithub' && <FaGithub className="text-2xl" />}
                                    {link.icon === 'FaTelegram' && <FaTelegram className="text-2xl" />}
                                    {link.icon === 'RiTwitterXLine' && <RiTwitterXLine className="text-2xl" />}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Scroll Down Arrow */}
                    <a
                        href="#about"
                        className="mt-8 text-white hover:text-gray-300 transition duration-300"
                        data-aos="fade-up"
                    >
                        <FaAngleDown className="text-4xl animate-bounce" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Banner;