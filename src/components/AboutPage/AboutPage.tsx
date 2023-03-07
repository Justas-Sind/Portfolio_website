import styles from "./AboutPage.module.scss";
import { motion } from "framer-motion";

function AboutPage() {
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
          <div className={styles.aboutMeText}>
            <p>
              Hi there! My name is Justas and I am a front-end developer based
              in Vilnius. I am passionate about creating beautiful,
              user-friendly websites that provide an excellent user experience.
            </p>
            <p>
              Apart from coding, I am also interested in design and user
              experience. I believe that a good website not only looks great,
              but also functions smoothly and efficiently.
            </p>
            <p>
              My main focus right now is on developing web applications using
              React. I am always eager to learn new technologies and stay
              up-to-date with the latest trends in the web development industry.
            </p>
          </div>
          <div className={styles.profilePic}>
            <img src="/profile_pic.webp" alt="profile picture" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutPage;
