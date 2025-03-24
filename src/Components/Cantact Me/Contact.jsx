import React from 'react';
import {FaLocationDot, FaPhone} from "react-icons/fa6";
import {MdMarkEmailUnread} from "react-icons/md";

function Contact() {  // نام کامپوننت اصلاح شد
    return (<div>
        <section className="py-12 px-4 md:px-8 bg-white" id="contact" data-aos="fade-up">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8 text-center">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">Get In Touch</h3>
                    <p className="text-gray-600">I'm always open to new opportunities and collaborations</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Address */}
                    <div className="flex items-start p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                        <div className="bg-blue-100 p-3 rounded-full mr-4">
                            <FaLocationDot className="text-blue-600 text-xl"/>
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold text-gray-800 mb-1">Address</h5>
                            <p className="text-gray-600"></p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                        <div className="bg-green-100 p-3 rounded-full mr-4">
                            <FaPhone className="text-green-600 text-xl"/>
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold text-gray-800 mb-1">Phone</h5>
                            <a href=""
                               className="text-gray-600 hover:text-blue-600 transition-colors">
                            </a>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                        <div className="bg-purple-100 p-3 rounded-full mr-4">
                            <MdMarkEmailUnread className="text-purple-600 text-xl"/>
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold text-gray-800 mb-1">Email</h5>
                            <a
                                href="mailto:darkcodeit@protonmail.com"  // پروتکل mailto اضافه شد
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                darkcodeit@protonmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>);
}

export default Contact;  // نام اکسپورت اصلاح شد