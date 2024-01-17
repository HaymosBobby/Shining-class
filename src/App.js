import Aos from "aos";
import "aos/dist/aos.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import "./styles/app.scss";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
