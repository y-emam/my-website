import Header from "../components/header";
import Navbar from "../components/navbar";
import Portfolio from "../components/portfolio";
import About from "../components/about";
import "../css/home.css";
import Contact from "../components/contact";

function HomePage() {
  return (
    <div className="home-page">
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default HomePage;
