import React from "react";
import '../Estilos/TodoItem.css'
import { CompleteIcon} from '../Estilos/CompleteIcon.js';
import { DeleteIcon} from '../Estilos/DeleteIcon.js';


function TodoItem(props){
    return (
      <li className="TodoItem">

        <CompleteIcon 
        completed={props.completed}
        onComplete={props.onComplete}
        />
       
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        
        <DeleteIcon 
        onDelete = {props.onDelete}
        />
      </li>
    );
  }

  export  {TodoItem};