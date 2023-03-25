import Header from "../components/header";
import Navbar from "../components/navbar";
import Portfolio from "../components/portfolio";
import About from "../components/about";
import "../css/home.css";
import Contact from "../components/contact";
import ArrowUp from "../components/arrow-up";

function HomePage() {
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
