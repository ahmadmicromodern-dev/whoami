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
import './global.css'
import {useTranslation} from "react-i18next";

export default function App() {
    const {t} = useTranslation()

    return (
        <div>


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


        </div>

    )
}


