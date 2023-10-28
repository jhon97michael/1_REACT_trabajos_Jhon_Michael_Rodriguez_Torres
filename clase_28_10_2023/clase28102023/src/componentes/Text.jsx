import Counter from "./Counter";

import React, { useState } from 'react'


const Text =()=>{

    const[show, setShow] = useState(true);

    function hardShow() {
        setShow(!show);
    }


    return (
        <div>
            <button onClick={hardShow}>{show === true ? "Ocultar" : "Mostrar"}</button>
            {show === true && <h2>Hola Mundo!</h2>}
        </div>
    );
}


export default Text;
