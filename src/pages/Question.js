import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { QuestionData } from "../assets/data/Questiondata";

function Question() {
  const [questionNo, setQuestionNo] = React.useState(0);
  const [totalScore, setTotalScore] = React.useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);
  console.log("totalScore", totalScore);

  const navigate = useNavigate();

  const progressPercentage = (questionNo / QuestionData.length) * 100;

  const handleClickButton = (no, type ) => {
    const newScore = totalScore.map((e) =>
      e.id === type ? { id: e.id, score: e.score + no } : e
    );
    setTotalScore(newScore);
    //다음문제로 문제수증가
    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      //결과페이지로 이동
      navigate("/result");
    }

    /* if (type === "EI") {
      //기존 값 + 배점
      const addScore = totalScore[0].score + no;
      //새로운 객체
      const newObject = { id: "EI", score: addScore };
      //splice를 이용하여 새로운 객체를 원래 객체를 대체
      totalScore.splice(0, 1, newObject);
    } else if (type === "SN") {
      const addScore = totalScore[1].score + no;
      const newObject = { id: "SN", score: addScore };
      totalScore.splice(1, 1, newObject);
    } else if (type === "TF") {
      const addScore = totalScore[2].score + no;
      const newObject = { id: "TF", score: addScore };
      totalScore.splice(2, 1, newObject);
    } else {
      const addScore = totalScore[3].score + no;
      const newObject = { id: "JP", score: addScore };
      totalScore.splice(3, 1, newObject);
    } */
  };

  return (
    <section>
      <div>
        {/* ProgressBar */}
        <div className="w-full bg-gray-300  h-3.5 dark:bg-gray-700">
          <div
            style={{ width: `${progressPercentage}%` }}
            className={`${
              progressPercentage < 70 ? "bg-pink-600" : "bg-sky-500"
            } h-3.5 rounded-full`}
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
            onClick={() => handleClickButton(1, QuestionData[questionNo].type)}
          >
            {QuestionData[questionNo].answera}
          </button>
          <button
            className="w-2/5  px-6 rounded-lg bg-indigo-600  ml-5"
            type="button"
            onClick={() => handleClickButton(0, QuestionData[questionNo].type)}
          >
            {QuestionData[questionNo].answerb}
          </button>
        </article>
      </div>
    </section>
  );
}
export default Question;
