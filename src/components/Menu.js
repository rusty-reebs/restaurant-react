// menu.js

import React from "react";
import kazbegi from "../img/kazbegi.jpeg";
import MeatPic from "../img/mtsvadi.jpeg";
import KhinkhaliPic from "../img/khinkhali.jpeg";
import MushroomsPic from "../img/mushrooms.jpeg";
import KhachapuriPic from "../img/khachapuri.jpeg";
import NavBar from "./Navbar";

const Menu = (props) => {
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
      <div className="grid grid-cols-2">
        <img src={MeatPic} alt="Mtsvadi" />
        <img src={KhinkhaliPic} alt="Khinkhali" />
        <img src={MushroomsPic} alt="Mushrooms" />
        <img src={KhachapuriPic} alt="Khachapuri" />
      </div>
    </div>
  );
};

export default Menu;
