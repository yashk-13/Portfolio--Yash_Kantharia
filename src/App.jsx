import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import PageOne from "./Components/PageOne";
import About from "./Components/About";
import Contact from "./Components/Contact";
import "./Styles.css";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<PageOne />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

  );
}

export default App;
