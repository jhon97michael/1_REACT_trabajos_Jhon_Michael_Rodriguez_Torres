import React from "react";
import TodoICon from '../componentes/TodoIcon';

function CompletedIcon({ completed, onComplete }){
    return (
        <TodoICon 
        type="check"
        color={completed ? 'green' : 'gray'}
        onClick={onComplete}
        />
    );
}

export { CompletedIcon };