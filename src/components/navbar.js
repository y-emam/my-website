import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <nav className="navbar ">
      <label id="side-icon">
        <input type={"checkbox"} id="check" />
        <FontAwesomeIcon icon={faBars} className="checkbtn" />
        <div className="dropdown-content">
          <p>Home</p>
          <p>Projects</p>
          <p>Contact</p>
          <p>About</p>
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
