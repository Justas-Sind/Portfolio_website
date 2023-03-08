import styles from "./AboutPage.module.scss";
import { motion } from "framer-motion";
import profilePic from "../../assets/images/profile_pic.webp";
import { useNavigate } from "react-router-dom";

function AboutPage() {
  const navigation = useNavigate();

  return (
    <motion.div
      className={styles.aboutPage}
      initial={{ translateX: "-100%", opacity: 0 }}
      animate={{ translateX: 0, opacity: 1, transition: { duration: 0.75 } }}
      exit={{ translateX: "110%", opacity: 0, transition: { duration: 0.25 } }}
    >
      <div className={styles.aboutPageContainer}>
        <div className={styles.pageNameContainer}>
          <h2>about me</h2>
        </div>
        <div className={styles.aboutMeContent}>
          <div className={styles.textContent}>
            <div className={styles.textParagraphs}>
              <p>
                Hi there! My name is{" "}
                <span className={styles.mainColor}>Justas</span> and I am a
                front-end developer based in{" "}
                <span className={styles.mainColor}>Vilnius</span>. I am
                passionate about creating beautiful, user-friendly websites.
              </p>
              <p>
                Apart from coding, I am also interested in{" "}
                <span className={styles.mainColor}>design</span> and user
                experience. I believe that a good website not only looks great,
                but also functions smoothly and efficiently.
              </p>
              <p>
                My main focus right now is on developing web applications using{" "}
                <span className={styles.mainColor}>React</span>. I am always
                eager to learn new technologies and stay up-to-date with the
                latest trends in the{" "}
                <span className={styles.mainColor}>web development</span>{" "}
                industry.
              </p>
            </div>
            <div className={styles.buttonContainer}>
              <button onClick={() => navigation("/skills")}>My skills</button>
            </div>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.profileImageContainer}>
              <img src={profilePic} alt="profile picture" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutPage;
