import React from "react";
import TodoICon from '../componentes/TodoIcon';

function CompleteIcon({ completed, onComplete }){
    return (
        <TodoICon 
        type="check"
        color={completed ? 'green' : 'gray'}
        onClick={onComplete}
        />
    );
}

export { CompleteIcon };