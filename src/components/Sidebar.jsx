import { useState, useEffect } from "react";

export function Sidebar() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [language, setLanguage] = useState("English");

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

    useEffect(() => {
        const languageIcon = document.getElementById("languageIcon");
        if (language === "English") {
            languageIcon.src = "/img/en_flag_icon_round.webp";
            languageIcon.alt = "English";
        } else {
            languageIcon.src = "/img/es_flag_icon_round.webp";
            languageIcon.alt = "Spanish";
        }
    }, [language]);

    return (
        <>
            {/* Floating sidebar start */}
            <div className="floating-options">
                <button className="btn btn-secondary floating-btn" id="languageToggle" onClick={toggleLanguage}>
                    <img
                        src="/img/en_flag_icon_round.webp"
                        alt="English"
                        id="languageIcon"
                    />
                </button>
                <button className="btn btn-secondary floating-btn" id="themeToggle" onClick={toggleTheme}>
                    <i className={`fas ${isDarkMode ? 'fa-moon' : 'fa-sun'}`} />
                </button>
            </div>
            {/* Floating sidebar end */}
        </>
    );
}