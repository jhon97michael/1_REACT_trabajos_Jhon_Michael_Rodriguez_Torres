import React from "react";
import TodoICon from '../componentes/TodoIcon';



function DeleteIcon({ onDelete }){
    return (
        <TodoICon 
        type="delete"
        color="gray"
        onClick={onDelete}
        />
    ); 
}

export { DeleteIcon };