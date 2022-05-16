import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Coffeemaker from "./Pages/Coffeemaker";
import Login from "./Pages/Auth/Login";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <nav>
          <ul>
            <li>
              {" "}
              <Link to="/"> Home </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/coffeemaker"> Coffeemaker </Link>{" "}
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffeemaker" element={<Coffeemaker />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
