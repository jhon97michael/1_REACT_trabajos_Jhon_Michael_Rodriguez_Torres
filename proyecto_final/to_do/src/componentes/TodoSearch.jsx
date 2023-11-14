import React from "react";
import '../Estilos/TodoSearch.css'

function TodoSearch({
    searchValue,
    setsearchValue
}){
    return (

        <input className="TodoSearch"
        type="text" 
        placeholder="Search" 
        value={searchValue}
        onChange={(event) =>{
            setsearchValue(event.target.value);
        
        }
        
    }
        />
        
    );
}

export  {TodoSearch};