import React from "react";
import photo338 from "./338.JPG";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClickButton = (e) => {
    e.preventDefault();
    navigate("/question");
  };
  return (
    <>
      <header className="container mx-auto bg-sky-500 rounded-xl shadow border p-8 m-10">
        <p className="flex justify-center text-[40pt] text-gray-700 font-bold mb-4 font-mono">
          예비집사 판별기
        </p>
      </header>
      <section className="flex justify-center">
        <div className="text-center">
          <p className=" text-pink-700 font-bold text-[30pt] mt-[40px] font-mono ">
            나에게 맞는 주인님은??
          </p>
          <img
            className="w-100 h-100 rounded-full mt-10 ml-[110pt] "
            src={photo338}
            alt=""
            width="384"
            height="512"
          />

          <p className=" mt-5 text-[20pt] text-gray-700  mb-5 font-mono">
            MBTI를 기반으로 하는 나랑 잘맞는 고양이 찾기
          </p>
          <button
            className="h-10 px-6 rounded-lg bg-indigo-600 text-white text-sm font-mono "
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
