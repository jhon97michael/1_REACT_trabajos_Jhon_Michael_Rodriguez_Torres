import React from 'react';


function ButtonCreateTODO(){
    return (
        <button className='CreateButtonTodo' onClick={
            (event) => console.log("Le diste click")
        }>+</button>
    );
}

export {ButtonCreateTODO}