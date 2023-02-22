import React from "react";
import styles from "../styles";

const CTA = () => (
  <section
    id="chatGPT"
    className={`flex flex-col bg-[#040C18] w-full text-white ${styles.marginY} ${styles.paddingY} ${styles.paddingX}`}
  >
    <div className="h-[3px] w-[38px] bg-pinkish-gradient" />
    <div className="flex flex-col sm:flex-row justify-between ">
      <h2 className="font-semibold text-[24px] leading-[75px]">
        {" "}
        What is GPT-3
      </h2>
      <p
        className={`${styles.paragraph} text-[#81AFDD] flex sm:w-1/2 flex-end items-start`}
      >
        We so opinion friends me message as delight. Whole front do of plate
        heard oh ought. His defective nor convinced residence own. Connection
        has put impossible own apartments boisterous. At jointure ladyship an
        insisted so humanity he. Friendly bachelor entrance to on by.
      </p>
    </div>
    <div className={`flex flex-row justify-between ${styles.paddingY}`}>
      <h2 className="text-gradient font-semibold text-[34px] leading-[45px]">
        The possibilities are beyond <br className="sm:block hidden" /> your
        imagination
      </h2>
      <p className="text-[#FF8A71]">Explore the Library</p>
    </div>

    <div className={`flex flex-row flex-wrap justify-between`}>
      <div className={`flex flex-col items-start space-y-5 sm:space-y-10`}>
        <div className="hidden sm:block h-[3px] w-[38px] bg-pinkish-gradient" />
        <h2 className="font-semibold text-[24px]">Chatbots</h2>
        <p className="text-[#81AFDD] ">
          We so opinion friends me message as <br className="sm:block hidden" />{" "}
          delight. Whole front do of plate heard oh{" "}
          <br className="sm:block hidden" /> ought.{" "}
        </p>
      </div>
      <div className={`flex flex-col items-start space-y-5 sm:space-y-10`}>
        <div className="hidden sm:block h-[3px] w-[38px] bg-pinkish-gradient" />
        <h2 className=" font-semibold text-[24px] mt-6 md:mt-0">
          KnowledgeBase
        </h2>
        <p className="text-[#81AFDD]">
          At jointure ladyship an insisted so humanity{" "}
          <br className="sm:block hidden" /> he. Friendly bachelor entrance to
          on by. As <br className="sm:block hidden" /> put impossible own
          apartments b.{" "}
        </p>
      </div>
      <div className={`flex flex-col items-start space-y-5 sm:space-y-10`}>
        <div className="hidden sm:block h-[3px] w-[38px] bg-pinkish-gradient" />
        <h2 className="font-semibold text-[24px] mt-6 md:mt-0">Education</h2>
        <p className="text-[#81AFDD]">
          At jointure ladyship an insisted so humanity{" "}
          <br className="sm:block hidden" /> he. Friendly bachelor entrance to
          on by. As <br className="sm:block hidden" /> put impossible own
          apartments b.{" "}
        </p>
      </div>
    </div>
  </section>
);

export default CTA;
