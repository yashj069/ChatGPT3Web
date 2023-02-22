import React from "react";
import styles from "../styles";

const Footer = () => (
  <section
    id="library"
    className={`${styles.flexCenter} ${styles.paddingY} ${styles.paddingX} w-full flex-col items-center bg-[#031B34] justify-between`}
  >
    <div
      className={`items-center ${styles.paddingX} gap-10 ${styles.paddingY} flex flex-col justify-center `}
    >
      <h1 className="text-center text-gradient font-semibold text-[50px] leading-[60px] sm:text-[62px] sm:leading-[75px]">
        Do you want to step in to the future before others
      </h1>
      <button className="text-white border-[1px] w-[218px] h-[65px] border-gray-100">
        Request Early Access
      </button>
    </div>

    <div
      className={`text-white w-full ${styles.paddingX} ${styles.paddingY}  flex flex-row justify-between flex-wrap`}
    >
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-[40px]">GPT-3</h1>
        <p className="text-[12px] leading-[14px]">
          Crechterwoord K12 182 DK <br className="sm:block hidden" /> Alknjkcb,
          All Rights Reserved
        </p>
      </div>
      <div className={`flex flex-col gap-5 cursor-pointer`}>
        <h4 className="font-semibold text-[16px] mb-4 ">Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="flex flex-col gap-5 cursor-pointer">
        <h4 className="font-semibold text-[16px] mb-4">Company</h4>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="flex flex-col cursor-pointer gap-5">
        <h4 className="font-semibold text-[16px] mb-4">Get in Touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567y</p>
        <p>info@payme.net</p>
      </div>
    </div>
    <p className="text-white">© 2023 GPT-3. All rights reserved.</p>
  </section>
);

export default Footer;
