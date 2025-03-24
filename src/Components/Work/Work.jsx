import React from 'react';

function Experience() {
    return (
        <div>
            <section className="py-12 px-4 md:px-8" id="experience" data-aos="fade-up">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap">
                        <h3 className="w-full text-3xl font-bold mb-6 text-gray-800">Experience & Projects</h3>

                        <div className="w-full">
                            <div className="border rounded-lg bg-gray-50 p-6 shadow-sm">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-900">Front-End Developer & Cybersecurity Enthusiast (Personal Projects)</h4>
                                        <span className="inline-block mt-1 bg-blue-100 text-blue-800 text-sm px-2.5 py-0.5 rounded-full">
                                            Self-Initiated
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-gray-500 mt-1">Jan 2023 - Present</p>
                                    </div>
                                </div>

                                <p className="text-gray-600 leading-relaxed mb-4">
                                    "As a front-end developer and cybersecurity enthusiast, I have worked on multiple personal
                                    projects to strengthen my skills and familiarize myself with new technologies. These projects
                                    include building responsive websites, interactive user interfaces, and exploring cybersecurity
                                    techniques such as penetration testing and malware development. Through this, I have gained a
                                    strong command of modern web development frameworks and tools, as well as security practices,
                                    and I am ready to apply this knowledge in a professional environment."


                                </p>
                                <div className="pt-4 border-t border-gray-200">
                                    <p className="text-sm font-medium text-gray-500 mb-2">Skill:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {/* توسعه وب */}

                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Web Panel Development</span>
                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">HTML</span>
                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">CSS</span>
                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">JavaScript</span>
                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">React</span>

                                        {/* امنیت سایبری */}
                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Penetration Testing</span>
                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">SQL Injection</span>
                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Malware Development</span>
                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">DDoS Attacks (Python)</span>
                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Telegram Channel Disruption</span>

                                        {/* شبکه و سیستم‌ها */}
                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Network+</span>
                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">VPS Services</span>
                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Kali Linux</span>
                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Tails OS 5.0</span>
                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Mac OS</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Experience;