import React from 'react';
import '../estilos/EstiloHero.css'; 
import Video from '../imagenes/intro2.mp4';

const Hero =()=> {
  return (
    <div className="contenedorHero">

        <video src={Video} autoPlay muted loop class="video-bg" />
        <div className="bg-overlay"></div>

        <div className="home-text">
            <img className='logoHero' src={require('../imagenes/logo.png')} alt="" />
            
        </div>

        <button className='heroboton'>Jugar ahora</button>
       
        

    </div>
);
}

export default Hero;
