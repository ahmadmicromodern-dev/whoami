import React from 'react';
import skillsData from './Skill.json';

function Skills() {
    return (<div>
        <section className="py-12    px-4 md:px-8" id="skills" data-aos="fade-up">
            <div className="max-w-6xl mx-auto text-center">
                <div className="flex flex-wrap justify-center">
                    <h3 className="w-full text-3xl font-bold mb-8 text-gray-800">Skills</h3>

                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
                         lg:grid-cols-5 xl:grid-cols-5 gap-4 justify-items-center">
                        {skillsData.skills.map((skill, index) => (<div
                            key={index}
                            className="flex flex-col items-center justify-center border
                                     rounded-lg bg-white p-4 gap-2 shadow-sm hover:shadow-lg
                                      transition-shadow duration-300 w-[120px] h-[120px]">
                            <img
                                src={skill.image}
                                alt={skill.name.toLowerCase()}
                                className="w-8 h-8 object-contain"
                            />
                            <h6 className={`text-sm font-semibold text-gray-700
                                     text-center ${skill.customClass}`}>
                                {skill.name}
                            </h6>
                        </div>))}
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-gray-100">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <div className="w-full border-t border-gray-200 my-8"></div>
            </div>
        </section>
    </div>);
}

export default Skills;