import React from "react";
import TodoICon from '../componentes/TodoIcon';


function CompletedIcon(){
    return (
        <TodoICon 
        type="check"
        color="gray"
        />
    );
}

export { CompletedIcon };