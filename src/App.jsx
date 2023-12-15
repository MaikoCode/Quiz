import Homepage from "./Pages/Homepage"
import Quizpage from "./Pages/Quizpage"
import Resultspage from "./Pages/Resultspage"
import NotFoundPage from "./Pages/NotFoundPage"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./App.css"

function App() {  
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Homepage />}/>
        <Route path="/quiz/:id" element={<Quizpage />} />
        <Route path="/results" element={<Resultspage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
