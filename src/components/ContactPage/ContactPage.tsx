import styles from "./ContactPage.module.scss";
import { motion } from "framer-motion";
import ContactForm from "../ContactForm/ContactForm";

function ContactPage() {
  return (
    <motion.div
      className={styles.contactPage}
      initial={{ translateX: "-100%", opacity: 0 }}
      animate={{ translateX: 0, opacity: 1, transition: { duration: 0.75 } }}
      exit={{ translateX: "110%", opacity: 0, transition: { duration: 0.25 } }}
    >
      <div className={styles.contactPageContainer}>
        <div className={styles.pageNameContainer}>
          <h2>get in touch</h2>
        </div>
        <div className={styles.contactContent}>
          <ContactForm />
        </div>
      </div>
    </motion.div>
  );
}

export default ContactPage;
