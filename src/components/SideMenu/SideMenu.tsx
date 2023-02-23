import styles from "./SideMenu.module.scss";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import {
  FaHome,
  FaUser,
  FaRegListAlt,
  FaHammer,
  FaTelegramPlane,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function SideMenu() {
  return (
    <div className={styles.sideMenu}>
      <div className={styles.sideMenuContainer}>
        <div className={styles.logoContainer}>
          <img src="/logo_bright.webp" alt="logo" />
        </div>
        <div className={styles.navLinksContainer}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.activeNavLink : undefined
                }
              >
                <FaHome />
                home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? styles.activeNavLink : undefined
                }
              >
                <FaUser />
                about
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  isActive ? styles.activeNavLink : undefined
                }
              >
                <FaRegListAlt />
                resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/works"
                className={({ isActive }) =>
                  isActive ? styles.activeNavLink : undefined
                }
              >
                <FaHammer />
                works
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? styles.activeNavLink : undefined
                }
              >
                <FaTelegramPlane />
                contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.socialIconsContainer}>
          <BsGithub />
          <BsLinkedin />
          <BsFacebook />
        </div>
        <div className={styles.hamburgerMenuContainer}>
          <label className={styles.hamburgerMenu}>
            <input type="checkbox" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
