import React from "react";
import NavBar from "../components/nav-bar";
import CondicionAtmosferica from "../components/Api";

const WeatherChannel = () => {
  return (
    <>
      <div className='bg-gradient-to-r from-purple-400 via-cyan-500 to-blue-500 h-screen w-screen flex flex-col justify-center items-center'>
        <div className='flex justify-between'>
          <div className='p-[128px]'>
            <NavBar />
          </div>
          <div>
            <div className='p-[16px]'>
              <CondicionAtmosferica />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherChannel;
