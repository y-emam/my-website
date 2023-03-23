// import "./App.css";
import HomePage from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/projects";
import HireMe from "./pages/hire-me";
import Contacts from "./pages/contact";
import About from "./pages/about";
import NoPage from "./pages/no-page";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="projects" element={<Projects />} />
          <Route path="hire-me" element={<HireMe />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="about" element={<About />} /> */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
