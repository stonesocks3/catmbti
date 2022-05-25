import React from "react";
import { QuestionData } from "../assets/data/Questiondata";




function Question() {
  const [questionNo, setQuestionNo] = React.useState(0);
  const [totalScore,setTotalScore] = React.useState();

  const progressPercentage = (questionNo / QuestionData.length * 100);

  const handleClickButtonA = (e) => {
    if (0 < questionNo < QuestionData.length) setQuestionNo(questionNo + 1);
    else {
      setQuestionNo(12);
    }
  };
  const handleClickButtonB = (e) => {
    if (0 < questionNo < QuestionData.length + 1) setQuestionNo(questionNo - 1);
    else {
      setQuestionNo(1);
    }
  };

  return (
    <section>
      <div>
    {/* ProgressBar */}
        <div className="w-full bg-gray-300  h-3.5 dark:bg-gray-700">
          <div  style={{ width: `${progressPercentage}%`}}
            className={`${
              progressPercentage < 50 ? 'bg-pink-600' : 'bg-sky-500'} h-3.5 rounded-full` }
          ></div>
        </div>

        <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
          <p className="flex justify-center text-3xl text-gray-700 font-bold mb-5">
            {QuestionData[questionNo].title}
          </p>
        </div>
        <article className="flex flex-row justify-center font-mono text-white text-2xl h-[200pt]">
          <button
            className="w-2/5 px-6 rounded-lg bg-indigo-600 mr-5"
            type="button"
            onClick={() => handleClickButtonA()}
          >
            {QuestionData[questionNo].answera}
          </button>
          <button
            className="w-2/5  px-6 rounded-lg bg-indigo-600  ml-5"
            type="button"
            onClick={() => handleClickButtonB()}
          >
            {QuestionData[questionNo].answerb}
          </button>
        </article>
      </div>
    </section>
  );
}
export default Question;
