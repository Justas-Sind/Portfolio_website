import styles from "./SideMenu.module.scss";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import {
  FaHome,
  FaUser,
  FaRegListAlt,
  FaHammer,
  FaTelegramPlane,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import useMountTransition from '../../hooks/useMountTransition'

function SideMenu() {
  const [sideBarMount, setSideBarMount] = useState(false);
  const hasTransitionedIn = useMountTransition(sideBarMount, 1000);

  const navigation = useNavigate();

  return (
    <div className={styles.sideMenu}>
      <div className={styles.sideMenuContainer}>
        <div className={styles.logoContainer}>
          <img src="/logo_bright.webp" alt="logo" onClick={() => navigation('/')} />
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
          <label
            className={styles.hamburgerMenu}
            
          >
            <input type="checkbox" onClick={() => setSideBarMount(!sideBarMount)}/>
          </label>
          {(hasTransitionedIn || sideBarMount) ? (
            <aside className={`${styles.sideBar} ${hasTransitionedIn && styles.in} ${sideBarMount && styles.visible}`}>
              <nav>
                <div>Thisssssssssss</div>
                <div>Issssssss</div>
                <div>Thessssssssss</div>
              </nav>
            </aside>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
