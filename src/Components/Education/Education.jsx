import React from 'react';

function Education() {
    return (<div>
        <section className="py-12 px-4 md:px-8" id="education" data-aos="fade-up">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-wrap">
                    <h3 className="w-full text-3xl font-bold mb-6 text-gray-800 hover:text-blue-600 transition-colors duration-300">
                        Education
                    </h3>

                    <div className="w-full">
                        <div
                            className="border rounded-lg bg-gray-50 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                            <h4 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                                Diploma in Veterinary and Animal Nutrition
                            </h4>
                            <p className="text-sm font-medium text-gray-600 mt-2">
                                Studied animal health and nutrition with a focus on practical applications
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                Graduated in 2014
                            </p>
                        </div>

                        <div
                            className="mt-6 border rounded-lg bg-gray-50 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                            <h4 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                                National Entrance Exam Achievement
                            </h4>
                            <p className="text-sm font-medium text-gray-600 mt-2">
                                Ranked 133rd in the 2014 National Entrance Exam
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                Demonstrates high academic potential and capability
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>);
}

export default Education;