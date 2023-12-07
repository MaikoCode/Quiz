import Homepage from "./Pages/Homepage"
import Quizpage from "./Pages/Quizpage"
import Resultspage from "./Pages/Resultspage"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./App.css"

function App() {  
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Homepage />}/>
        <Route path="/quiz/:id" element={<Quizpage />} />
        <Route path="/results" element={<Resultspage />} />
      </Routes>
    </Router>
  )
}

export default App
