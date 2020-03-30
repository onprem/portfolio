import React from "react";
import Footer from "../Footer/Footer";
import myImage from "../../assets/webb.png";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.Home}>
        <img src={myImage} alt="me" className={styles.me} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
