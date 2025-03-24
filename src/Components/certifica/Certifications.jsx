import React from 'react';

function Certifications() {
    return (
        <div>
            <section className="py-12 px-4 md:px-8" id="certifications" data-aos="fade-up">
                <div className="max-w-6xl mx-auto ">
                    <div className="flex flex-wrap justify-center">
                        <h3 className="w-full text-3xl font-bold mb-8 text-gray-800">Certifications</h3>

                        <div
                            className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
                            <div
                                className="group border rounded-lg bg-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                                <a href="#" target="_blank" rel="noopener noreferrer"
                                   className="flex items-center justify-center mb-4">
                                    <img
                                        src="/img/quera.jpg"
                                        alt="Quera Certification"
                                        className="block mx-auto max-w-full h-auto"
                                    />
                                </a>
                                <div className="space-y-2">
                                    <h4 className="text-lg font-semibold text-gray-900">Python</h4>
                                    <p className="text-sm font-medium text-gray-600">Quera</p>
                                    <p className="text-sm text-gray-500">Issued Apr 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gray-100">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="w-full border-t border-gray-200 my-8"></div>
                </div>
            </section>
        </div>
    );
}

export default Certifications;