//! may need to have one main component and change content with props? or re-render each component below the nav, in the same location?

import React from "react";
import kazbegi from "./img/kazbegi.jpeg";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div
      className="bg-top opacity-80"
      style={{ backgroundImage: `url(${kazbegi})`, height: "100vh" }}
    >
      <NavBar />
    </div>
  );
}

export default App;
