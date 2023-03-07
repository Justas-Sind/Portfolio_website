import styles from "./WorksPage.module.scss";
import { motion } from "framer-motion";

function WorksPage() {
  return (
    <motion.div
      className={styles.worksPage}
      initial={{ translateX: "-100%", opacity: 0 }}
      animate={{ translateX: 0, opacity: 1, transition: { duration: 0.75 } }}
      exit={{ translateX: "110%", opacity: 0, transition: { duration: 0.25 } }}
    >
      <div className={styles.worksPageContainer}>
        <div className={styles.pageNameContainer}>
          <h2>works</h2>
        </div>
        <div className={styles.worksContent}>
          <div className={styles.worksGridContainer}>

          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default WorksPage;
