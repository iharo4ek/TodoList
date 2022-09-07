import React from "react";
import { useState } from "react";
import './Add.css'
import '../../App.css';

function AddTodo({todo, setTodo}) {

    const [value, setValue] = useState('')

    function saveTodo() {
        
       
        if (value != '' && value != ' ') {
            let newTodo = [...todo];
            
            let newId;
            try {
                newId = newTodo[newTodo.length-1].id+1;
            } catch (e) {
                newId = 1;
            } finally {}
            
            let block = document.querySelector('.App');
            block.style.height = block.offsetHeight  + 70+'px';
            // console.log(block.offsetHeight)


            newTodo.push({id: newId, title:value, isOpened:true});
            // console.log(newId);
            setTodo(newTodo);
            setValue('');
        }
        
    }

    return (
        <div className="add">
            <input size={"65"} placeholder="Введите задачу" value={value} onChange={(e)=>setValue(e.target.value)}/>
            
            <div className="btn">
                <button onClick={saveTodo}>Сохранить</button>

            </div>
        </div>
    )
}

export default AddTodo