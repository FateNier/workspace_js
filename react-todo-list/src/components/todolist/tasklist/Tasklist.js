import React from 'react'

import { useState } from 'react';
import classNames from 'classnames';
import '../../todolist/Todolist.css'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import action from '../../../store/action';

export default function Tasklist({tasksProps}) {

    // const tasks = useSelector((state) => state.tasks);
    // const [tasklist, setTasklist] = useState(tasks); //useState 只会执行一次 在组件初始化的时候 已经执行了
    // //如果status 交由store 来管理 那么在本页面不能直接修改status 只能通过dispatch来修改

    // useEffect(() => {
    //     setTasklist(tasks);
    // }, [tasks])

    // const completeTask = (id) => {
    //     const newTasklist = tasklist.map((task) => {
    //         if (task.id === id) {
    //             task.completed = !task.completed
    //         }
    //         return task;
    //     })
    //     dispatchEvent(newTasklist);
    //     setTasklist(newTasklist);
    // }

    // const deleteTask = (id) => {
    //     const newTaskList = tasklist.filter((task) => {
    //         return task.id !== id;
    //     })
    //     setTasklist(newTaskList);
    // }

    // const checkbIntClass = (task) => {
    //     if (task.completed) {
    //         return 'checked'
    //     } else {
    //         return 'unchecked'
    //     }
    // }

    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    //如果status 交由store 来管理 那么在本页面不能直接修改status 只能通过dispatch来修改

    // useEffect(() => {
    //     setTasklist(tasks);
    // }, [tasks])

    const completeTask = (id) => {
        const newTasklist = tasks.map((task) => {
            if (task.id === id) {
                task.completed = !task.completed
            }
            return task;
        })
        dispatch(
            {
                type: action.COMPLETE_TASK,
                payload: newTasklist
            }
        )
    }

    const deleteTask = (id) => {
        const newTaskList = tasks.filter((task) => {
            return task.id !== id;
        })
        dispatch(
            {
                type: action.DELETE_TASK,
                payload: newTaskList
            }
        )
    }

    const checkbIntClass = (task) => {
        if (task.completed) {
            return 'checked'
        } else {
            return 'unchecked'
        }
    }


    return (
        <div id='myUnOrdList'>
            <ul className='todo-list'>
                {
                    tasks.map((task) => {
                        return (
                            <div key={task.id} className={classNames({ 'todo-item': true, 'standard-todo': true, 'completed': task.completed })}>
                                <li>{task.category}:: {task.description}</li>
                                <button className={['check-btn', checkbIntClass(task)]} onClick={() => completeTask(task.id)}>Complete</button>
                                <button className={['delete-btn', 'standard-button']} onClick={() => deleteTask(task.id)}>Remove</button>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}
