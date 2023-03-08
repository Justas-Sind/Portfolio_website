import styles from "./HomePage.module.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import helloImage from "../../assets/images/undraw_hello_re_3evm.svg"

function HomePage() {
  const navigation = useNavigate();

  return (
    <motion.div
      className={styles.homePage}
      initial={{ translateX: "-100%", opacity: 0 }}
      animate={{ translateX: 0, opacity: 1, transition: { duration: 0.5 } }}
      exit={{ translateX: "110%", opacity: 0, transition: { duration: 0.25 } }}
    >
      <div className={styles.homePageContainer}>
        <div className={styles.greetingTxt}>
          <p>Hi, my name is</p>
          <h1>Justas Sindaravičius.</h1>
          <p>
            I am a <span className={styles.mainColor}>front-end</span> developer
            passionate about creating visually appealing and user-friendly web
            applications. Currently, I am focused on working with{" "}
            <span className={styles.mainColor}>React</span>.
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={() => navigation("/about")}>About me</button>
        </div>
        <div className={styles.imgContainer}>
          <img src={helloImage} alt="pic" />
        </div>
        
      </div>
    </motion.div>
  );
}

export default HomePage;
