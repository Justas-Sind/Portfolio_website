import styles from "./SideMenu.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useMountTransition from "../../hooks/useMountTransition";
import NavLinksList from "./NavLinksList";
import logo from "../../assets/images/logo_bright.webp";
import { ReactComponent as BsLinkedin } from "../../assets/icons/BsLinkedin.svg";
import { ReactComponent as BsGithub } from "../../assets/icons/BsGithub.svg";
import { ReactComponent as BsFacebook } from "../../assets/icons/BsFacebook.svg";

function SideMenu() {
  const [sideBarMount, setSideBarMount] = useState(false);
  const hasTransitionedIn = useMountTransition(sideBarMount, 500);

  const navigation = useNavigate();

  function handleSideBarClose() {
    setSideBarMount(false);
  }

  return (
    <div className={styles.sideMenu}>
      <div className={styles.sideMenuContainer}>
        <div className={styles.logoContainer}>
          <img
            src={logo}
            alt="logo"
            onClick={() => navigation("/")}
          />
        </div>
        <div className={styles.navLinksContainer}>
          <NavLinksList
            styles={styles.activeNavLink}
            handleSideBarClose={handleSideBarClose}
          />
        </div>
        <div className={styles.socialIconsContainer}>
          <ul>
            <li>
              <a href="https://github.com/Justas-Sind" target="_blank">
                <BsGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/justas-sindaravicius-b9208512a/"
                target="_blank"
              >
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100008356927017"
                target="_blank"
              >
                <BsFacebook />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.hamburgerMenuContainer}>
          <label className={styles.hamburgerMenu}>
            <input
              type="checkbox"
              checked={sideBarMount}
              onChange={() => setSideBarMount(!sideBarMount)}
            />
          </label>
          {hasTransitionedIn || sideBarMount ? (
            <div
              className={`${styles.sideBarOverlay} ${
                hasTransitionedIn && styles.in
              } ${sideBarMount && styles.visible}`}
              onClick={() => handleSideBarClose()}
            ></div>
          ) : null}
          {hasTransitionedIn || sideBarMount ? (
            <aside
              className={`${styles.sideBar} ${hasTransitionedIn && styles.in} ${
                sideBarMount && styles.visible
              }`}
            >
              <nav className={styles.sideBarLinkContainer}>
                <NavLinksList
                  styles={styles.activeNavLink}
                  handleSideBarClose={handleSideBarClose}
                />
              </nav>
              <div className={styles.sideBarSocialIconsContainer}>
                <ul>
                  <li>
                    <a href="https://github.com/Justas-Sind" target="_blank">
                      <BsGithub />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/justas-sindaravicius-b9208512a/"
                      target="_blank"
                    >
                      <BsLinkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=100008356927017"
                      target="_blank"
                    >
                      <BsFacebook />
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
