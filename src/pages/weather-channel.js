import React from "react";
import NavBar from "../components/nav-bar";
import CondicionAtmosferica from "../components/Api";

const WeatherChannel = () => {
  return (
    <>
      <div className='bg-gradient-to-r overflow-hidden pt-8 from-purple-400 via-cyan-500 to-blue-500 h-screen w-screen flex flex-col justify-start items-center'>
        <div className='flex justify-between'>
          <div className='p-[128px]'>
            <NavBar />
          </div>
          <div className='mr-[300px] mt-0'>
            <div className='relative h-full overflow-y-auto'>
              <CondicionAtmosferica />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherChannel;
