import React from 'react'
import Taskinput from './taskinput/Taskinput.js'
import Tasklist from './tasklist/Tasklist.js'

export default function Todolist() {
    const tasks = [
        {id: 1, category: 'task1', description: 'task1 description' , completed: false},
        {id: 2, category: 'task2', description: 'task2 description' , completed: false},
        {id: 3, category: 'task3', description: 'task3 description' , completed: true},
        {id: 4, category: 'task4', description: 'task4 description' , completed: false},
        {id: 5, category: 'task5', description: 'task5 description' , completed: false},
        {id: 6, category: 'task6', description: 'task6 description' , completed: false},
        {id: 7, category: 'task7', description: 'task7 description' , completed: false},
        {id: 8, category: 'task8', description: 'task8 description' , completed: false},
    ]
  return (
    <div>
        <Taskinput />
        <Tasklist tasksProps={tasks}/>
    </div>
  )
}
