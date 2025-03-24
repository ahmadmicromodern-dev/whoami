import React from 'react';

function Services() {
    return (<section className="py-12 px-4 md:px-8" id="services" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-gray-800 text-center hover:text-blue-600 transition-colors duration-300">
                Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Service 1 */}
                <div
                    className="border rounded-lg bg-gray-50 p-6 shadow-sm hover:shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                    <h5 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                        <span className="text-blue-600 mr-2">1</span>Implementation of the Site Template
                    </h5>
                    <p className="text-sm text-gray-600 mt-2">
                        Do you have a project that you want to carry out very simply and without a special
                        framework? You can discuss this with me.
                    </p>
                </div>

                {/* Service 2 */}
                <div
                    className="border rounded-lg bg-gray-50 p-6 shadow-sm hover:shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                    <h5 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                        <span className="text-blue-600 mr-2">2</span>Development of React and NextJS Projects
                    </h5>
                    <p className="text-sm text-gray-600 mt-2">
                        If you have a project that is going to be developed with React or Next and the quality of
                        the work is important to you, you can count on me.
                    </p>
                </div>

                {/* Service 3 */}
                <div
                    className="border rounded-lg bg-gray-50 p-6 shadow-sm hover:shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                    <h5 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                        <span className="text-blue-600 mr-2">3</span>Counseling
                    </h5>
                    <p className="text-sm text-gray-600 mt-2">
                        If your goal is to learn and improve programming, I can show you step-by-step based on my
                        experiences at work.
                    </p>
                </div>
            </div>
        </div>
    </section>);
}

export default Services;