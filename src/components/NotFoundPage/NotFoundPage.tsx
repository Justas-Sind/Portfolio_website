import styles from "./NotFoundPage.module.scss";
import { motion } from "framer-motion";
import notFoundImage from "../../assets/images/undraw_page_not_found_re_e9o6.svg";

function NotFoundPage() {
  return (
    <motion.div
      className={styles.notFoundPage}
      initial={{ translateX: "-100%", opacity: 0 }}
      animate={{ translateX: 0, opacity: 1, transition: { duration: 0.75 } }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.25 } }}
    >
      <div className={styles.notFoundPageContainer}>
        <div className={styles.notFoundPageContent}>
          <div className={styles.imgContainer}>
            <img
              src={notFoundImage}
              alt="404 page not found picture"
              draggable="false"
            />
          </div>
          <h2>Page not found</h2>
        </div>
      </div>
    </motion.div>
  );
}

export default NotFoundPage;
