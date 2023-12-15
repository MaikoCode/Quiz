import Layout from "../Components/Layout"
import { useSelector, useDispatch } from "react-redux"
import { resetScore } from "../store/scoreSlice"
import QuizJsonData from "../data.json"
import { useNavigate } from "react-router-dom"


export default function Resultspage() {
  const theme = useSelector((state) => state.theme.value)
  // const theme = "Accessibility"
  const iconTheme = useSelector((state) => state.theme.icon)
  const score = useSelector((state) => state.score.value)
  // const score = 8
  const dispatch = useDispatch()
  const quizData = QuizJsonData.quizzes.find(quiz => quiz.title === theme)
  const navigate = useNavigate()


  const handleSubmit = () => {
    dispatch(resetScore())
    navigate("/")

  }

  return (
   <Layout>
    <div className="flex flex-col lg:flex-row">
      <h1 className="text-4xl text-dark-gray dark:text-white mb-8 xl:w-[45%] xl:mr-[5%] xl:flex xl:flex-col xl:text-5xl">Quiz completed <span className="font-bold">You scored...</span></h1>

      <div className=" xl:w-[45%] xl:ml-[5%]">
          <div className="p-12 bg-white dark:bg-dark-blue-gray text-dark-gray dark:text-white rounded-xl mb-8">

          <p className="flex items-center justify-center"><img src={iconTheme} alt="icon" className="w-10 h-10 mr-4 mb-4" /><span className="pb-4">{theme}</span></p>

          <p className="flex flex-col items-center"><span className="text-5xl xl:text-8xl font-bold">{score}</span>
          <span>out of {quizData.questions.length}</span></p>
          </div>

          <button
          onClick={handleSubmit}
          className='bg-violet p-4  text-lg text-white font-bold rounded-2xl hover:opacity-50 dark:hover:opacity-70 w-full'>
            Play Again
        </button>
      </div>
    </div>
   </Layout>
  )
}
