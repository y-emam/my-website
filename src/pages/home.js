import Header from "../components/header";
import Navbar from "../components/navbar";
import Portfolio from "../components/portfolio";
import "../css/home.css";

function HomePage() {
  return (
    <div className="home-page">
      <Navbar />
      <Header />
      <Portfolio />
    </div>
  );
}

export default HomePage;
