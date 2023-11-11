import React from "react";

function TodoSearch(){

    const [searchValue, setsearchValue] = React.useState('');

    console.log('Los usuarios buscan todos de ' + searchValue);

    return (

        <input
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

export default TodoSearch;