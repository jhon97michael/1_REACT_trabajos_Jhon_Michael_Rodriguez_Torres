
import './App.css';
import HeaderNav from './componentes/HeaderNav';
import PersonajesList from './componentes/PersonajesList';
import Hero from './componentes/Hero';
import Footer from './componentes/Footer';


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
      <div className='cards'>
        <PersonajesList
          tituloPersonaje = 'Seraphine'
          imagenPersonaje ='Seraphine'
          descripcionPersonaje='Nacida en Piltóver de padres zaunitas, Seraphine es capaz de escuchar las almas de otros; el mundo canta para ella, y ella canta para él. Aunque estos sonidos la abrumaban en su juventud, ahora acude a ellos para inspirarse y convertir el caos en una sinfonía. Se presenta en las ciudades hermanas para recordarles a sus ciudadanos que no están solos, que son más fuertes juntos y que, ante sus ojos, su potencial es ilimitado.'
        />
        <PersonajesList 
          tituloPersonaje ='Tristana'
          imagenPersonaje ='Tristana'
          descripcionPersonaje='Como la mayoría de yordles, Tristana sentía una absoluta fascinación por el mundo más allá de Ciudad de Bandle. Durante sus viajes, recorrió con entusiasmo lugares muy distintos, hizo muchos amigos y se encontró con criaturas muy peculiares. Usando los senderos ocultos que solo los yordles conocen, exploró el reino material a lo largo y a lo ancho, casi siempre pasando desapercibida.'
        />
        <PersonajesList 
          tituloPersonaje='Akali'
          imagenPersonaje='Akali'
          descripcionPersonaje='Akali era una muchacha precoz y absorbía todo el conocimiento como una esponja. A todo el mundo le quedó claro que seguiría el mismo camino que sus padres. Junto a Shen, el hijo y sucesor del gran maestro, lideraría a la nueva generación dedicada a conservar el equilibrio de Jonia. Jonia siempre ha sido una tierra de magia salvaje, habitada por gente llena de energía y con espíritu que busca convivir en armonía.'
        />
          <PersonajesList 
        tituloPersonaje='Garen'
        imagenPersonaje='garen'
        descripcionPersonaje='Nacido en la noble familia Guardia de la Corona, junto con su hermana menor Lux, Garen supo desde temprana edad que se esperaba que él defendiera el trono de Demacia con su vida. Su padre, Pieter, era un oficial militar condecorado, mientras que su tía Tianna era la Capitana de la espada de la Vanguardia Valerosa, una fuerza militar de élite; ambos fueron reconocidos y muy respetados por el rey Jarvan III.'
      />
      </div>
    
      <Footer />

    </div>
  );
}

export default App;
