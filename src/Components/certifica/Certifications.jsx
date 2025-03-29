import React from 'react';
import certifications from './certifications.json'; // Import the JSON file

function Certifications() {
    return (<div>
        <section className="py-12 px-4 md:px-8" id="certifications" data-aos="fade-up">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-wrap justify-center">
                    <h3 className="w-full text-3xl font-bold mb-8 ">Certifications</h3>

                    <div
                        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 justify-items-center">
                        {certifications.map((certification) => (<div
                            key={certification.id}
                            className="group  rounded-lg border-gray-100 p-6 shadow-sm hover:shadow-2xl transition-shadow text-center"
                        >
                            <a
                                href={certification.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center mb-4"
                            >
                                <img
                                    src={certification.image}
                                    alt={`${certification.title} Certification`}
                                    className="block mx-auto max-w-full h-auto rounded-lg"
                                />
                            </a>
                            <div className="space-y-2">
                                <h4 className="text-lg font-semibold ">{certification.title}</h4>
                                <p className="text-sm font-medium text-gray-600">{certification.issuer}</p>
                                <p className="text-sm text-gray-500">Issued {certification.issuedDate}</p>
                            </div>
                        </div>))}
                    </div>
                </div>
            </div>
        </section>

        {/*<section className="bg-gray-100 px-50">*/}
        {/*    <div className="max-w-6xl mx-auto px-4 md:px-8">*/}
        {/*        <div className="w-full border-t border-gray-200 my-8"></div>*/}
        {/*    </div>*/}
        {/*</section>*/}
    </div>);
}

export default Certifications;