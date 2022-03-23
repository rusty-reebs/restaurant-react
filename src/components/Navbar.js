// Navbar.js

//TODO no sandwich for mobile, just use hyperlinks across the top

import React from "react";

const NavBar = (props) => {
  return (
    <div
      className="block font-merienda text-red-500 text-5xl bg-zinc-700 pl-10"
      display={{ textShadow: "1.5px 1.5px 3px black" }}
    >
      🇬🇪 Nina's Georgian Restaurant 🇬🇪
    </div>
  );
};

export default NavBar;
