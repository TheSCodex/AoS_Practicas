import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCloudRain,
    faSun, 
    faCloud, 
    faCloudSun, 
    faCloudShowersHeavy,
    faSatelliteDish,
    faSpinner
} from "@fortawesome/free-solid-svg-icons";

function quitarAcentos(texto) {
    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function CondicionAtmosferica() {
    const url = "https://api.datos.gob.mx/v1/condiciones-atmosfericas?pageSize=5000";
    const estadosMx = [
        { id: 1, name: "Aguascalientes" },
        { id: 2, name: "Baja California" },
        { id: 3, name: "Baja California Sur" },
        { id: 4, name: "Campeche" },
        { id: 5, name: "Chiapas" },
        { id: 6, name: "Chihuahua" },
        { id: 7, name: "Coahuila" },
        { id: 8, name: "Colima" },
        { id: 9, name: "Ciudad de Mexico" },
        { id: 10, name: "Durango" },
        { id: 11, name: "Guanajuato" },
        { id: 12, name: "Guerrero" },
        { id: 13, name: "Hidalgo" },
        { id: 14, name: "Jalisco" },
        { id: 15, name: "Estado de México" },
        { id: 16, name: "Michoacán" },
        { id: 17, name: "Morelos" },
        { id: 18, name: "Nayarit" },
        { id: 19, name: "Nuevo Leon" },
        { id: 20, name: "Oaxaca" },
        { id: 21, name: "Puebla" },
        { id: 22, name: "Queretaro" },
        { id: 23, name: "Quintana Roo" },
        { id: 24, name: "San Luis Potosí"},
        { id: 25, name: "Sinaloa" },
        { id: 26, name: "Sonora" },
        { id: 27, name: "Tabasco" },
        { id: 28, name: "Tamaulipas" },
        { id: 29, name: "Tlaxcala" },
        { id: 30, name: "Veracruz" },
        { id: 31, name: "Yucatan" },
        { id: 32, name: "Zacatecas" },
      ];

    const [datos, setDatos] = useState([]);
    const [estadoActual, setEstadoActual] = useState("Quintana Roo");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const consultarDatos = () => {
        setIsLoading(true);
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((condicionAtm) => {
                setDatos(condicionAtm.results);
                setError(null); 
            })
            .catch((error) => {
                setError("Error al recuperar la informacion");
                console.error("Error fetching data:", error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        consultarDatos();
    }, []);

    return (
        <div className="relative">
            <div className="flex flex-col items-center">
                <h1 className="text-xl font-bold text-white mb-5">Estado del Tiempo</h1>
                <select
                    className="block w-full bg-white border border-gray-300 rounded-lg p-2"
                    onChange={(e) => setEstadoActual(quitarAcentos(e.target.value))}
                >
                    <option value="">Selecciona un estado</option>
                    {estadosMx.map((opcion) => (
                        <option key={opcion.id} value={opcion.name}>
                            {opcion.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="grid border p-4 bg-white rounded-lg mt-[100px] overflow-y-auto max-h-[500px] grid-cols-3 gap-4">
                {isLoading ? (
                    <div className="col-span-3 flex flex-col items-center justify-center p-4 font-semibold text-center">
                        <p className="mb-4">Cargando datos...</p>
                        <FontAwesomeIcon icon={faSpinner} className="text-6xl" spin pulse />
                    </div>
                ) : error ? (
                    <div className="col-span-3 flex flex-col items-center justify-center p-4 font-semibold text-center">
                        <p className="mb-4">{error}</p>
                        <FontAwesomeIcon icon={faSatelliteDish} className="text-6xl" fade />
                    </div>
                ) : (
                    datos.map((ciudad, index) => {
                        if (ciudad.state === estadoActual) {
                            return (
                                <div
                                    key={index}
                                    className="border border-gray-300 p-3 rounded-lg"
                                >
                                    <p className="text-lg">
                                        {ciudad.name} - <i>{ciudad.skydescriptionlong}</i>
                                        {ciudad.name} - <i>{ciudad.temperature}</i>
                                        {ciudad.skydescriptionlong.toLowerCase() === "soleado" && (
                                            <FontAwesomeIcon
                                                icon={faSun}
                                                spin
                                                className="ml-2 text-yellow-500"
                                            />
                                        )}
                                        {ciudad.skydescriptionlong.toLowerCase() === "mayormente soleado" && (
                                            <FontAwesomeIcon
                                                icon={faSun}
                                                spin
                                                className="ml-2 text-orange-500"
                                            />
                                        )}
                                        {ciudad.skydescriptionlong.toLowerCase() === "nublado" && (
                                            <FontAwesomeIcon
                                                icon={faCloud}
                                                bounce
                                                className="ml-2 text-gray-600"
                                            />
                                        )}
                                        {ciudad.skydescriptionlong.toLowerCase() === "mayormente nublado" && (
                                            <FontAwesomeIcon
                                                icon={faCloud}
                                                bounce
                                                className="ml-2 text-gray-500"
                                            />
                                        )}
                                        {ciudad.skydescriptionlong.toLowerCase() === "parcialmente nublado" && (
                                            <FontAwesomeIcon
                                                icon={faCloudSun}
                                                beat
                                                className="ml-2 text-gray-400"
                                            />
                                        )}
                                        {ciudad.skydescriptionlong.toLowerCase() === "tormentas" && (
                                            <FontAwesomeIcon
                                                icon={faCloudShowersHeavy}
                                                beat
                                                className="ml-2 text-gray-700"
                                            />
                                        )}
                                        {ciudad.skydescriptionlong.toLowerCase() === "tormentas dispersas" && (
                                            <FontAwesomeIcon
                                                icon={faCloudRain}
                                                beat
                                                className="ml-2 text-gray-600"
                                            />
                                        )}
                                        {ciudad.skydescriptionlong.toLowerCase() === "aguaceros" && (
                                            <FontAwesomeIcon
                                                icon={faCloudRain}
                                                beat
                                                className="ml-2 text-gray-600"
                                            />
                                        )}
                                        {ciudad.skydescriptionlong.toLowerCase() === "tormentas aisladas" && (
                                            <FontAwesomeIcon
                                                icon={faCloudRain}
                                                beat
                                                className="ml-2 text-gray-600"
                                            />
                                        )}
                                    </p>
                                </div>
                            );
                        }
                        return null;
                    })
                )}
            </div>
        </div>
    );
}

export default CondicionAtmosferica;