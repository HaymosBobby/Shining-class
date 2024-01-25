import Aos from "aos";
import "aos/dist/aos.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import "./styles/app.scss";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Company from "./pages/Company";
import Services from "./pages/Services";

function App() {
  useEffect(() => {
    Aos.init({ easing: "ease-in-cubic", offset: 200 });
  }, []);

  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="company" element={<Company />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
