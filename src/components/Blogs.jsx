import React from "react";
import blog01 from "../assets/blog01.png";
import blog02 from "../assets/blog02.png";
import blog03 from "../assets/blog03.png";
import blog04 from "../assets/blog04.png";
import blog05 from "../assets/blog05.png";

const Blogs = () => (
  <section className="flex flex-row flex-wrap gap-12 h-[700px] flex-1 text-white justify-between w-full">
    <div className="flex flex-col flex-1">
      <img src={blog01} alt="blog01" className="" />
      <div className="flex flex-col h-[407px] bg-[#042C54] px-4 py-4 justify-between">
        <div className="flex flex-col">
          <p>Sep 26,2021</p>
          <h2 className="text-[25px] font-semibold leading-[30px] mt-4">
            GPT-3 and Open AI is the future. Let us exlore how it is?
          </h2>
        </div>
        <p className="text-[12px]">Read full Article</p>
      </div>
    </div>
    <div className="flex flex-col w-1/3 flex-wrap">
      <div className="flex flex-wrap">
        <img src={blog02} alt="blog02" className="" />
        <div className="flex flex-col h-[193px] bg-[#042C54] px-4 py-4 justify-between">
          <div className="flex flex-col">
            <p>Sep 26,2021</p>
            <h2 className="text-[25px] font-semibold leading-[30px] mt-4">
              GPT-3 and Open AI is the future. Let us exlore how it is?
            </h2>
          </div>
          <p className="text-[12px]">Read full Article</p>
        </div>
      </div>
      <div>
        <img src={blog04} alt="blog04" className="" />
        <div className="flex flex-col h-[193px] bg-[#042C54] px-4 py-4 justify-between">
          <div className="flex flex-col">
            <p>Sep 26,2021</p>
            <h2 className="text-[25px] font-semibold leading-[30px] mt-4">
              GPT-3 and Open AI is the future. Let us exlore how it is?
            </h2>
          </div>
          <p className="text-[12px]">Read full Article</p>
        </div>
      </div>
    </div>
    <div className="flex flex-col w-1/3">
      <img src={blog03} alt="blog03" className="" />
      <div className="flex flex-col h-[193px] bg-[#042C54] px-4 py-4 justify-between">
        <div className="flex flex-col">
          <p>Sep 26,2021</p>
          <h2 className="text-[25px] font-semibold leading-[30px] mt-4">
            GPT-3 and Open AI is the future. Let us exlore how it is?
          </h2>
        </div>
        <p className="text-[12px]">Read full Article</p>
      </div>
    </div>
  </section>
);

export default Blogs;
