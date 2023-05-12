import React, { useRef, useEffect, useState } from "react";
import "./index.css";
import logo from "./logo.svg";
import { links } from "./data";
const Navbar = () => {
  const [showSection, setShowSection] = useState(false);
  const showContainer = useRef(null);
  useEffect(() => {
    if (showSection) {
      showContainer.current.style.display = "block";
    } else {
      showContainer.current.style.display = "none";
    }
  }, [showSection]);
  return (
    <div className="navbar-wrapper">
      <nav>
        <div className="nav-center">
          <div
            className="nav-header"
            onClick={() => {
              setShowSection(!showSection);
            }}
          >
            <img src={logo} alt="logo" />
          </div>
          <div className="links-container" ref={showContainer}>
            <ul className="links">
              {links.map((link) => {
                const { id, text } = link;
                return (
                  <li key={id}>
                    <p>{text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
