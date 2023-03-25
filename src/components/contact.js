import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import email from "../assets/svg/email.svg";
import facebook from "../assets/svg/facebook.svg";
import github from "../assets/svg/github.svg";
import linkedin from "../assets/svg/linkedin.svg";
import phone from "../assets/svg/phone.svg";
import telegram from "../assets/svg/telegram.svg";
import whatsapp from "../assets/svg/whatsapp.svg";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-info" id="contact-info">
        <h2>Social Links</h2>
        <a href="https://github.com/YasserEmam25">
          <img src={github} alt="Github Logo" id="github-logo" />
        </a>
        <a href="https://www.linkedin.com/in/yasser-emam-5b9b61207/">
          <img src={linkedin} alt="LinkedIn Logo" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100005674454946">
          <img src={facebook} alt="Facebook Logo" />
        </a>
        <h2>Email</h2>
        <img src={email} alt="Email Logo" />
        <h4>yasseremam2002@gamil.com</h4>
        <h2>Phone Number</h2>
        <img src={phone} alt="Phone Logo" />
        <img src={telegram} alt="Telegram Logo" />
        <img src={whatsapp} alt="Whatsapp Logo" />
        <h4>{"(+20) 1091720988"}</h4>
      </div>
      <h1 id="contact-title-bg">Contact</h1>
    </div>
  );
}

export default Contact;
