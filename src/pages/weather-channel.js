import React from "react";
import NavBar from "../components/nav-bar";
import CondicionAtmosferica from "../components/Api";

const WeatherChannel = () => {
  return (
    <>
      <div className='flex'>
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
