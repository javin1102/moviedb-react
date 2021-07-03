/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Nobar</NavLink>

      <ul>
        <NavLink to="/favourite">Favourite</NavLink>
      </ul>
    </nav>
  );
};
export default Navbar;
