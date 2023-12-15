
import MultiSelectElement from "../Components/MultiSelectElement"
import QuizJsonData from "../data.json"
import Layout from "../Components/Layout"

export default function Homepage() {
  return (
   
    <Layout>
      <div className="flex flex-col xl:flex-row">
        <div className="xl:w-[45%] xl:mr-[5%] xl:ml-[5%] mb-16">
          <h1
          className="text-5xl dark:text-white mb-4">Welcome to the <span className="font-bold xl:block xl:w-[500px]">Frontend Quiz!</span></h1>

          <span className="block  dark:text-blue text-gray italic">Pick a subject to get started.</span>
        </div>

        <div className="flex flex-col xl:w-[45%]">
          {
          QuizJsonData.quizzes.map((quiz, index) => {
            return <MultiSelectElement key={index} img={quiz.icon} text={quiz.title}  context={true}/>
          })
          // It misses a dispatch in this component I think
          }
        </div>
      </div>


        
    <div>
      </div>
   
    </Layout>
  )
}
