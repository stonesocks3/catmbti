import React from "react";
import { QuestionData } from "../assets/data/Questiondata";

function Question() {
  return (
    <section>
      <div class="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <p class="flex justify-center text-3xl text-gray-700 font-bold mb-5">
          {QuestionData[0].title}
        </p>
        {/*  <p className="text-gray-500 text-lg">
          React and Tailwind CSS in action
        </p> */}
      </div>
      <buttonGroup class="flex flex-row justify-center">
        <button
          class="w-2/5 h-[200pt] px-6 rounded-lg bg-indigo-600 text-white text-2xl font-mono mr-5 "
          type="button"
        >
          {QuestionData[0].answera}
        </button>
        <button
          class="w-2/5 h-[200pt] px-6 rounded-lg bg-indigo-600 text-white text-2xl font-mono ml-5"
          type="button"
        >
          {QuestionData[0].answerb}
        </button>
      </buttonGroup>
    </section>
  );
}
export default Question;
