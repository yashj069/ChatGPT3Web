import React from "react";
import styles from "../styles";

const Business = () => (
  <section
    id="CaseStudies"
    className={`w-full ${styles.paddingX} ${styles.paddingY} text-white flex flex-col-reverse sm:flex-col md:flex-row `}
  >
    <div className="flex flex-col sm:w-1/2 ml-10 gap-10 mt-10 sm:mt-0">
      <h2 className="text-gradient font-semibold text-[34px] leading-[45px]">
        The Future is Now and <br className="sm:block hidden" /> You Just Need
        To Realize <br className="sm:block hidden" /> It. Step into Future Today{" "}
        <br className="sm:block hidden" /> & Make it Happen.
      </h2>
      <p className={`text-[#FF8A71]`}>Request Early Access to Get Started</p>
    </div>

    <div className="flex flex-col justify-between gap-10 sm:w-1/2 ">
      <div className="flex flex-row gap-12">
        <h2 className="text-[18px] w-1/2 max-w-[182px] font-semibold leading-[24px]">
          Improving end distrusts instantly{" "}
        </h2>
        <p className="text-[#81AFDD] text-[14px]">
          From they fine john he give of rich he. They age and draw mrs like.
          Improving end distrusts may instantly was household applauded.
        </p>
      </div>

      <div className="flex flex-row gap-10">
        <h2 className="text-[18px] w-1/2 max-w-[182px] font-semibold leading-[24px]">
          Become the tended active{" "}
        </h2>
        <p className="text-[#81AFDD]  text-[14px]">
          Considered sympathize ten uncommonly occasional assistance sufficient
          not. Letter of on become he tended active enable to.
        </p>
      </div>

      <div className="flex flex-row gap-9">
        <h2 className="text-[18px] w-1/2 max-w-[182px] font-semibold leading-[24px]">
          Message or am nothing
        </h2>
        <p className="text-[#81AFDD] text-[14px]">
          Led ask possible mistress relation elegance eat likewise debating. By
          message or am nothing amongst chiefly address.
        </p>
      </div>

      <div className="flex flex-row gap-14">
        <h2 className="text-[18px] w-1/2 font-semibold leading-[24px]">
          Really boy law county
        </h2>
        <p className="text-[#81AFDD] text-[14px]">
          Really boy law county she unable her sister. Feet you off its like
          like six. Among sex are leave law built now. In built table in an
          rapid blush.
        </p>
      </div>
    </div>
  </section>
);

export default Business;
