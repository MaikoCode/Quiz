import { useEffect } from "react";
import IconSunLight from "../assets/images/icon-sun-light.svg";
import IconSunDark from "../assets/images/icon-sun-dark.svg";
import IconMoonLight from "../assets/images/icon-moon-light.svg";
import IconMoonDark from "../assets/images/icon-moon-dark.svg";

import { useDarkMode } from "../context/DarkModeContext";

export default function ToggleDarkMode() {
    const { darkMode, setDarkMode } = useDarkMode();

    useEffect(() => {
        document.body.classList.toggle('dark')
    }, [darkMode]);

    const toggleMode = () => {
        setDarkMode(!darkMode); 
    }

    return (
        <button className="toggle-container noSelect" onClick={toggleMode}>
            <img src={darkMode ? IconSunLight : IconSunDark} alt="Light mode icon" className="icon" />
            <div className="toggle">
                <div className={`toggle-slider ${darkMode ? 'toggled' : ''}`}></div>
            </div>
            <img src={darkMode ? IconMoonLight : IconMoonDark} alt="Dark mode icon" className="icon" />
        </button>
    )
}
