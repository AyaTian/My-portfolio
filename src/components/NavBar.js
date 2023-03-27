import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState} from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleToggle = () => {
    setIsNavExpanded(!isNavExpanded);
  };
  const closeMobileMenu = () => {
    setIsNavExpanded(false);
  };

  return (
    <header className="header">
      <Link to="/" className="logo" onClick={closeMobileMenu}>
        Protfolio
      </Link>
      <div className="nav-icon" onClick={handleToggle}>
        {isNavExpanded ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <nav
        className={isNavExpanded ? "nav-menu active" : "nav-menu"}
      >
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : undefined)}
          onClick={closeMobileMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) => (isActive ? "active" : undefined)}
          onClick={closeMobileMenu}
        >
          Resume
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "active" : undefined)}
          onClick={closeMobileMenu}
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
