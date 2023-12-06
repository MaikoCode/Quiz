import Button from "./Components/Button"
import ToggleDarkMode from "./Components/ToggleDarkMode"
import MultiSelectElement from "./Components/MultiSelectElement"
import HTMLIcon from "../src/assets/images/icon-html.svg"

import "./App.css"
import QuizJsonData from "./data.json"


function App() {  
  return (
      <div className="min-h-screen p-8  bg-dark-white dark:bg-dark-gray">

        <div className="flex justify-between mb-[20vh]">
          <span>Test</span>
          <ToggleDarkMode />
        </div>

        <div className="">
          <h1
          className="text-5xl dark:text-white mb-16">Welcome to the <span className="font-bold">Frontend Quiz!</span></h1>

          <div className="flex flex-col">
           {
            QuizJsonData.quizzes.map((quiz, index) => {
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
