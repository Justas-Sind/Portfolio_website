import styles from "./AboutPage.module.scss";
import { motion } from "framer-motion";
import profilePic from "../../assets/images/profile_pic.webp";
import { useNavigate } from "react-router-dom";
import PageButton from "../PageButton/PageButton";

function AboutPage() {
  const navigation = useNavigate();

  function handleOnClick() {
    navigation("/skills");
  }

  return (
    <motion.div
      className={styles.aboutPage}
      initial={{ translateX: "-100%", opacity: 0 }}
      animate={{ translateX: 0, opacity: 1, transition: { duration: 0.75 } }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.25 } }}
    >
      <div className={styles.aboutPageContainer}>
        <div className={styles.pageNameContainer}>
          <h2>about me</h2>
        </div>
        <div className={styles.aboutMeContent}>
          <div className={styles.textSection}>
            <div className={styles.textParagraphs}>
              <p>
                Hello! My name is Justas and I am a passionate{" "}
                <span className={styles.mainColor}>front-end developer</span>{" "}
                with a solid foundation in{" "}
                <span className={styles.mainColor}>HTML</span>,{" "}
                <span className={styles.mainColor}>CSS</span> and{" "}
                <span className={styles.mainColor}>JavaScript</span>. I am{" "}
                <span className={styles.mainColor}>proficient in React</span>{" "}
                and dedicated to mastering responsive, user-friendly design
                principles. I am always eager to learn new technologies and stay
                up-to-date with the latest trends in web development industry.
              </p>
              <p>
                I have completed{" "}
                <span className={styles.mainColor}>
                  560 hours of front-end development course
                </span>{" "}
                in CodeAcademy, which equipped me with the skills and knowledge
                to develop efficient, scalable and robust web applications.
                Moreover, my experience as an{" "}
                <span className={styles.mainColor}>IT project manager</span> has
                given me valuable insights into the business aspect of web
                development.
              </p>
              <p>
                I am excited about the possibilities that front-end development
                offers and I am committed to delivering innovative and creative
                solutions. Thank you for taking the time to visit my website and
                learn more about me.
              </p>
            </div>
            <PageButton handleOnClick={handleOnClick}>My skills</PageButton>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.profileImageContainer}>
              <img src={profilePic} alt="profile picture" draggable="false" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutPage;
