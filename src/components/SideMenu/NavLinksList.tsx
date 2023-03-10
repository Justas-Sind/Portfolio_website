import { NavLink } from "react-router-dom";
import { ReactComponent as FaHome } from "../../assets/icons/FaHome.svg";
import { ReactComponent as FaUser } from "../../assets/icons/FaUser.svg";
import { ReactComponent as FaRegListAlt } from "../../assets/icons/FaRegListAlt.svg";
import { ReactComponent as FaHammer } from "../../assets/icons/FaHammer.svg";
import { ReactComponent as FaTelegramPlane } from "../../assets/icons/FaTelegramPlane.svg";

interface Props {
  styles: string;
  handleSideBarClose: Function;
}

function NavLinksList({ styles, handleSideBarClose }: Props) {
  return (
    <ul>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles : undefined)}
          onClick={() => handleSideBarClose()}
        >
          <FaHome />
          home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? styles : undefined)}
          onClick={() => handleSideBarClose()}
        >
          <FaUser />
          about
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/skills"
          className={({ isActive }) => (isActive ? styles : undefined)}
          onClick={() => handleSideBarClose()}
        >
          <FaRegListAlt />
          skills
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/works"
          className={({ isActive }) => (isActive ? styles : undefined)}
          onClick={() => handleSideBarClose()}
        >
          <FaHammer />
          works
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? styles : undefined)}
          onClick={() => handleSideBarClose()}
        >
          <FaTelegramPlane />
          contact
        </NavLink>
      </li>
    </ul>
  );
}

export default NavLinksList;
