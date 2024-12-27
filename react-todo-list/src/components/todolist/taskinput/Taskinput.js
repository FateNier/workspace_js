import React from 'react'
import './../../todolist/Todolist.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import action from '../../../store/action';


export default function Taskinput({ addTask }) {

    const dispatch = useDispatch();

    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const addTaskHandler = (e) => {
        e.preventDefault();
        dispatch(
            {
                type: action.ADD_TASK,
                payload: {
                    category: category,
                    description: description
                }
            }
        );
    }

    return (
        <form>
            <input className="standard-input" type='text' onChange={e => setCategory(e.target.value)} />
            <input className="standard-input" type='text' onChange={e => setDescription(e.target.value)} />
            <button className={['todo-btn', 'standard-button']} onClick={addTaskHandler}>Add</button>
        </form>
    )
}
