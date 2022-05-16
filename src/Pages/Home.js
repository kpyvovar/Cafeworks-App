import { useState } from "react";
import Card from "../components/Card";
import "./Home.css";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="image">
      <div className="names">
        <h1> Cafeworks </h1>
      </div>

      <h2>{count}</h2>
      <button
        type="button"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        {" "}
        +{" "}
      </button>

      <div>
        <Card />
      </div>
    </div>
  );
}

export default Home;
