import styles from './SideMenu.module.scss';
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";

function SideMenu() {
  return (
    <div className={styles.sideMenu}>
      <div className={styles.sideMenuContainer}>
        <div className={styles.logoContainer}>
          <img src="../../../public/logo_circle.webp" alt="logo" />
        </div>
        <div className={styles.navLinksContainer}>

        </div>
        <div className={styles.socialIconsContainer}>
          <BsGithub />
          <BsLinkedin />
          <BsFacebook />
        </div>
      </div>
    </div>
  );
}

export default SideMenu;