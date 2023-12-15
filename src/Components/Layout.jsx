import ToggleDarkMode from "./ToggleDarkMode"
import { useSelector } from "react-redux"

// eslint-disable-next-line react/prop-types
export default function Layout({children}) {
  
  // When I'm forwaded in this component I think the redux state is not fixed, so I can extract the value and so the theme and the icon are not applied
  
  const theme = useSelector((state) => state.theme.value)
  const icon = useSelector((state) => state.theme.icon)

  console.log('Theme:', theme)
  console.log('Icon:', icon)
  
  return (
    <div className="min-h-screen p-8 font-rubik  bg-dark-white  dark:bg-dark-gray xl:p-16
    bg-pattern-background-mobile-light
    dark:bg-pattern-background-mobile-dark
    bg-cover
    md:bg-pattern-background-tablet-light
    md:dark:bg-pattern-background-tablet-dark
    md:bg-[length:600px_600px]
    md:bg-no-repeat
    md:bg-[left_top_0rem]
    xl:bg-cover
    xl:bg-pattern-background-desktop-light
    xl:dark:bg-pattern-background-desktop-dark
    ">
     <div className="flex justify-between mb-[10vh]">
      {theme ?   
      (
          <span className="flex items-center ml-10"> 
            <span className={`bg-${theme.toLowerCase() === 'html' ? 'salmon' : theme.toLowerCase() === 'css' ? 'green' : theme.toLowerCase() === 'javascript' ? 'blue' : 'violet'} bg-opacity-10 mr-6 rounded-lg`}>
            <img src={"."+icon} alt="icon" className="p-1 w-10 h-10" /></span>
            <span className="font-bold text-gray dark:text-white text-xl">{theme}</span>
          </span>
        ): (<span></span>)}

        
        <ToggleDarkMode />
      </div>

    {children}
    </div>

  )
}
