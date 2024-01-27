import Aos from "aos";
import "aos/dist/aos.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import "./styles/app.scss";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Company from "./pages/Company";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import CustomCursor from "./components/CustomCursor";

function App() {
  useEffect(() => {
    Aos.init({ once: true, offset: 200 });
  }, []);

  return (
    <div className="App">
      <Nav />
      <CustomCursor />

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="company" element={<Company />} />
          <Route path="services" element={<Service />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
