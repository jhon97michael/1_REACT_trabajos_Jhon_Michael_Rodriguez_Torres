import React from "react";
import { useState, useEffect } from "react";

const Text2 = () =>{

    const [text, setText] = useState("");

    const handleText = (e)=>{
        setText(e.target.value);
    }

    useEffect(()=>{
    console.log("Componente montado");

   return () =>{
    console.log("Componente desmontado");
   }
    }, []);

    useEffect(()=>{
        console.log("Text modificado");
    
       
        }, [text]);

    return (
        <div>
            <input type="text" onChange={handleText} />
            <p>{text}</p>
        </div>
    );
}
export default Text2;