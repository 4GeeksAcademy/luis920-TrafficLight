import React, { useState } from "react";

function Semaforo() {
    const [color, setColor] = useState("red");
    const colores = ["red", "yellow", "green"];

    const cambiarColor = () => {
        const siguienteColor = colores[(colores.indexOf(color) + 1) % colores.length];
        setColor(siguienteColor);
    };

   

    return (
        <>
        <div className="container" >
            <div
                onClick={() => setColor("red")}
                className={`light red ${color === "red" ? "light-red" : ""}`}
            ></div>
            <div
                onClick={() => setColor("yellow")}
                className={`light yellow ${color === "yellow" ? "light-yellow" : ""}`}
            ></div>
            <div
                onClick={() => setColor("green")}
                className={`light green ${color === "green" ? "light-green" : ""}`}
            ></div>
        </div>
        <button onClick={cambiarColor}>Cambiar color</button>
        </>
        
    );
}

export default Semaforo;
