import React from 'react';
import PropTypes from 'prop-types';
import skillsData from './Skill.json';

function Skills() {
    // تابع فال‌بک برای تصاویر معیوب
    const addImageFallback = (event) => {
        event.currentTarget.src = 'https://via.placeholder.com/32?text=❌';
        event.currentTarget.onerror = null;
    };

    return (
        <div>
            <section className="py-12 px-4 md:px-8" id="skills" data-aos="fade-up">
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-8 text-gray-800">Skills</h3>

                    {/* بهبود گرید و رسپانسیو بودن */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 justify-center">
                        {skillsData.skills.map((skill) => (
                            <div
                                key={skill.id} // استفاده از ID یونیک به جای index
                                className="flex flex-col items-center justify-center border rounded-lg
                                bg-white p-4 gap-2 shadow-sm hover:shadow-lg transition-all
                                duration-300 hover:-translate-y-1 min-w-[120px] max-w-[160px]
                                h-[120px] hover:border-blue-200"
                            >
                                <img
                                    src={skill.image}
                                    alt={`${skill.name} icon`} // بهبود alt برای SEO
                                    className="w-12 h-12 object-contain" // افزایش سایز آیکون
                                    loading="lazy"
                                    onError={addImageFallback}
                                />
                                <h6 className={`text-sm font-semibold text-gray-700 
                                    text-center ${skill.customClass || ''}`}>
                                    {skill.name}
                                </h6>
                            </div>
                        ))}
                    </div>

                    {/* نمایش پیام اگر دیتا خالی باشد */}
                    {skillsData.skills.length === 0 && (
                        <p className="text-gray-500 mt-8">No skills to display</p>
                    )}
                </div>
            </section>

            {/* خط جداکننده ساده‌تر */}
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <hr className="border-t border-gray-200 my-8" />
            </div>
        </div>
    );
}

// اعتبارسنجی PropTypes
Skills.propTypes = {
    skillsData: PropTypes.shape({
        skills: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                customClass: PropTypes.string
            })
        )
    })
};

export default Skills;