import styles from "./SkillsPage.module.scss";
import { motion } from "framer-motion";

function SkillsPage() {
  return (
    <motion.div
      className={styles.skillsPage}
      initial={{ translateX: "-100%", opacity: 0 }}
      animate={{ translateX: 0, opacity: 1, transition: { duration: 0.75 } }}
      exit={{ translateX: "110%", opacity: 0, transition: { duration: 0.25 } }}
    >
      <div className={styles.skillsPageContainer}>
        <div className={styles.pageNameContainer}>
          <h2>skills & experience</h2>
        </div>
        <div className={styles.skillsPageContent}>
          <div className={styles.skillsSection}></div>
        </div>
      </div>
    </motion.div>
  );
}

export default SkillsPage;
