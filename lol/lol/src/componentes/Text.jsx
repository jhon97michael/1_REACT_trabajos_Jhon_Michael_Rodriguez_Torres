import React from "react";
import { useState } from "react";
import Text2 from "../componentes/Text2";

const Text = () =>{

    const [show, setShow] = useState(false);
    
    function handleShow() {
        setShow(!show);
    }

    return (
        <div>
            <button className='heroboton' onClick={handleShow}>{show === true ? "Ocultar" : "Mostar"}</button>
            {show === true && <Text2 />}
        </div>
    );
}
export default Text;