/**
 * با سلام خدمت مهندس و همکار گرامی لطفا وقتی از پروژه های اپن سورس من استفاده میکنید یادر از من در پروژه کنید با قرار دادن ادرس گیت هاب من در هرقسمت که تمایل داشتید ممنون وموفق باشید
 * 
 * Hello dear engineer and colleague, when you use my open source projects or mention me in your project, please include my GitHub address wherever you prefer. Thank you and good luck.
 * 
 * GitHub: https://github.com/Darkcode-it
 */

import './App.css'
import Menu from "./Components/Menu/Menu.jsx";
import Banner from "./Components/banner/Banner.jsx";
import About from "./Components/About/About.jsx";
import Education from "./Components/Education/Education.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Certifications from "./Components/certifica/Certifications.jsx";
import Skills from "./Components/Skill/Skill.jsx";
import Portfolio from "./Components/portfolio/Portfolio.jsx";
import Services from "./Components/Services/Services.jsx";
import Footer from "./Components/footer/Footer.jsx";
import PWAInstallPrompt from './components/PWAInstallPrompt';
import './global.css'
import {useTranslation} from "react-i18next";
import { ThemeProvider } from './Components/Menu/Context';

export default function App() {
    const {t} = useTranslation();

    return (
        <ThemeProvider>
            <div className="min-h-screen bg-theme relative overflow-hidden">
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-theme opacity-5"></div>

                {/* Animated Gradient Circles */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-theme rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-theme rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-theme rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>

                {/* Main Content */}
                <div className="relative">
                    <Menu/>
                    <Banner/>
                    <About/>
                    <Experience/>
                    <Education/>
                    <Certifications/>
                    <Skills/>
                    <Portfolio/>
                    <Services/>
                    <Footer/>
                    <PWAInstallPrompt />
                </div>
            </div>
        </ThemeProvider>
    )
}


