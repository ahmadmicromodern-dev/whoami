import './App.css'
import Menu from "./Components/Menu/Menu.jsx";
import Banner from "./Components/banner/Banner.jsx";
import About from "./Components/About/About.jsx";
import Work from "./Components/Work/Work.jsx";
import Experience from "./Components/Work/Work.jsx";
import Education from "./Components/Education/Education.jsx";
import Certifications from "./Components/certifica/Certifications.jsx";
import Skills from "./Components/Skill/Skill.jsx";
import Portfolio from "./Components/portfolio/Portfolio.jsx";
import Services from "./Components/Services/Services.jsx";
import Footer from "./Components/footer/Footer.jsx";

export default function App() {
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


