import logo from './logo.svg';
import './App.css';
import {TodoItem} from './componentes/TodoItem';
import {TodoCounter} from './componentes/TodoCounter';
import {TodoSearch} from './componentes/TodoSearch';
import {TodoList} from './componentes/TodoList';
import { ButtonCreateTODO } from './componentes/ButtonCreateTODO';
import React from 'react';

const defaultTODOS = [
  {text: "Cortar Cebolla", completed: true},
  {text: "Terminar el curso", completed: false},
  {text: "Llorar con la llorona", completed: false},
  {text: "LALALALAL", completed: false}

]

function App() {
  const [todos, setTodos] = React.useState(defaultTODOS);
  const [searchValue, setsearchValue] = React.useState('');

  const completedTodos =todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();


      return todoText.includes(searchText);
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true
    setTodos(newTodos);
  }  


  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }  

  return (
    <>

      <TodoCounter
        completed={completedTodos}
        total={totalTodos} 
      />
      <TodoSearch 
        searchValue={searchValue}
        setsearchValue={setsearchValue}
      /> 

      <TodoList>
        {searchedTodos.map(todo =>(
          <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed} 
          onCompleted={() => completeTodo(todo.text)}
          onDelete = {() => deleteTodo(todo.text)}
          />
        ))}
        
      </TodoList>

    <ButtonCreateTODO />

    </>
  );
}


export default App;
