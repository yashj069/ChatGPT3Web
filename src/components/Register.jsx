import React from "react";
import styles from "../styles";

const Register = () => (
  <div
    className={`${styles.paddingX} flex items-center ${styles.marginY} h-[172.65px] w-full bg-pinkish-gradient rounded-[10px] text-black`}
  >
    <div className=" flex flex-col sm:flex-row items-center w-full justify-between">
      <div className="flex flex-col items-start ">
        <p className="text-[12px] leading-[30px]">
          Request Early Access to Get Started
        </p>
        <h2 className="text-[24px] leading-[45px] font-semibold text-center">
          Register today & start exploring the endless possiblities.
        </h2>
      </div>
      <div className="">
        <button className="rounded-[40px] min-w-[150px] sm:w-[189px] min-h-[40px] sm:h-[59px] bg-black text-white text-[18px]">
          Get Started
        </button>
      </div>
    </div>
  </div>
);

export default Register;
