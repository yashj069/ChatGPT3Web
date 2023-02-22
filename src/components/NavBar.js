import React from "react";
import styles from "../styles";
import { useState } from "react";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={`${styles.padding} flex flex-row justify-between text-white items-center text-[18px]`}
    >
      <h2 className=" font-bold mr-40">GPT-3</h2>
      <div className="sm:flex hidden flex-row flex-1 gap-8 cursor-pointer">
        <a href="#Home">Home</a>
        <a href="#chatGPT">What is ChatGPT?</a>
        <a href="#OpenAI">Open AI</a>
        <a href="#CaseStudies">Case Studies</a>
        <a href="#library">Library</a>
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? "flex" : "hidden"}
        p-6 bg-black-gradient absolute top-20 right-0 mx-4
        my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center cursor-pointer">
            <a href="#Home">Home</a>
            <a href="#chatGPT">What is ChatGPT?</a>
            <a href="#OpenAI">Open AI</a>
            <a href="#CaseStudies">Case Studies</a>
            <a href="#library">Library</a>
          </ul>
        </div>
      </div>

      <div className="flex flex-row justify-between space-x-0 sm:space-x-6">
        <button className="hover:bg-slate-800 min-w-[100px] sm:w-[152px] min-h-[45px] sm:h-[58px] rounded-md font-poppins text-[16px]">
          Sign in
        </button>
        <button className="bg-[#FF4820] min-w-[100px] sm:w-[152px] min-h-[45px] sm:h-[58px] rounded-md font-poppins text-[16px]">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
