import React from "react";
import Clients from "./components/Clients";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import styles from "./styles";
import CTA from "./components/CTA";
import Business from "./components/Business";
import Deals from "./components/Deals";
import Register from "./components/Register";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Clients />
          <CTA />
          <Business />
          <Deals />
          <Register />
          <div className={`${styles.marginY} ${styles.paddingX}`}>
            <h1 className="text-gradient font-bold text-[40px] sm:text-[62px] leading-[60px] sm:leading-[75px]">
              A lot is happening, <br className="sm:block hidden" /> We are
              blogging about it.
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
