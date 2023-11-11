import logo from './logo.svg';
import './App.css';
import TodoItem from './componentes/TodoItem';
import TodoCounter from './componentes/TodoCounter';
import TodoSearch from './componentes/TodoSearch';
import TodoList from './componentes/TodoList';
import { ButtonCreateTODO } from './componentes/ButtonCreateTODO';

const defaultTODOS = [
  {text: "Cortar Cebolla", completed: true},
  {text: "Terminar el curso", completed: false},
  {text: "Llorar con la llorona", completed: false},
  {text: "LALALALAL", completed: false}

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
        {defaultTODOS.map(todo =>(
          <TodoItem key={todo.text}
          text={todo.text}
          completed={todo.completed} />
        ))}
        
      </TodoList>

    <ButtonCreateTODO />

    </div>
  );
}


export default App;
