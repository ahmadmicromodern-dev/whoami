import React from 'react';
import PropTypes from 'prop-types';
import { FiCode, FiLayers, FiBookOpen } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

function Services() {
    const { t } = useTranslation();
    
    // Map icon names to actual components
    const iconMap = {
        'FiLayers': <FiLayers className="w-6 h-6" />,
        'FiCode': <FiCode className="w-6 h-6" />,
        'FiBookOpen': <FiBookOpen className="w-6 h-6" />
    };

    return (
        <section
            className="py-20 px-4 md:px-8"
            id="services"
            data-aos="fade-up"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold mb-4">
                        {t('services.title')}
                        <span className="text-blue-600 ml-2">.</span>
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto">
                        {t('services.subtitle')}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t('services.items', { returnObjects: true }).map((service) => (
                        <div
                            key={service.id}
                            className="group relative rounded-xl shadow-lg hover:shadow-2xl
                            border border-gray-100 overflow-hidden transition-all duration-300
                            hover:-translate-y-2"
                        >
                            {/* Service Header */}
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                                        {iconMap[service.iconName]}
                                    </div>
                                    <h3 className="text-xl font-bold">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="mb-6">
                                    {service.description}
                                </p>

                                {/* Highlights */}
                                <ul className="space-y-2">
                                    {service.highlights.map((highlight, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <span className="text-blue-500 mt-1">•</span>
                                            <span className="">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/30 rounded-xl pointer-events-none transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

Services.propTypes = {
    servicesData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            iconName: PropTypes.string.isRequired,
            highlights: PropTypes.arrayOf(PropTypes.string).isRequired
        })
    )
};

export default Services;