import React from 'react';
import '../Estilos/ButtonCreateTODO.css'


function ButtonCreateTODO(){
    return (
        <button className='CreateButtonTodo' onClick={
            (event) => console.log("Le diste click")
        }>+</button>
    );
}

export {ButtonCreateTODO}