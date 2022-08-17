import React from "react";
import { useState } from "react";

function TodoList({todo, setTodo}) {

    const [edit, setEdit] = useState(null);
    const [value, SetValue] = useState('');
    
    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id != id)
        setTodo(newTodo)
    }

    function isOpened(id) {
        let newTodo = [...todo].filter(item => {
            if(item.id == id) {
                item.isOpened = !isOpened;
            }
            return item
        })
        setTodo(newTodo)
    }

    function editTodo(id, title) {
        setEdit(id)
        SetValue(title)
    }

    function saveTodo(id) {
        let newTodo = [...todo].map(item => {
            if (item.id == id) {
                item.title = value
            }
            return item
        });
        setTodo(newTodo);
        setEdit(null);
    }

    return (
        <div>
            {
                todo.map(item => (
                    <div key = {item.id}>
                        {
                            edit == item.id? 
                            <div>
                                <input  value={value} onChange={(e) => SetValue(e.target.value)}/>
                            </div> :
                            <div>{item.title}</div>
                        }
                        
                        {
                            edit == item.id? 
                                <div>
                                    <button >Сохранить</button>
                                </div>:
                                <div>
                                    <button onClick={() => deleteTodo(item.id)}>Удалить</button>
                                    <button onClick={() => editTodo(item.id, item.title)} >Изменить</button>
                                    <button onClick={() =>isOpened(item.id)} >Закрыть/открыть</button>
                                </div>
                        }
                        
                    </div>
                    
                ))
            }
        </div>
    )
}

export default TodoList