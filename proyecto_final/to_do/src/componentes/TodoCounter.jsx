import React from "react";


function TodoCounter({total, completed}){


    return (
        <div>
            <h1>
                Has completado {completed} de {total} TAREAS
            </h1>
        </div>
    );
}
export default TodoCounter;