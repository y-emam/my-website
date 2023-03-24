import PrimaryButton from "./PrimaryButton";
import TypewriterComponent from "typewriter-effect";

function Header() {
  return (
    <header className="home-header">
      <div className="info">
        <h1>
          Hi, I'm
          <br />
          <div id="type-writer">
            <TypewriterComponent
              options={{
                strings: ["Yasser", "Developer", "Programmer", "Freelancer"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </h1>
        <PrimaryButton title={"CONTACT ME"} />
      </div>
      <img className="img-me" src={require("../assets/me6.jpg")} />
    </header>
  );
}

export default Header;
