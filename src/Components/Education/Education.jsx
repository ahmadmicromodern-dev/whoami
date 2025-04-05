import React from 'react';
import PropTypes from 'prop-types';
import { AcademicCapIcon, TrophyIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

// داده‌های آموزشی با قابلیت توسعه
const educationData = [
    {
        id: 1,
        title: "Diploma in Veterinary and Animal Nutrition",
        institution: "Iranian National Education System",
        description: "Studied animal health and nutrition with a focus on practical applications",
        year: "2014",
        icon: AcademicCapIcon,
        highlights: [
            "Focus on biochemistry and microbiology",
            "Practical laboratory training",
            "Animal physiology specialization"
        ]
    },
    {
        id: 2,
        title: "National Entrance Exam Achievement",
        institution: "Iranian University Entrance System",
        description: "Ranked 133rd in the 2014 National Entrance Exam",
        year: "2014",
        icon: TrophyIcon,
        highlights: [
            "Top 0.5% of participants",
            "Competitive STEM-focused exam",
            "Quantitative analysis specialization"
        ]
    }
];

function EducationTimeline() {
    const { t } = useTranslation();
    
    // Get education data from translations
    const educationData = t('education.items', { returnObjects: true });
    
    // Map icons to their components
    const iconMap = {
        'AcademicCapIcon': AcademicCapIcon,
        'TrophyIcon': TrophyIcon
    };

    return (
        <section
            className="relative py-20 px-4 md:px-8"
            id="education"
            data-aos="fade-up"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-extrabold mb-4">
                        {t('education.title')}
                        <span className="text-blue-600 ml-2">.</span>
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto">
                        {t('education.subtitle')}
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0
                     w-1 bg-gray-200 transform -translate-x-1/2 rounded-full" />

                    {/* Education Items */}
                    <div className="space-y-12 md:space-y-0">
                        {educationData.map((edu, index) => (
                            <EducationCard
                                key={edu.id}
                                edu={{...edu, icon: iconMap[edu.iconName]}}
                                index={index}
                                totalItems={educationData.length}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// کامپوننت جداگانه برای آیتم‌های آموزشی
const EducationCard = ({ edu, index, totalItems }) => {
    const { t } = useTranslation();
    const Icon = edu.icon;

    return (
        <article
            className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
            items-center gap-8 w-full ${index !== totalItems - 1 ? 'mb-20' : ''}`}>
            {/* Timeline Dot */}
            <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-6 bg-blue-600 rounded-full ring-8 ring-blue-100" />
            </div>

            {/* Content Container */}
            <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="relative rounded-2xl shadow-lg hover:shadow-xl transition-shadow
                 duration-300 p-8 border border-gray-100">
                    {/* Icon Header */}
                    <div className="mb-6 flex items-center gap-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                            <Icon className="w-8 h-8 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">{edu.title}</h3>
                            <p className="text-sm font-medium mt-1">{edu.institution}</p>
                        </div>
                    </div>

                    {/* Content Body */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                            <span className="bg-gray-100 px-3 py-1 rounded-full">🎓 {edu.year}</span>
                            {index === 0 && (
                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                                    {t('education.completed')}
                                </span>
                            )}
                        </div>

                        <p className="leading-relaxed">{edu.description}</p>

                        {/* Highlights List */}
                        <ul className="space-y-2 mt-4">
                            {edu.highlights.map((highlight, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-2"
                                >
                                    <svg
                                        className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </article>
    );
};

EducationCard.propTypes = {
    edu: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired
};

export default EducationTimeline;