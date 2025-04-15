// import React from 'react';
// import PropTypes from 'prop-types';
// import skillsData from './Skill.json';

// function Skills() {
//     // تابع فال‌بک برای تصاویر معیوب
//     const addImageFallback = (event) => {
//         event.currentTarget.src = 'https://via.placeholder.com/32?text=❌';
//         event.currentTarget.onerror = null;
//     };

//     return (
//         <div>
//             <section className="py-12 shadow-md  px-4 md:px-8" id="skills" data-aos="fade-up">
//                 <div className="max-w-6xl mx-auto text-center">
//                     <h3 className="text-3xl font-bold mb-8 ">Skills</h3>

//                     {/* بهبود گرید و رسپانسیو بودن */}
//                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 justify-center">
//                         {skillsData.skills.map((skill) => (
//                             <div
//                                 key={skill.id} // استفاده از ID یونیک به جای index
//                                 className="flex flex-col items-center justify-center border rounded-lg
//                                p-4 gap-2 shadow-sm hover:shadow-lg transition-all
//                                 duration-300 hover:-translate-y-1 min-w-[120px] max-w-[160px]
//                                 h-[120px] hover:border-blue-200"
//                             >
//                                 <img
//                                     src={skill.image}
//                                     alt={`${skill.name} icon`} // بهبود alt برای SEO
//                                     className="w-12 h-12 object-contain" // افزایش سایز آیکون
//                                     loading="lazy"
//                                     onError={addImageFallback}
//                                 />
//                                 <h6 className={`text-sm font-semibold
//                                     text-center  ${skill.customClass || ''}`}>
//                                     {skill.name}
//                                 </h6>
//                             </div>
//                         ))}
//                     </div>

//                     {/* نمایش پیام اگر دیتا خالی باشد */}
//                     {skillsData.skills.length === 0 && (
//                         <p className="text-gray-500 mt-8">No skills to display</p>
//                     )}
//                 </div>
//             </section>


//         </div>
//     );
// }

// // اعتبارسنجی PropTypes
// Skills.propTypes = {
//     skillsData: PropTypes.shape({
//         skills: PropTypes.arrayOf(
//             PropTypes.shape({
//                 id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//                 name: PropTypes.string.isRequired,
//                 image: PropTypes.string.isRequired,
//                 customClass: PropTypes.string
//             })
//         )
//     })
// };

// export default Skills;




import React from 'react';
import PropTypes from 'prop-types';
import skillsData from './Skill.json';

function Skills() {
    const addImageFallback = (event) => {
        event.currentTarget.src = 'https://via.placeholder.com/32?text=❌';
        event.currentTarget.onerror = null;
    };

    // دستهبندی مهارتها
    const skillCategories = [
        {
            title: 'Web development',
            skills: ['HTML', 'CSS', 'Tailwind CSS', 'bootstrap', 'JavaScript', 'Node.js', 'npm', 'React', 'Panel Development', 'Python']
        },
        {
            title: 'Cybersecurity',
            skills: ['Penetration Testing', 'SQL Injection', 'Malware Development', 'DDoS Attacks', 'Channel Disruption', 'Kali Linux', 'Tails OS 5.0', 'Network+']
        },
        {
            title: 'Network and infrastructure',
            skills: ['VPS Services', 'SQL Injection']
        },
        {
            title: 'Tools',
            skills: ['Git', 'Figma', ]
        }
    ];

    return (
        <div>
            <section className="py-12 shadow-md px-4 md:px-8" id="skills" data-aos="fade-up">
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-8">Skill</h3>

                    {skillCategories.map((category) => (
                        <div key={category.title} className="mb-12">
                            <h4 className="text-xl font-semibold mb-6 text-gray-700">
                                {category.title}
                            </h4>
                            
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 justify-center">
                                {skillsData.skills
                                    .filter(skill => category.skills.includes(skill.name))
                                    .map((skill) => (
                                        <div
                                            key={skill.id}
                                            className="flex flex-col items-center justify-center border rounded-lg
                                            p-4 gap-2 shadow-sm hover:shadow-lg transition-all
                                            duration-300 hover:-translate-y-1 min-w-[120px] max-w-[160px]
                                            h-[120px] hover:border-blue-200"
                                        >
                                            <img
                                                src={skill.image}
                                                alt={`آیکون ${skill.name}`}
                                                className="w-12 h-12 object-contain"
                                                loading="lazy"
                                                onError={addImageFallback}
                                            />
                                            <h6 className={`text-sm font-semibold text-center ${skill.customClass || ''}`}>
                                                {skill.name === 'SQL Injection' && category.title === 'شبکه و زیرساخت' 
                                                    ? 'SQL Injection (دفاعی)'
                                                    : skill.name}
                                            </h6>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}

                    {skillsData.skills.length === 0 && (
                        <p className="text-gray-500 mt-8">هیچ مهارتی برای نمایش وجود ندارد</p>
                    )}
                </div>
            </section>
        </div>
    );
}

Skills.propTypes = { /* ... */ };

export default Skills;