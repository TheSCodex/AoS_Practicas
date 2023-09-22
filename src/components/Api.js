import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudRain, faSun } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { faCloudShowersHeavy } from "@fortawesome/free-solid-svg-icons";
function CondicionAtmosferica() {
    const url = "https://api.datos.gob.mx/v1/condiciones-atmosfericas";
    const estadosMx = [
        { id: 1, name: "Aguascalientes" },
        { id: 2, name: "Baja California" },
        { id: 3, name: "Baja California Sur" },
        { id: 4, name: "Campeche" },
        { id: 5, name: "Chiapas" },
        { id: 6, name: "Chihuahua" },
        { id: 7, name: "Coahuila" },
        { id: 8, name: "Colima" },
        { id: 9, name: "Ciudad de México" },
        { id: 10, name: "Durango" },
        { id: 11, name: "Guanajuato" },
        { id: 12, name: "Guerrero" },
        { id: 13, name: "Hidalgo" },
        { id: 14, name: "Jalisco" },
        { id: 15, name: "México" },
        { id: 16, name: "Michoacán" },
        { id: 17, name: "Morelos" },
        { id: 18, name: "Nayarit" },
        { id: 19, name: "Nuevo León" },
        { id: 20, name: "Oaxaca" },
        { id: 21, name: "Puebla" },
        { id: 22, name: "Querétaro" },
        { id: 23, name: "Quintana Roo" },
        { id: 24, name: "San Luis Potosí" },
        { id: 25, name: "Sinaloa" },
        { id: 26, name: "Sonora" },
        { id: 27, name: "Tabasco" },
        { id: 28, name: "Tamaulipas" },
        { id: 29, name: "Tlaxcala" },
        { id: 30, name: "Veracruz" },
        { id: 31, name: "Yucatán" },
        { id: 32, name: "Zacatecas" }
    ];


    const [datos, setDatos] = useState([]);
    const [estadoActual, setEstadoActual] = useState("Quintana Roo");

    const consultarDatos = () => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((condicionAtm) => setDatos(condicionAtm.results))
            .catch((error) => console.error("Error fetching data:", error));
    };

    useEffect(() => {
        consultarDatos();
    }, []);


    return (
        <div className="container mx-auto mt-5">
            <select
                className="block w-full bg-white border border-gray-300 rounded-lg p-2"
                onChange={(e) => setEstadoActual(e.target.value)}
            >
                <option value="">Selecciona una opción</option>
                {estadosMx.map((opcion) => (
                    <option key={opcion.id} value={opcion.name}>
                        {opcion.name}
                    </option>
                ))}
            </select>
            <h1 className="text-2xl font-semibold mt-4">Estado del Tiempo</h1>
            {datos.map((ciudad, index) => {
                if (ciudad.state === estadoActual) {
                    return (
                        <div
                            key={index}
                            className="mt-4 border border-gray-300 p-3 rounded-lg"
                        >
                            <p className="text-lg">
                                {ciudad.name} - <i>{ciudad.skydescriptionlong}</i>
                                {ciudad.skydescriptionlong.toLowerCase() === "soleado" && (
                                    <FontAwesomeIcon
                                        icon={faSun} spin
                                        className="ml-2 text-yellow-500"
                                    />
                                )}
                                {ciudad.skydescriptionlong.toLowerCase() === "mayormente soleado" && (
                                    <FontAwesomeIcon
                                        icon={faSun} spin
                                        className="ml-2 text-orange-500" 
                                    />
                                )}
                                {ciudad.skydescriptionlong.toLowerCase() === "nublado" && (
                                    <FontAwesomeIcon
                                        icon={faCloud} bounce
                                        className="ml-2 text-gray-700" 
                                    />
                                )}
                                {ciudad.skydescriptionlong.toLowerCase() === "mayormente nublado" && (
                                    <FontAwesomeIcon
                                        icon={faCloud} bounce
                                        className="ml-2 text-gray-600" 
                                    />
                                )}
                                {ciudad.skydescriptionlong.toLowerCase() === "parcialmente nublado" && (
                                    <FontAwesomeIcon
                                        icon={faCloudSun} beat
                                        className="ml-2 text-gray-600" 
                                    />
                                )}
                                {ciudad.skydescriptionlong.toLowerCase() === "tormentas" && (
                                    <FontAwesomeIcon
                                        icon={faCloudShowersHeavy} beat
                                        className="ml-2 text-gray-600" 
                                    />
                                )}
                                {ciudad.skydescriptionlong.toLowerCase() === "tormentas dispersas" && (
                                    <FontAwesomeIcon
                                        icon={faCloudRain} beat
                                        className="ml-2 text-gray-600" 
                                    />
                                )}
                            </p>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
}
export default CondicionAtmosferica;