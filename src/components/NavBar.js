import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navRef = useRef();

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleToggle = () => {
    setIsNavExpanded(!isNavExpanded);
    navRef.current.classList.toggle("response_nav");
  };

  return (
    <header className="header">
      <NavLink to="/" className="logo">
        Protfolio
      </NavLink>
      {isNavExpanded ? (
        <AiOutlineClose
          className="nav-icon close-icon"
          onClick={handleToggle}
        />
      ) : (
        <AiOutlineMenu className="nav-icon menu-icon" onClick={handleToggle} />
      )}
      <nav className="navbar" ref={navRef}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Resume
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
