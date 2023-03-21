function Navbar() {
  return (
    <header className="navbar ">
      <a href="/" className="navbar-item active">
        Home
      </a>
      <a href="/projects" className="navbar-item">
        Projects
      </a>
      <a href="/hire-me" className="navbar-item">
        Hire me
      </a>
      <a href="/contacts" className="navbar-item">
        Contacts
      </a>
      <a href="/about" className="navbar-item">
        About
      </a>
    </header>
  );
}

export default Navbar;
