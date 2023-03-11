import styles from "./WorksPage.module.scss";
import { motion } from "framer-motion";
import developmentImage from "../../assets/images/undraw_building_websites_i78t.svg";
import PageButton from "../PageButton/PageButton";
import { useNavigate } from "react-router-dom";

function WorksPage() {
  const navigation = useNavigate();

  function handleOnClick() {
    navigation("/contact");
  }
  return (
    <motion.div
      className={styles.worksPage}
      initial={{ translateX: "-100%", opacity: 0 }}
      animate={{ translateX: 0, opacity: 1, transition: { duration: 0.75 } }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
    >
      <div className={styles.worksPageContainer}>
        <div className={styles.pageNameContainer}>
          <h2>works</h2>
        </div>
        <div className={styles.worksContent}>
          <div className={styles.worksGridContainer}>
            <h3>Work in progress...</h3>
            <PageButton handleOnClick={handleOnClick}>Contact</PageButton>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.imgContainer}>
              <img src={developmentImage} alt="development picture" draggable="false" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default WorksPage;
