import React from "react";
import '../Estilos/TodoItem.css'
import { CompletedIcon} from '../Estilos/CompletedIcon.js';
import { DeleteIcon} from '../Estilos/DeleteIcon.js';


function TodoItem(props){
    return (
      <li className="TodoItem">

        <CompletedIcon />
        {/* <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} onClick={props.onCompleted}>
          V
        </span> */}
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        {/* <span className={`Icon Icon-delete`} onClick={props.onDelete}>
          X
        </span> */}
        <DeleteIcon />
      </li>
    );
  }

  export  {TodoItem};