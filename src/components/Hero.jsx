import React from "react";
import styles from "../styles";
import ai from "../assets/ai.png";
import people from "../assets/people.png";

const Hero = () => (
  <section
    id="Home"
    className={`${styles.paddingX} flex flex-col md:flex-row justify-between ${styles.marginX} w-full`}
  >
    <div className="flex flex-col text-white items-start py-10 md:py-20">
      <h1 className="text-gradient font-semibold text-[50px] md:text-[62px] leading-[72px]">
        Let’s Build Something amazing with GPT-3 OpenAI
      </h1>
      <p className={`${styles.paragraph} text-[16px] md:text-[20px] mt-10`}>
        Yet bed any for travelling assistance indulgence unpleasing.
        <br className="sm:block hidden" /> Not thoughts all exercise blessing.
        Indulgence way <br className="sm:block hidden" /> everything joy
        alteration boisterous the attachment. Party{" "}
        <br className="sm:block hidden" /> we years to order allow asked of.
      </p>
      <form className="flex flex-row mt-10">
        <label>
          <input
            className="bg-[#052D56] w-[300px] md:w-[456px] h-[73px] px-10 rounded-l-md"
            placeholder="Your Email Address"
          ></input>
        </label>
        <button className="bg-[#FF4820] w-[174px] h-[73px] rounded-r-md text-[16px]">
          Get Started
        </button>
      </form>
      <div className="flex flex-row mt-6 justify-between">
        <img src={people} className="object-contain" />
        <h2 className="py-2 px-8 text-[12px]">
          1,600 people requested access a visit in last 24 hours
        </h2>
      </div>
    </div>
    <div className="flex justify-end items-center">
      <img src={ai} alt="ai" className="w-[800px] md:w-[1500px]" />
    </div>
  </section>
);

export default Hero;
