import React from 'react';
import PropTypes from 'prop-types';

import {
    FaGithub, 
    FaTelegram, 
    FaAngleDown,
    FaGlobe
} from 'react-icons/fa';

import data from './Banner.json';

const iconComponents = {
    FaGithub: FaGithub, 
    FaTelegram: FaTelegram,
    FaGlobe: FaGlobe
};

function Banner() {
    const {name, jobTitle, profileImage, backgroundImage, socialLinks} = data;

    return (<section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
        <div className="absolute inset-0 z-0">
            <img
                id="imgBanner"
                src={backgroundImage}
                alt="Background"
                className="w-full h-full object-cover opacity-700"
                loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"/>
        </div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center justify-center text-center space-y-8">

                {/* تصویر پروفایل */}
                <div
                    className="relative group w-64 h-64 rounded-full border-4 border-blue-500/20 p-2
            shadow-2xl transition-all duration-500 hover:border-blue-500/50"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                >
                    <img
                        src={profileImage}
                        alt={name}
                        className="w-full h-full rounded-full object-cover transform
                        group-hover:scale-105 transition-transform"
                    />
                </div>

                {/* متن اصلی */}
                <div className="space-y-6" data-aos="fade-up" data-aos-duration="1000">
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400
                    to-cyan-400 bg-clip-text text-transparent">
                        {name}
                    </h1>
                    <p className="text-2xl md:text-3xl font-medium text-gray-300">
                        {jobTitle}
                    </p>

                    {/* لینک‌های اجتماعی */}
                    <div className="flex justify-center space-x-6">
                        {socialLinks.map((link) => {
                            const Icon = iconComponents[link.icon];
                            return (<a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                                aria-label={`Visit ${link.name}`}
                            >
                                <Icon className="w-8 h-8"/>
                            </a>);
                        })}
                    </div>
                </div>

                {/* اسکرول پایین */}
                <a
                    href="#about"
                    className="animate-bounce-slow inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 hover:bg-blue-500/30 transition-colors"
                    aria-label="Scroll to next section"
                >
                    <FaAngleDown className="w-6 h-6 text-blue-400"/>
                </a>
            </div>
        </div>
    </section>);
}

Banner.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        jobTitle: PropTypes.string.isRequired,
        profileImage: PropTypes.string.isRequired,
        backgroundImage: PropTypes.string.isRequired,
        socialLinks: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            icon: PropTypes.oneOf(Object.keys(iconComponents)).isRequired
        })).isRequired
    }).isRequired
};

export default Banner;