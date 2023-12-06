import { createContext, useContext, useState } from "react";


const DarkModeContext = createContext();


export const useDarkMode = () => useContext(DarkModeContext);


export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

    return (
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}
