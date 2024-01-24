import Aos from "aos";
import "aos/dist/aos.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import "./styles/app.scss";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";

function App() {
  useEffect(() => {
    Aos.init({ easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
