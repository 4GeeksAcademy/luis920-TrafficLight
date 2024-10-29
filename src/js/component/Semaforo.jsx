import React, { useState } from "react";

function Semaforo(){
    const[color,setColor]=useState("red")

    

    return(
        <div className="container">

            <div 
            onClick= {() => setColor(red) } 
            className=" enfoque red">

            </div>
            <div 
            onClick= {() => setColor(yellow) } 
            className=" enfoque yellow">

            </div>
            <div
            onClick= {() => setColor(green) } 
             className=" enfoque green"></div>

        </div>
    )
}

export default Semaforo