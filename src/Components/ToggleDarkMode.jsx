import { useState } from "react"
import IconSunLight from "../assets/images/icon-sun-light.svg"
import IconSunDark from "../assets/images/icon-sun-dark.svg"
import IconMoonLight from "../assets/images/icon-moon-light.svg"
import IconMoonDark from "../assets/images/icon-moon-dark.svg"


export default function ToggleDarkMode() {
    const [isToggled, setIsToggled] = useState(false)

    const handleToggle = () => {
        setIsToggled(!isToggled)
    }


  return (
    <button className="toggle-container" onClick={handleToggle}>
        <img src={IconSunDark} alt="Light mode icon" className="icon" />
        <div className="toggle">
        <div className={`toggle-slider ${isToggled ? 'toggled' : ''}`}></div>
        </div>
        <img src={IconMoonDark} alt="Dark mode icon" className="icon" />
  </button>
  )
}
