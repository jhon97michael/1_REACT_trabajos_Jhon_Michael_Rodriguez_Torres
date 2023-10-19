import React from 'react'
import '../Estilos/Banner.css'

function banner(){
    return(
        <section id='hero'>
        <div className='contenedor-hero'>
            <div class="parent">
                <div class="div1"><h2>ANGULAR</h2> </div>
                <div class="div2"><h2>REACT</h2> </div>
                <div class="div3"><h2>VUE</h2> </div>
                <div class="div4">Explorando las </div>
                <div class="div5">Definiciones, diferencias y semejanzas. </div>
            </div>
        </div>
        </section>
    );
}export default banner;