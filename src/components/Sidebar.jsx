import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function Sidebar() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [language, setLanguage] = useState("English");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
        const systemPrefersDark = prefersDarkScheme.matches;
        setIsDarkMode(systemPrefersDark);

        prefersDarkScheme.addEventListener("change", (e) => {
            setIsDarkMode(e.matches);
        });
    }, []);

    useEffect(() => {
        document.body.classList.toggle("dark-mode", isDarkMode);
        document.body.classList.toggle("light-mode", !isDarkMode);
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === "English" ? "Spanish" : "English"));
    };

    const navigationSections = [
        { name: "about", icon: "fas fa-user", path: "/about" },
        { name: "skills", icon: "fas fa-cogs", path: "/skills" },
        { name: "portfolio", icon: "fas fa-briefcase", path: "/portfolio" },
        { name: "education", icon: "fas fa-graduation-cap", path: "/education" },
        { name: "services", icon: "fas fa-concierge-bell", path: "/services" },
        { name: "languages", icon: "fas fa-language", path: "/languages" },
        { name: "newsletter", icon: "fas fa-newspaper", path: "/newsletter" },
        { name: "contact", icon: "fas fa-envelope", path: "/contact" }
    ];

    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className="floating-options">
                <button
                    className="btn btn-secondary floating-btn"
                    id="languageToggle"
                    onClick={toggleLanguage}
                    title={`Switch to ${language === "English" ? "Spanish" : "English"}`}
                >
                    <img
                        src={language === "English" ? "/img/en_flag_icon_round.webp" : "/img/es_flag_icon_round.webp"}
                        alt={language}
                        id="languageIcon"
                    />
                </button>

                <button
                    className="btn btn-secondary floating-btn"
                    id="themeToggle"
                    onClick={toggleTheme}
                    title={`Switch to ${isDarkMode ? "Light" : "Dark"} Mode`}
                >
                    <i className={`fas ${isDarkMode ? 'fa-moon' : 'fa-sun'}`} />
                </button>

                {navigationSections.map((section) => (
                    <button
                        key={section.name}
                        className={`btn btn-secondary floating-btn ${
                            location.pathname === section.path ? 'active' : ''
                        }`}
                        onClick={() => handleNavigation(section.path)}
                        title={section.name.charAt(0).toUpperCase() + section.name.slice(1)}
                    >
                        <i className={section.icon} />
                    </button>
                ))}
            </div>
        </>
    );
}