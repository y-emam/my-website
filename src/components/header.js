import PrimaryButton from "./PrimaryButton";
import TypewriterComponent from "typewriter-effect";

function Header() {
  return (
    <header className="home-header" id="home-header">
      <div className="info">
        <h1>
          Hi, I'm
          <br />
          <div id="type-writer">
            <TypewriterComponent
              options={{
                strings: ["Yasser", "Developer", "Freelancer"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </h1>
        <a href="#contact-info">
          <PrimaryButton title={"CONTACT ME"} />
        </a>
      </div>
      <img
        className="img-me"
        src={require("../assets/me6.jpg")}
        alt="Yasser Emam"
      />
    </header>
  );
}

export default Header;
