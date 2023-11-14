import React from "react";
import '../Estilos/TodoCounter.css'


function TodoCounter({total, completed}){


    return (
        <div>
            <h1 className="TodoCounter">
                Has completado <span>{completed}</span> de <span>{total}</span> TAREAS
            </h1>
        </div>
    );
}
export {TodoCounter} ;