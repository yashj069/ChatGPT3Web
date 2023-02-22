import React from "react";
import styles from "../styles";
import possiblity from "../assets/possibility.png";

const Deals = () => (
  <section
    id="OpenAI"
    className={`w-full flex md:flex-row flex-col ${styles.flexCenter} ${styles.paddingX} ${styles.paddingY}`}
  >
    <img src={possiblity} alt="possibiliy" className="w-1/2 mb-10" />

    <div className={`${styles.flexStart} flex-col ${styles.paddingX} `}>
      <p className={`${styles.paragraph} text-[#71E5FF]`}>
        Request Early Access to Get Started
      </p>
      <h2 className="text-gradient text-[34px] leading-[45px] font-semibold mt-3">
        The possibilities are <br className="sm:block hidden" /> beyond your
        imagination
      </h2>
      <p className={`${styles.paragraph} text-[#81AFDD] mt-6`}>
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment. Party we years to order allow asked of.
      </p>
      <p className={`${styles.paragraph} text-[#FF8A71] mt-8`}>
        Request Early Access to Get Started
      </p>
    </div>
  </section>
);

export default Deals;
