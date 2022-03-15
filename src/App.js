import React from "react";
import kazbegi from "./img/kazbegi.jpeg";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div
      className="bg-top"
      style={{ backgroundImage: "url(" + kazbegi + ")", height: "100vh" }}
    >
      <NavBar />
    </div>
  );
}

export default App;
