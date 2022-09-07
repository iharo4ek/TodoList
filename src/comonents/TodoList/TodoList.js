import React from "react";
import './Todo.css';
import { useState } from "react";

function TodoList({todo, setTodo}) {

    const [edit, setEdit] = useState(null);
    const [value, SetValue] = useState('');
    const [closedTasksIds, setClosedTasksIds] = useState([])
    
    
    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id != id)
        let block = document.querySelector('.App');
        block.style.height = block.offsetHeight  - 80+'px';
        setTodo(newTodo)
    }


    function IsOpened (id) {

        if (!closedTasksIds.includes(id)) {
            setClosedTasksIds(prev => [...prev, id])
        } else {
            setClosedTasksIds(closedTasksIds.filter( item => item !== id))  
        }
    }

    function editTodo(id, title) {
        setEdit(id)
        SetValue(title)
    }

    function SaveTodo(id) {
        let newTodo = [...todo].map(item => {
            if (item.id == id) {
                item.title = value
            }
            return item
        });
        setTodo(newTodo);
        setEdit(null);
    }

    console.log(closedTasksIds)

    return (
        <div >
            {
                todo.map(item => (
                    <div className={ closedTasksIds.includes(item.id) ? 'ToDo Closed' : "ToDo"} key = {item.id}>
                        {
                            edit == item.id? 
                            <div>
                                <input size={"45"}  value={value} onChange={(e) => SetValue(e.target.value)}/>
                            </div> :
                            <div>{item.title}</div>
                        }
                        
                        {
                            edit == item.id?    
                                <div className="save">
                                    <button  onClick={() => SaveTodo(item.id)}>Сохранить</button>
                                </div>:
                                closedTasksIds.includes(item.id) ?
                                <div className="buttons">
                                    <button className="delete" onClick={() => deleteTodo(item.id)}>Удалить</button>
                                    <button className="openClose" onClick={() =>IsOpened(item.id)} >Закрыть/открыть</button>
                                </div>:
                                <div className="buttons">
                                    <button className="delete" onClick={() => deleteTodo(item.id)}>Удалить</button>
                                    <button className="edit" onClick={() => editTodo(item.id, item.title)} >Изменить</button>
                                    <button className="openClose" onClick={() =>IsOpened(item.id)} >Закрыть/открыть</button>
                                </div>

                        }
                        
                    </div>
                    
                ))
            }
        </div>
    )
}
//
export default TodoList