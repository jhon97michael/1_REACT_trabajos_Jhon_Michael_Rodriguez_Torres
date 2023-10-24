
import './App.css';
import HeaderNav from './componentes/HeaderNav';
import PersonajesList from './componentes/PersonajesList';
import Hero from './componentes/Hero';
import ExpandingCard from './componentes/ExpandingCard';

function App() {
  return (
    <div className="App">
      <HeaderNav 
      item1 = 'Inicio'
      item2 = 'Personajes'
      item3 = 'Como jugar'
      item4 = 'Soporte'
      imagenlogo = 'logo'
      />
      
      <Hero 
        tituloHero = 'LEAGUE OF LEGENDS'
        parrafoHero = 'lorem'
        botonHero = 'Ver más'
      />


      <PersonajesList 
      tituloPersonaje = "Kai'sa"
      imagenPersonaje = 'kaisa'
      descripcionPersonaje = "Kai'sa cuyo nombre real es Kaisa'a, es una joven valiente que vivía en Icathia, una ciudad que fue devastada por el Vacío, una entidad corrupta y aterradora. Durante el ataque del Vacío, su madre la rescató, pero para salvarla, tuvo que usar una tecnología experimental que fusionó el cuerpo de Kai'Sa con una entidad del Vacío. Esto le otorgó habilidades sobrenaturales y la capacidad de resistir la corrupción del Vacío."
      />

      <PersonajesList 
        tituloPersonaje ='Miss Fortune'
        imagenPersonaje='missfortune'
        descripcionPersonaje = 'Hola'
      />

      <ExpandingCard 
    
      />
      

    </div>
  );
}

export default App;
