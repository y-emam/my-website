import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

function ArrowUp() {
  return (
    <div className="arrow-up">
      <a href="#home-header">
        <FontAwesomeIcon icon={faArrowCircleUp} className="arrow-up-icon" />
      </a>
    </div>
  );
}

export default ArrowUp;
