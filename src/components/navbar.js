import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Navbar() {
  const [isSideBarActive, setIsSideBarActive] = useState(false);

  const sideBarClick = () => {
    const sideBar = document.getElementById("side-icon");

    if (isSideBarActive) {
      sideBar.classList.remove("active");
      setIsSideBarActive(false);
      return;
    } else {
      sideBar.classList.add("active");
      setIsSideBarActive(true);
      return;
    }
  };

  return (
    <nav className="navbar ">
      <label id="side-icon">
        <input type={"checkbox"} id="check" />
        <FontAwesomeIcon
          icon={faBars}
          className="checkbtn"
          onClick={sideBarClick}
        />
        <div className="dropdown-content">
          <a href="#home-header">
            <p>Home</p>
          </a>
          <a href="#portfolio">
            <p>Portfolio</p>
          </a>
          <a href="#contact-info">
            <p>Contact</p>
          </a>
          <a href="#about">
            <p>About</p>
          </a>
        </div>
      </label>
      <a href="#home-header" className="navbar-name">
        Y.Emam
      </a>
      <a href="#home-header" className="navbar-item " id="navbar-item-home">
        Home
      </a>
      <a href="#about" className="navbar-item">
        About
      </a>
      <a href="#portfolio" className="navbar-item">
        Projects
      </a>
      <a href="#contact-info" className="navbar-item">
        Contact
      </a>
    </nav>
  );
}

export default Navbar;
