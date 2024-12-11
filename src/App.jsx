import {Profile} from "./components/Profile.jsx";
import {About} from "./components/About.jsx";
import {Skill} from "./components/Skill.jsx";
import {Portfolio} from "./components/Portfolio.jsx";
import {Education} from "./components/Education.jsx";
import {Service} from "./components/Service.jsx";
import {Language} from "./components/Language.jsx";
import {Footer} from "./components/Footer.jsx";
import {useEffect, useState} from "react";
import AboutData from "./data/abtme.json";
import SkillsData from "./data/skills.json";
import PortfolioData from "./data/portfolio.json";
import EducationData from "./data/education.json";
import ServiceData from "./data/services.json";
import LanguageData from "./data/languages.json";
import {Contact} from "./components/Contact.jsx";
import {Routes, Route, Navigate} from 'react-router-dom';
import {Newsletter} from "./components/Newsletter.jsx";

function App() {
    const [about, setAbout] = useState(null);
    const [skill, setSkill] = useState([]);
    const [portfolio, setPortfolio] = useState([]);
    const [education, setEducation] = useState([]);
    const [service, setService] = useState([]);
    const [language, setLanguage] = useState([]);

    useEffect(() => {
        setAbout(AboutData);
        setSkill(SkillsData || []);
        setPortfolio(PortfolioData);
        setEducation(EducationData);
        setService(ServiceData);
        setLanguage(LanguageData);
    }, []);

    return (
        <>
            <div className="container">
                <div className="row g-5">
                    <Profile/>
                    <div className="col-lg-8">
                        <Routes>
                            <Route path="/" element={<Navigate to="/about"/>}/>
                            <Route path="/about" element={about && <About data={about[0]}/>}/>
                            <Route path="/skills" element={<Skill data={skill}/>}/>
                            <Route path="/portfolio" element={<Portfolio data={portfolio}/>}/>
                            <Route path="/education" element={<Education data={education}/>}/>
                            <Route path="/services" element={<Service data={service}/>}/>
                            <Route path="/languages" element={<Language data={language}/>}/>
                            <Route path="/newsletter" element={<Newsletter/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                        </Routes>
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;