import styles from "./HomePage.module.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import helloImage from "../../assets/images/undraw_hello_re_3evm.svg";
import PageButton from "../PageButton/PageButton";

function HomePage() {
  const navigation = useNavigate();

  function handleOnClick() {
    navigation("/about");
  }

  return (
    <motion.div
      className={styles.homePage}
      initial={{ translateX: "-100%", opacity: 0 }}
      animate={{ translateX: 0, opacity: 1, transition: { duration: 0.5 } }}
      exit={{ translateX: "110%", opacity: 0, transition: { duration: 0.25 } }}
    >
      <div className={styles.homePageContainer}>
        <div className={styles.textContent}>
          <div className={styles.mainContent}>
            <p>Hi, my name is</p>
            <h1>Justas Sindaravičius.</h1>
            <p>
              I am a <span className={styles.mainColor}>front-end</span>{" "}
              developer passionate about creating visually appealing and
              user-friendly web applications. Currently, I am focused on working
              with <span className={styles.mainColor}>React</span>.
            </p>
          </div>
          <PageButton handleOnClick={handleOnClick}>About me</PageButton>
        </div>
        <div className={styles.imgContainer}>
          <img src={helloImage} alt="greeting picture" />
        </div>
      </div>
    </motion.div>
  );
}

export default HomePage;
