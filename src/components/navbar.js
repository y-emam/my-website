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
      <a href="/" className="navbar-name">
        Y.Emam
      </a>
      <a href="/" className="navbar-item active" id="navbar-item-home">
        Home
      </a>
      <a href="/projects" className="navbar-item">
        Projects
      </a>
      {/* <a href="/hire-me" className="navbar-item">
        Hire me
      </a> */}
      <a href="/contacts" className="navbar-item">
        Contact
      </a>
      <a href="/about" className="navbar-item">
        About
      </a>
    </nav>
  );
}

export default Navbar;
