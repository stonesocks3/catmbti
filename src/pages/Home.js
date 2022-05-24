import React from "react";
import photo338 from "./338.JPG";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/question");
  };
  return (
    <>
      <header class="container mx-auto bg-sky-500 rounded-xl shadow border p-8 m-10">
        <p class="flex justify-center text-[40pt] text-gray-700 font-bold mb-4 font-mono">
          예비집사 판별기
        </p>
      </header>
      <section class="flex justify-center">
        <div>
          <p class=" text-pink-700 font-bold text-[30pt] mt-[40px] font-mono ">
            나에게 맞는 주인님은??
          </p>
          <img
            class="w-100 h-100 rounded-full mt-2.5 align-center"
            src={photo338}
            alt=""
            width="384"
            height="512"
          />

          <p class=" mt-5 text-[20pt] text-gray-700 font-bold mb-5 font-mono">
            MBTI를 기반으로 하는 나랑 잘맞는 고양이 찾기
          </p>
          <button
            class="h-10 px-6 rounded-lg bg-indigo-600 text-white text-sm font-mono"
            type="button"
            onClick={handleClickButton}
          >
            테스트시작하기
          </button>
        </div>
      </section>
    </>
  );
};
export default Home;

//<header>
// font-saze: 40pt;
// height:100vh width:100%    ==== h-full  /  h-screen
// display:flex; justify-content:center;
// align-items:center
//
