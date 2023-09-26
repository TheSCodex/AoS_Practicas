import React from 'react'
import NavBar from '../components/nav-bar';
import CancunWeatherCard from '../components/cancunWeather';

function DashPage() {
  return (
    <>
      <div className='flex'>
        <div>
          <NavBar />
        </div>
        <div className="bg-slate-300 h-screen overflow-hidden w-screen  grid grid-cols-4">
          <CancunWeatherCard />
        </div>
      </div>
    </>
  )
}

export default DashPage;