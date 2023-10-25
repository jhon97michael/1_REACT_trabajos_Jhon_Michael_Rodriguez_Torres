
import './App.css';
import HeaderNav from './componentes/HeaderNav';
import PersonajesList from './componentes/PersonajesList';
import Hero from './componentes/Hero';


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
      
      <Hero  />

      <div className='cards'>
      <PersonajesList 
      tituloPersonaje = "Kai'sa"
      imagenPersonaje = 'kaisa'
      descripcionPersonaje = "Kai'sa cuyo nombre real es Kaisa'a, es una joven valiente que vivía en Icathia, una ciudad que fue devastada por el Vacío, una entidad corrupta y aterradora. Durante el ataque del Vacío, su madre la rescató, pero para salvarla, tuvo que usar una tecnología experimental que fusionó el cuerpo de Kai'Sa con una entidad del Vacío. Esto le otorgó habilidades sobrenaturales y la capacidad de resistir la corrupción del Vacío."
      />

      <PersonajesList 
        tituloPersonaje ='Miss Fortune'
        imagenPersonaje='missfortune'
        descripcionPersonaje = 'Hija de la afamada fabricante de armas Abigale Fortune, Sarah pasó la mayor parte de su muy feliz infancia en la forja del asentamiento isleño de su familia, ubicado frente a la costa. Fue en esta forja donde aprendió a limar los mecanismos internos de las pistolas, ajustar gatillos e incluso preparar pilas de balas para pistolas personalizadas. La habilidad de su madre para fabricar armas de fuego era legendaria.'
      />

      <PersonajesList 
      tituloPersonaje= 'Jinx'
      imagenPersonaje = 'Jinx'
      descripcionPersonaje = 'Al observar a Jinx, la mayoría solo ve a una mujer demente con un amplio surtido de armas peligrosas; no obstante, pocos la recuerdan como la chica relativamente inocente de Zaun, una inventora con grandes ideas que nunca encajó del todo. Nadie sabe con certeza qué sucedió para que esa dulce niñita se transformara en una mujer desenfrenada e impredecible, infame por sus actos de destrucción sin sentido. '
      />

      <PersonajesList
      tituloPersonaje='Nilah'
      imagenPersonaje='Nilah'
      descripcionPersonaje = 'Es una mujer alegre y segura de sí que siempre porta una sonrisa inquietante. Sus duelos con las desenfrenadas serpientes marinas desafían los límites de la habilidad humana: corre sobre la superficie del mar abierto con una espada látigo hecha de agua prismática y brillante para trepar sobre las grandes bestias y asesinarlas de forma radical, deteniéndose solo para agradecerles a sus dignos enemigos por su esfuerzo. '
      />
      </div>

     
      

    </div>
  );
}

export default App;
