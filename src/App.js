import './App.css';
import Header from './comonents/Header/Header';
import AddTodo from './comonents/AddTodo/AddTodo';
import TodoList from './comonents/TodoList/TodoList';
import { useState } from 'react';

function App() {

  const [todo, setTodo] = useState([
      {
        id: 1,
        title: 'crate first todo',
        isOpened: true
      }
    ]
  )
  
    return (
      <div className="App">
        <div className='Header'>
          <Header/>
        </div>

        <div className='Add'>
          <AddTodo todo={todo} setTodo={setTodo}/>
        </div>
        
        <div className='Todo'>
          <TodoList todo = {todo} setTodo={setTodo}/>
        </div>
        
      </div>
    );
}

export default App;
