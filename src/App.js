import './App.css';
import Header from './comonents/Header/Header';
import AddTodo from './comonents/AddTodo/AddTodo';
import TodoList from './comonents/TodoList/TodoList';
import { useState } from 'react';

function App() {

  const [todo, setTodo] = useState([
      {
        id: 1,
        title: 'first todo',
        isOpened: true
      },
      {
        id: 2,
        title: 'second todo',
        isOpened: true
      },
      {
        id: 3,
        title: 'third todo',
        isOpened: false
      }
    ]
  )
  
    return (
      <div className="App">
        <Header/>
        <AddTodo todo={todo} setTodo={setTodo}/>
        <TodoList todo = {todo} setTodo={setTodo}/>
      </div>
    );
}

export default App;
