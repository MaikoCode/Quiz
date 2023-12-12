import Layout from "../Components/Layout"
import QuizJsonData from "../data.json"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { incrementScore } from "../store/scoreSlice"


export default function Quizpage() {
  const theme = useSelector((state) => state.theme.value)
  const dispatch = useDispatch()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false)

  const quizData = QuizJsonData.quizzes.find(quiz => quiz.title === theme)
  // console.log('quizData:', quizData);
  const question = quizData.questions[currentQuestionIndex]

  const handleClickAnswer = (option) => {
    setSelectedAnswer(option)
    setShowAnswer(false)
  }

  const handleSubmit = () => {
    setShowAnswer(true)
    if(selectedAnswer === question.answer ){
      dispatch(incrementScore())
    }
  }

  const handleNextQuestion  = () => {
    setSelectedAnswer('')
    setShowAnswer(false)
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const getOptionClass = (option) => {
    if(!showAnswer) return ''
    return option === question.answer ? "correct-answer" : (option === selectedAnswer) ? "wrong-answer" : ''
  }

  return (
    <Layout>
      
      <div className="flex flex-col xl:flex-row">
              <div className="xl:w-[45%] xl:mr-[5%] xl:ml-[5%] mb-16">
              <span className="block  dark:text-blue text-gray italic">Question {currentQuestionIndex + 1} of
                {quizData.questions.length}</span>
                <h1
                className="text-5xl dark:text-white mb-4">
                {question.question}
                </h1>
              </div>

              <div className="flex flex-col xl:w-[45%]">
                {
                  question.options.map((option, index) => {
                    const optionClass = getOptionClass(option)
                    return (
                      <button
                        key={index}
                        onClick={() => handleClickAnswer(option)}
                        className={`flex items-center w-full p-2 bg-white shadow-md rounded-xl multiSelect dark:dark:bg-dark-blue-gray my-2 ${optionClass}`}
                      >
                        <div className="bg-gray dark:bg-white bg-opacity-10 mr-6 rounded-lg iconnic">
                          <span className="font-bold text-gray dark:text-gray hover:text-violet uppercase block h-10 w-10 py-1.5">a</span>
                        </div>
                        <span className="text-dark-gray dark:text-white font-bold block py-3">{option}</span>
                      </button>
                    )
                  })
                }
              {!showAnswer && (

              <button
                onClick={handleSubmit}
                disabled={showAnswer}
                className='bg-violet p-4 text-lg text-white font-bold rounded-2xl hover:opacity-50 dar:hover:opacity-70 mt-4'>
                    Submit Answer
              </button>
              )}

              {showAnswer && (
                <button
                onClick={handleNextQuestion}
                className='bg-violet p-4 text-lg text-white font-bold rounded-2xl hover:opacity-50 dar:hover:opacity-70 mt-4'>
                    Next Question
              </button>

              )}

              </div>
            </div>  
          <div>
        </div>
    </Layout>
  )
}
