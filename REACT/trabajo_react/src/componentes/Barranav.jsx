import React from 'react';
import '../Estilos/Barranav.css';
function barranav(props){
    return(
        <div className='contenedor1'>
            <div className="logo">
                <img src={require(`../Imagenes//${props.imagen}.png`)} alt="logo" className='contenedor-logo' />
            </div>
            <div className="nav-link">
                <ul>
                    <li><a href="#">{props.primeritem}</a></li>
                    <li><a href="#">{props.segundoitem}</a></li>
                    <li><a href="#">{props.terceritem}</a></li>
                    <li><a href="#">{props.cuartoitem}</a></li>
                </ul>
            </div>
        </div>
    );
    
}export default barranav;
