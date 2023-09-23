import React from 'react';
import NavBar from "../components/nav-bar";
import sun from './img/sun.png.png';
import clud from './img/clud.png.png';
import fog from './img/fog.png.png';
import wind from './img/wind.png.png';
import rain from './img/rain.png.png';
import snow from './img/snow.png.png';

function WeatherCard({ imageSrc, title, description }) {
  return (
    <div className='max-w-sm mx-auto mb-4'>
      <div className='box bg-blue-600 p-4 rounded-lg shadow-md text-center transform transition-transform hover:scale-105 hover:shadow-lg animate__animated animate__fadeIn'>
        <img src={imageSrc} alt={title} className='w-32 h-32 mx-auto mb-2' />
        <p className='text-lg mt-2 text-white'>{title}</p>
        <p className='text-sm mt-2 text-gray-300'>
          {description}
        </p>
      </div>
    </div>
  );
}

function DashPage() {
  // Datos de las cartas climáticas
  const weatherData = [
    { imageSrc: sun, title: 'Soleado', description: 'Saca las miches' },
    { imageSrc: clud, title: 'Nublado', description: 'Diiiiiia de Nefliiiiiiiiii' },
    { imageSrc: rain, title: 'Lluvioso', description: 'Corre y mete la ropa' },
    { imageSrc: snow, title: 'Nieve', description: 'Libre soy, libre soy' },
    { imageSrc: wind, title: 'Viento', description: 'Agarra a tu amiga la flaca' },
    { imageSrc: fog, title: 'Niebla', description: 'Abre bien los ojos, mientras conduces' },
  ];

  return (
    <div className='dashboard bg-gradient-to-b from-blue-900 via-blue-600 to-blue-300 min-h-screen p-0 flex flex-col justify-center items-center'>
      <NavBar />
      <h1 className='title text-3xl mb-8 text-center text-white bg-opacity-75 p-4 rounded-lg animate__animated animate__fadeIn'>
        Información Climatológica
      </h1>
      <div className='grid grid-cols-3 gap-14    '>
        {weatherData.map((data, index) => (
          <WeatherCard
            key={index}
            imageSrc={data.imageSrc}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
}

export default DashPage;
