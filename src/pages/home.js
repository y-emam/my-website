import Header from "../components/header";
import Navbar from "../components/navbar";
import Portfolio from "../components/portfolio";
import About from "../components/about";
import "../css/home.css";
import Contact from "../components/contact";
import ArrowUp from "../components/arrow-up";
import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver((enteries) => {
      enteries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <div className="home-page">
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <ArrowUp />
    </div>
  );
}

export default HomePage;
