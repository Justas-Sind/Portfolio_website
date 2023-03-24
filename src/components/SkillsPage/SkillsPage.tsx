import styles from "./SkillsPage.module.scss";
import { motion } from "framer-motion";
import reactImage from "../../assets/images/undraw_react_re_g3ui.svg";
import PageButton from "../PageButton/PageButton";
import { useNavigate } from "react-router-dom";

function SkillsPage() {
  const navigation = useNavigate();

  function handleOnClick() {
    navigation("/works");
  }
  return (
    <motion.div
      className={styles.skillsPage}
      initial={{ translateX: "-100%", opacity: 0 }}
      animate={{ translateX: 0, opacity: 1, transition: { duration: 0.75 } }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.25 } }}
    >
      <div className={styles.skillsPageContainer}>
        <div className={styles.pageNameContainer}>
          <h2>skills & experience</h2>
        </div>
        <div className={styles.skillsContent}>
          <div className={styles.skillsSection}>
            <div className={styles.textContainer}>
              <p>
                To my mind, the bare minimum for any website, or web application
                is that it must be responsive, pleasant to the eye,
                user-friendly and feel fast.
              </p>
              <p>
                In front-end development I try to equip myself with modern and
                most effective tools and practices needed to achieve such
                results.
              </p>
            </div>
            <div className={styles.techContainer}>
              <p>Some of my skills and tech I use:</p>
              <div className={styles.gridContainer}>
                <div>
                  <p>HTML5</p>
                </div>
                <div>
                  <p>CSS3</p>
                </div>
                <div>
                  <p>JavaScript</p>
                </div>
                <div>
                  <p>React</p>
                </div>
                <div>
                  <p>TypesScript basics</p>
                </div>
                <div>
                  <p>Sass</p>
                </div>
                <div>
                  <p>Tailwind CSS</p>
                </div>
                <div>
                  <p>Git</p>
                </div>
                <div>
                  <p>Responsive design</p>
                </div>
                <div>
                  <p>UI/UX</p>
                </div>
              </div>
            </div>
            <PageButton handleOnClick={handleOnClick}>My work</PageButton>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.imgContainer}>
              <img src={reactImage} alt="react picture" draggable="false" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SkillsPage;
