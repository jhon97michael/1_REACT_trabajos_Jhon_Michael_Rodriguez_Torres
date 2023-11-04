import logo from './logo.svg';
import './App.css';
import TodoItem from './componentes/TodoItem';
import TodoCounter from './componentes/TodoCounter';
import TodoSearch from './componentes/TodoSearch';
import TodoList from './componentes/TodoList';
import { ButtonCreateTODO } from './componentes/ButtonCreateTODO';

const defaultTODOS = [
  {text: "Cortar Cebolla", completed: false}
]

function App() {
  return (
    <div className="App">

      <TodoCounter
        completed={16}
        total={25} 
      />
      <TodoSearch /> 

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

    <ButtonCreateTODO />

    </div>
  );
}


export default App;
