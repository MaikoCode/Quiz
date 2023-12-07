
import ToggleDarkMode from "./Components/ToggleDarkMode"
import MultiSelectElement from "./Components/MultiSelectElement"


import "./App.css"
import QuizJsonData from "./data.json"


function App() {  
  return (
      <div className="min-h-screen p-8  bg-dark-white  dark:bg-dark-gray xl:p-16
       bg-pattern-background-mobile-light
       dark:bg-pattern-background-mobile-dark
       bg-cover
       md:bg-pattern-background-tablet-light
       md:dark:bg-pattern-background-tablet-dark
       md:bg-[length:600px_600px]
       md:bg-no-repeat
       md:bg-[left_top_1rem]
       xl:bg-cover
       xl:bg-pattern-background-desktop-light
       xl:dark:bg-pattern-background-desktop-dark
       ">

        <div className="flex justify-between mb-[10vh]">
          <span></span>
          <ToggleDarkMode />
        </div>

        <div className="flex flex-col xl:flex-row">
          <div className="xl:w-[45%] xl:mr-[5%] xl:ml-[5%] mb-16">
            <h1
            className="text-5xl dark:text-white mb-4">Welcome to the <span className="font-bold xl:block xl:w-[500px]">Frontend Quiz!</span></h1>

            <span className="block  dark:text-blue text-gray italic">Pick a subject to get started</span>
          </div>

          <div className="flex flex-col xl:w-[45%]">
           {
            QuizJsonData.quizzes.map((quiz, index) => {
              console.log(quiz.icon)
              return <MultiSelectElement key={index} img={quiz.icon} text={quiz.title} context={true}/>
            })
           }
          </div>
        </div>


          
      <div>
        </div>
      </div>
  )
}

export default App
