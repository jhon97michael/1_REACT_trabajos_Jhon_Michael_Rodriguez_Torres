import React from 'react'
import '../estilos/EstiloPersonajesList.css'

function PersonajesList(props){
    return(
    <div className="contenedorlist">
        <div className="contenedorinterno">
            
            <img src={require(`../imagenes/${props.imagenPersonaje}.jpg`)} alt="" className="fotoPersonaje" />
            <h1 className='tituloPersonaje'>{props.tituloPersonaje}</h1>
                <p className='ParrafoPersonaje'>{props.descripcionPersonaje}</p>
            
        </div>
    </div>     
    );
}export default PersonajesList;