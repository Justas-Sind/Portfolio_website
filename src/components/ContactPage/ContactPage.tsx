import styles from "./ContactPage.module.scss";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm/ContactForm";
import mailboxImage from "../../assets/images/undraw_mailbox_re_dvds.svg";

function ContactPage() {
  return (
    <motion.div
      className={styles.contactPage}
      initial={{ translateX: "-100%", opacity: 0 }}
      animate={{ translateX: 0, opacity: 1, transition: { duration: 0.75 } }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
    >
      <div className={styles.contactPageContainer}>
        <div className={styles.pageNameContainer}>
          <h2>get in touch</h2>
        </div>
        <div className={styles.contactContent}>
          <div className={styles.contactSection}>
            <div className={styles.contactInfoContainer}>
              <div>
                <p>Address</p>
                <p>Vilnius, Lithuania</p>
              </div>
              <div>
                <p>Email</p>
                <p>justas.sindar@gmail.com</p>
              </div>
              <div>
                <p>Phone</p>
                <p>+37065259868</p>
              </div>
            </div>
            <ContactForm />
          </div>
          <div className={styles.imageContent}>
            <div className={styles.imgContainer}>
              <img
                src={mailboxImage}
                alt="contact us picture"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactPage;
