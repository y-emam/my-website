import ReactCardSlider from "react-card-slider-component";
import quizImg from "../assets/nagwa-quiz-app.png";
import schoolImg from "../assets/school-affairs-home.png";
import youtubeImg from "../assets/youtube-clone.png";
import dataScientistsImg from "../assets/data-scientists-proj.png";
import storeImg from "../assets/storefront-system.jpg";
import faceImg from "../assets/opencv-face-detection.jpeg";
import todoImg from "../assets/todo-app.png";

function Portfolio() {
  const sliderClick = (link) => {
    if (link) {
      window.open(link);
    }
  };
  const slides = [
    {
      image: quizImg,
      title: "Quiz App",
      description: "A Quiz to test your Grammar in English",
      clickEvent: () => {
        sliderClick("https://github.com/YasserEmam25/nagwa-quiz");
      },
    },
    {
      image: schoolImg,
      title: "School System",
      description: "Built a system for School using Django",
      clickEvent: () => {
        sliderClick("https://github.com/YasserEmam25/SchoolAffairs-system");
      },
    },

    {
      image: dataScientistsImg,
      title: "Data Scientists salary in USA",
      description: "Data scientist salary in USA",
      clickEvent: () => {
        sliderClick(
          "https://www.kaggle.com/code/yasseremam/ken-jee-project-data-science-proj"
        );
      },
    },
    {
      image: storeImg,
      title: "Store-System",
      description: "A Backend system for a store",
      clickEvent: () => {
        sliderClick("https://github.com/YasserEmam25/Youtube-clone");
      },
    },
    {
      image: faceImg,
      title: "Face Detection",
      description: "Python project to detect humans' faces",
      clickEvent: () => {
        sliderClick();
      },
    },
    {
      image: youtubeImg,
      title: "YouTube Clone",
      description: "Built a clone of YouTube using React",
      clickEvent: () => {
        sliderClick("https://github.com/YasserEmam25/Youtube-clone");
      },
    },
    {
      image: todoImg,
      title: "ToDo App",
      description: "Todo App made using Flutter and Firebase",
      clickEvent: () => {
        sliderClick("https://github.com/YasserEmam25/todo_app");
      },
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h2>My Projects</h2>
      <div className="card-slider">
        <ReactCardSlider slides={slides} />
      </div>
    </div>
  );
}

export default Portfolio;
