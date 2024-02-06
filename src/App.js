import Aos from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import "./styles/app.scss";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Company from "./pages/Company";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import Project from "./pages/Project";

function App() {
  useEffect(() => {
    Aos.init({ once: true, offset: 80 });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="company" element={<Company />} />
          <Route path="services" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects/:title/:id" element={<Project />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
