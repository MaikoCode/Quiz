import Layout from "../Components/Layout"
import QuizJsonData from "../data.json"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { incrementScore } from "../store/scoreSlice"
import  IconCorrect  from "../assets/images/icon-correct.svg"
import  IconIncorrect  from "../assets/images/icon-incorrect.svg"
import { useNavigate } from "react-router-dom"


export default function Quizpage() {
  const theme = useSelector((state) => state.theme.value)
  const dispatch = useDispatch()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false)
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false)
  const navigate = useNavigate()

  const quizData = QuizJsonData.quizzes.find(quiz => quiz.title === theme)
  const question = quizData.questions[currentQuestionIndex]

  const handleClickAnswer = (option) => {
    setSelectedAnswer(option)
    setShowAnswer(false)
  }

  const handleSubmit = () => {
    if(selectedAnswer){
      setShowAnswer(true)
      setHasAttemptedSubmit(false)
      if(selectedAnswer === question.answer ){
        dispatch(incrementScore())
      }
    }else{
      setHasAttemptedSubmit(true)
    }
  }

  const handleNextQuestion  = () => {
    setSelectedAnswer('')
    setShowAnswer(false)
    setCurrentQuestionIndex(currentQuestionIndex + 1)
    if(currentQuestionIndex + 1 === quizData.questions.length){
      navigate("/results")
    }
  }

  const getOptionClass = (option) => {
    if (showAnswer) {
      if (option === question.answer) {
        return "correct-answer";
      } else if (option === selectedAnswer) {
        return "wrong-answer";
      }
    } else {
      return option === selectedAnswer ? "selected-answer" : '';
    }
    return '';
  }


  const renderIconWithBackground = (option) => {
    let icon = null;
    let bgClass = '';
    let txtClass = 'txt'
  
    if (showAnswer) {
      if (option === question.answer) {
        icon = <img src={IconCorrect} alt="Correct icon" />;
        bgClass = 'correct-bg';
       
      } else if (option === selectedAnswer) {
        icon = <img src={IconIncorrect} alt="Incorrect icon" />;
        bgClass = 'incorrect-bg';
      }
    }
  
    return { icon, bgClass, txtClass };
  }

  return (
    <Layout>
      
      <div className="flex flex-col xl:flex-row">
              <div className="xl:w-[45%] xl:mr-[5%] xl:ml-[5%] mb-16">
              <span className="block  dark:text-blue text-gray italic">Question {currentQuestionIndex + 1} of
                {quizData.questions.length}</span>
                <h1
                className="text-4xl dark:text-white mb-4 mt-4">
                {question.question}
                </h1>
                <div className="progress-bar mt-24">
                    <div className="progress" style={{width: `${(currentQuestionIndex + 1) / quizData.questions.length * 100}%`}}></div>
                </div>
              </div>

              <div className="flex flex-col xl:w-[45%]">
                {
                  question.options.map((option, index) => {
                    const optionClass = getOptionClass(option)
                    const { icon, bgClass, txtClass } = renderIconWithBackground(option);
                    return (
                      <button
                        key={index}
                        onClick={() => handleClickAnswer(option)}
                        className={`flex items-center justify-between w-full p-2 bg-white shadow-md rounded-xl multiSelect dark:dark:bg-dark-blue-gray my-2 ${optionClass}`}
                      >
                          <div className="flex items-center ">
                            <div className={`bg-gray dark:bg-white bg-opacity-10 mr-6 rounded-lg iconnic ${bgClass}`}>
                              <span className="font-bold text-gray dark:text-gray uppercase block h-10 w-10 py-1.5">a</span>
                            </div>
                            <span className={`text-dark-gray dark:text-white ${txtClass} font-bold block py-3 `}>{option}</span>
                          </div>
                          {icon}
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
                className='bg-violet p-4 text-lg text-white font-bold rounded-2xl hover:opacity-50 darks:hover:opacity-70 mt-4'>
                    Next Question
              </button>

              )}

              {
                hasAttemptedSubmit && !selectedAnswer && (
                  <p className="text-salmon pt-2 flex items-center justify-center"><img src={IconIncorrect} alt="icon" />
                  Please select an answer
                  </p>
                )
              }

              </div>
            </div>  
          <div>
        </div>
    </Layout>
  )
}
