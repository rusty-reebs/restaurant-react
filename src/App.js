// * Next-Level Web Solutions
// * Next-Level Web Works
// *
//! may need to have one main component and change content with props? or re-render each component below the nav, in the same location?

import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import kazbegi from "./img/kazbegi.jpeg";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div
      className="bg-top"
      style={{
        backgroundImage: `url(${kazbegi})`,
        height: "100vh",
        // opacity: "0.8",
      }}
    >
      <NavBar />
    </div>
  );
}

export default App;
