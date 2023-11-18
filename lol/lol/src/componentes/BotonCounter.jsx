import React from "react";
import { useState } from "react";



function BotonCounter (props){

    const [number,setNumbre] = useState(0);

    const sumar =() =>{
        setNumbre(number +1);
        
    }
    const restar =() =>{
        setNumbre(number - 1);
        
    }

    return (
        <div>
            <button className='heroboton' onClick={restar}> 
                {props.botonRestar}
            </button>
            <h2>{number}</h2>
            <button className='heroboton' onClick={sumar}> 
                {props.botonSumar}
            </button>
        </div>
    );
} export default BotonCounter;