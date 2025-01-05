import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosMoon } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";
import { HiOutlineBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [darkTheme, setDarkTheme] = useState(
    localStorage.getItem("voting-app-theme")
  );

  const closeNavMenu = () => {
    if (window.innerWidth < 600) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  };

  const changethemeHandler = () => {
    if (localStorage.getitem("voting-app-theme") === "dark") {
      localStorage.setItem("voting-app-theme", "");
    } else {
      localStorage.setItem("voting-app-theme", "dark");
    }
    setDarkTheme(localStorage.getItem("voting-app-theme"));
  };

  useEffect(() => {
    document.body.className = localStorage.getItem("voting-app-theme");
  }, [darkTheme]);

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo">
          VOTING APP
        </Link>
        <div>
          {showNav && (
            <menu>
              <NavLink to="/elections" onClick={closeNavMenu}>
                Elections
              </NavLink>
              <NavLink to="/results" onClick={closeNavMenu}>
                Results
              </NavLink>
              <NavLink to="/logout" onClick={closeNavMenu}>
                Logout
              </NavLink>
            </menu>
          )}
          <button className="theme__toggle-btn" onClick={changethemeHandler}>
            <IoIosMoon />
          </button>
          <button
            className="nav__toggle-btn"
            onClick={() => setShowNav(!showNav)}
          >
            {showNav ? <AiOutlineClose /> : <HiOutlineBars3 />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
