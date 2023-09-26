import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudRain,
  faSun,
  faCloud,
  faCloudSun,
  faCloudShowersHeavy,
  faSatelliteDish
} from "@fortawesome/free-solid-svg-icons";

function CancunWeatherCard() {
  const url =
    "https://api.datos.gob.mx/v1/condiciones-atmosfericas?pageSize=5000";

  const [cancunData, setCancunData] = useState([]);
  const [error, setError] = useState(null);

  const weatherIcons = {
    soleado: {
      icon: faSun,
      animation: "fa-spin",
    },
    "mayormente soleado": {
      icon: faSun,
      animation: "fa-spin",
    },
    nublado: {
      icon: faCloud,
      animation: "fa-bounce",
    },
    "mayormente nublado": {
      icon: faCloud,
      animation: "fa-bounce",
    },
    "parcialmente nublado": {
      icon: faCloudSun,
      animation: "fa-beat",
    },
    tormentas: {
      icon: faCloudShowersHeavy,
      animation: "fa-beat",
    },
    "tormentas dispersas": {
      icon: faCloudRain,
      animation: "fa-beat",
    },
    aguaceros: {
      icon: faCloudRain,
      animation: "fa-beat",
    },
    "tormentas aisladas": {
      icon: faCloudRain,
      animation: "fa-beat",
    },
  };


  const consultarDatos = () => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((condicionAtm) => {
        const cancunData = condicionAtm.results.filter(
          (ciudad) => ciudad.name === "Cancún"
        );
        setCancunData(cancunData);
      })
      .catch((error) => {
        setError("Error recuperando información");
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    consultarDatos();
  }, []);

  return (
    <div className="border m-4 h-60 bg-white rounded-md">
      {error ? (
        <div className="flex flex-col justify-center items-center p-4 font-semibold text-center">
          <p className="mb-[60px] mt-2">{error}</p>
          <FontAwesomeIcon
            icon={faSatelliteDish}
            className="text-6xl"
            fade
          />
        </div>
      ) : (
        cancunData.map((ciudad, index) => (
          <div key={index}>
            <h2>Cancún</h2>
            <p>Temperatura: {ciudad.temperature} °C</p>
            <p>Cielo: {ciudad.skydescriptionlong}</p>
            {weatherIcons[ciudad.skydescriptionlong.toLowerCase()] && (
              <FontAwesomeIcon
                icon={weatherIcons[ciudad.skydescriptionlong.toLowerCase()]}
                className={`weather-icon ${weatherIcons[ciudad.skydescriptionlong.toLowerCase()]
                  }`}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default CancunWeatherCard;
