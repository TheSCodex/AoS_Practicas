import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="bg-black h-screen w-64 fixed top-0 left-0 flex flex-col justify-between">
        <div className="p-4">
          <Link to='/'>
          <h3 className="text-white hover:text-gray-300">
            Inicio
          </h3>
          </Link>
          <Link to='/weather-update'>
          <h2 className="text-white hover:text-gray-300">
            Weather
          </h2>
          </Link>
        </div>

        <div className="p-4"></div>
      </div>
    </>
  );
}

export default NavBar;
