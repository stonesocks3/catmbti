import React from "react";
import { useNavigate } from "react-router-dom";
import { ResultData } from "../assets/data/resultdata";

function Result() {
  const navigate = useNavigate();
  return (
    <>
      <header className="container mx-auto bg-sky-500 rounded-xl shadow border p-8 m-10">
        <p className="flex justify-center text-[40pt] text-gray-700 font-bold mb-4 font-mono">
          예비집사 판별기
        </p>
      </header>
      <section className="flex justify-center">
        <div className="text-center">
          <p className=" text-pink-700 font-bold text-[30pt] mt-[20px] font-mono ">
            결과 보기
          </p>
          <img
            className="w-65 h-65 rounded-full mt-10 ml-[120pt] "
            src={ResultData[0].image}
            alt=""
            width="384"
            height="512"
          />

          <p className=" mt-5 text-[20pt] text-gray-700  mb-5 font-mono">
            예비 집사님과 찰떡궁합인 고양이는 {ResultData[0].name}입니다.
          </p>
          <button
            className="h-10 px-6 rounded-lg bg-indigo-600 text-white text-sm font-mono "
            type="button"
            onClick={
              (e) => navigate("/")
            }
          >
            테스트 다시하기
          </button>
        </div>
      </section>
    </>
  );
}
export default Result;
