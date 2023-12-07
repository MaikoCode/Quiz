import ToggleDarkMode from "../Components/ToggleDarkMode"

export default function Quizpage() {
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
       <span></span>
       <ToggleDarkMode />
     </div>
    
    
    
    
    
    
    
    
     </div>

  )
}
