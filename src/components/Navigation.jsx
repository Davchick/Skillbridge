import { NavLink } from "react-router-dom";

const Navigation = ({ styles, onClick }) => {
  return (
    <nav className={styles}>
      <ul className="flex flex-col gap-3 text-lg items-center font-semibold text-dark-350 lg:flex-row lg:font-normal lg:text-base lg:text-dark-150 lg:gap-[26px]">
        <li>
          <NavLink className="hover-link" onClick={onClick} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="hover-link" onClick={onClick} to="/courses">
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink className="hover-link" onClick={onClick} to="/about">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink className="hover-link" onClick={onClick} to="/pricing">
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink className="hover-link" onClick={onClick} to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
