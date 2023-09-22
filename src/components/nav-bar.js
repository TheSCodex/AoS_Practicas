import React from "react";
import { Link } from "react-router-dom";
import { faHome, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import coco from '../assets/coco.jpg';

function NavBar() {
  return (
    <>
      <div className="p-[128px]">
        <div className="bg-black h-screen w-64 fixed top-0 left-0 flex flex-col justify-between">
          <div className="p-8">
            <div className="w-[180px] h-[180px] rounded-full mb-10 border overflow-hidden">
              <img src={coco} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faHome} style={{color: 'yellow'}} size="lg" />
              <Link to="/">
                <h3 className="text-white ml-6 hover:text-gray-300 text-xl font-bold">Inicio</h3>
              </Link>
            </div>
            <div className="flex items-center mt-4">
              <FontAwesomeIcon icon={faSun} faSun spin style={{ color: 'yellow' }} size="lg"/>
              <Link to="/weather-update">
                <h2 className="text-white ml-6 hover:text-gray-300 text-xl font-bold">Weather</h2>
              </Link>
            </div>
          </div>

          <div className="p-4"></div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
