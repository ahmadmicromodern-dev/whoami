import React from 'react';
import {FaDownload} from "react-icons/fa6";


function About() {
    return (<div>
        <section className="py-12 px-4 md:px-8" id="about" data-aos="fade-up">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <h3 className="w-full text-3xl font-bold mb-6 text-gray-800">About Me</h3>
                    <div className="w-full space-y-4 text-gray-600">
                        <p className="leading-relaxed">
                            I'm a highly motivated front-end developer with 2 years of experience. I have a strong
                            background in React, Next.js and Javascript, and
                            I have experience developing complex web applications using these technologies. I'm
                            always willing to learn new things and I'm seeking a
                            challenging opportunity to build projects where my experience, skills and extensive
                            training can be fully utilized. I aim to create
                            engaging art that invites viewers to step forward and appreciate a conscious interactive
                            experience.
                        </p>
                        <p className="leading-relaxed">
                            Also, sharing knowledge has always been one of the most exciting things for me, and I
                            sometimes produce content on.

                        </p>
                    </div>

                    <div className="w-full mt-6">
                        <a href="#"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                            <span>My Resume</span>

                            <span className="ml-2">↓</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <div className="border-t border-gray-200"></div>
    </div>);
}

export default About;