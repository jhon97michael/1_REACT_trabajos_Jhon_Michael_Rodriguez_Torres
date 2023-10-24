import React from 'react'
import '../estilos/EstiloHeaderNav.css'

function HeaderNav(props){
    return(
        <div className="contenedor">
            <img className='imagen-logo' src={require(`../imagenes/${props.imagenlogo}.png`)} alt="" />
            <div className="navlink">
                <ul>
                    <li><a href="#">{props.item1}</a></li>
                    <li><a href="#">{props.item2}</a></li>
                    <li><a href="#">{props.item3}</a></li>
                    <li><a href="#">{props.item4}</a></li>
                </ul>
            </div>
        </div>
    );
}export default HeaderNav;