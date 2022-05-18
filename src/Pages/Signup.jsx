import { useState } from "react";
import React from "react";
import "./Signup.css";

export default function App() {
  let [count, setCount] = useState(0);
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const user = { username, email, password };
    console.log(user);
  }

  return (
    <div className="bg">
      <div>
        <h1> Login Page </h1>
      </div>

      <div className="boop">
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            placeholder="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Email</label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button>Sign Up!</button>

          <h3>{count}</h3>
          <button onClick={() => setCount((count += 1))}>+</button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}
