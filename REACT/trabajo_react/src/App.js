
import './App.css';
import Barranav from './componentes/Barranav';
import Banner from './componentes/Banner';

function App() {
  return (
    <div className="App">
      <Barranav
      primeritem='Inicio'
      segundoitem='REACT'
      terceritem='Angular'
      cuartoitem='VUE'
      imagen='logo' />

      <Banner />

     

    </div>
  );
}

export default App;
