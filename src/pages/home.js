import Header from "../components/header";
import Navbar from "../components/navbar";
import Portfolio from "../components/portfolio";
import About from "../components/about";
import "../css/home.css";

function HomePage() {
  return (
    <div className="home-page">
      <Navbar />
      <Header />
      <About />
      <Portfolio />
    </div>
  );
}

export default HomePage;
