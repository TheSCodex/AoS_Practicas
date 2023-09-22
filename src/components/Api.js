import React, { useEffect, useState } from "react";
function CondicionAtmosferica() {
    const url = "https://api.datos.gob.mx/v1/condiciones-atmosfericas";
    const estadosMx = [
        { id: 1, name: "Aguascalientes" },
        { id: 2, name: "Baja California" },
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
        <>
            <select onChange={(e) => setEstadoActual(e.target.value)}>
                <option value="">Selecciona una opción</option>
                {estadosMx.map((opcion) => (
                    <option key={opcion.id} value={opcion.name}>
                        {opcion.name}
                    </option>
                ))}
            </select>
            <h1>Estado del Tiempo</h1>
            {datos.map((ciudad, index) => {
                if(ciudad.state === estadoActual){
                    return(
                        <div key={index}>
                    <p>
                        {ciudad.name} - <i>{ciudad.skydescriptionlong}</i>
                    </p>
                </div>
                    )
                }
                return null;
                })}
        </>
    );
}

export default CondicionAtmosferica;