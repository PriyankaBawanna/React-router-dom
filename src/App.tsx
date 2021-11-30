import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Outlet, Link, useLocation } from "react-router-dom";
import Header from "./Header";
function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();
  console.log("UseLocation in App", location);
  return (
    <main style={{ padding: "1rem 0" }}>
      <Header />
      <h2> home </h2>
    </main>
  );
}

export default App;
