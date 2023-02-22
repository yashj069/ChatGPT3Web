import React from "react";
import styles from "../styles";
import dropbox from "../assets/dropbox.png";
import google from "../assets/google.png";
import slack from "../assets/slack.png";
import atlassian from "../assets/atlassian.png";
import shopify from "../assets/shopify.png";

const Clients = () => (
  <div
    className={` flex-1 ${styles.paddingX} ${styles.flexCenter} flex-wrap gap-10`}
  >
    <img src={google} />
    <img src={slack} />
    <img src={atlassian} />
    <img src={dropbox} />
    <img src={shopify} />
  </div>
);

export default Clients;
