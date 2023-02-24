import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaRegListAlt,
  FaHammer,
  FaTelegramPlane,
} from "react-icons/fa";

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
          to="/resume"
          className={({ isActive }) => (isActive ? styles : undefined)}
          onClick={() => handleSideBarClose()}
        >
          <FaRegListAlt />
          resume
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
