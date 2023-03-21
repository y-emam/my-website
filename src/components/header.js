function Header() {
  return (
    <header className="home-header">
      <div className="info">
        <h1>Hi, I'm Yasser Emam</h1>
        <p>
          Looking to take your business online? As a web and mobile app
          developer, I can assist you in making that transition smoothly and
          effectively.
        </p>
      </div>
      <img className="img-me" src={require("../assets/me5.jpg")} />
    </header>
  );
}

export default Header;
