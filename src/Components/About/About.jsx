import React from 'react';
import PropTypes from 'prop-types';
import { FaDownload } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation();

    const handleDownload = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(t('about.resume.url'));
            if (!response.ok) {
                throw new Error('File not found');
            }
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'AhmadRasouli.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Download failed:', error);
            alert('متأسفانه دانلود فایل با مشکل مواجه شد. لطفاً دوباره تلاش کنید.');
        }
    };

    return (
        <section
            className="relative py-20 px-4 md:px-8 "
            id="about"
            data-aos="fade-up"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-extrabold mb-4 ">
                        {t('about.title')}
                        <span className="text-blue-600 ml-2">.</span>
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-3 gap-12 items-start">
                    {/* Text Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {t('about.description', { returnObjects: true }).map((paragraph, index) => (
                            <p
                                key={`para-${index}`}
                                className="text-lg leading-relaxed "
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Download Card */}
                    <div className="rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow">
                        <div className="text-center">
                            <div className="mb-6">
                                <span className="inline-block bg-blue-100 text-blue-600 p-4 rounded-2xl">
                                    <FaDownload className="w-8 h-8" />
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-4">
                                {t('about.portfolio')}
                            </h3>
                            <button
                                onClick={handleDownload}
                                className="inline-flex items-center justify-center w-full bg-gray-800 hover:bg-gray-700 text-white px-6
                                 py-4 rounded-xl transition-all duration-300 group"
                                aria-label={t('about.resume.label')}
                            >
                                <span className="font-medium">{t('about.resume.label')}</span>
                                <FaDownload className="ml-3 w-5 h-5 transition-transform group-hover:translate-y-1" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-20 max-w-7xl mx-auto">
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                </div>
            </div>
        </section>
    );
}

About.propTypes = {
    aboutContent: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.arrayOf(PropTypes.string),
        resume: PropTypes.shape({
            url: PropTypes.string,
            label: PropTypes.string
        })
    })
};

export default About;