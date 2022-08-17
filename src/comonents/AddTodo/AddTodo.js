import React from "react";
import { useState } from "react";

function AddTodo({todo, setTodo}) {

    const [value, setValue] = useState('')

    function saveTodo() {
        
        if (value != '' && value != ' ') {
            let newTodo = [...todo];
        let newId = newTodo[newTodo.length-1].id+1;
        newTodo.push({id: newId, title:value, isOpened:true});
       
        setTodo(newTodo);
        setValue('');
        }
        
    }

    return (
        <div>
            <input placeholder="Введите задачу" value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={saveTodo}>Сохранить</button>
        </div>
    )
}

export default AddTodo