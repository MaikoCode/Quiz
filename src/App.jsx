import Button from "./Components/Button"
import ToggleDarkMode from "./Components/ToggleDarkMode"
import MultiSelectElement from "./Components/MultiSelectElement"

import HTMLIcon from "../src/assets/images/icon-html.svg"

import "./App.css"

function App() {
  
  return (
    <div className="p-4 flex flex-col gap-4">
      <Button text="Submit Answer"/>
      <ToggleDarkMode />
      
      <div>
        <MultiSelectElement img={HTMLIcon} text={"HTML"} context={false}/>
      </div>
    </div>
  )
}

export default App
