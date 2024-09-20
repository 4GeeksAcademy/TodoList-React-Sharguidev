import React, { useState } from "react";
import Task from "./Task";

const ToDosList = () => {

    const [newTask, setNewTask] = useState("")

    const [taskList, setTaskList] = useState([])

    return (
        <div className="container">
            <input type="text" value={newTask} 
            onChange={(event) => setNewTask(event.target.value)} 
            onKeyUp={(event) => {
                if (event.key == "Enter") {
                    setTaskList([newTask, ...taskList])
                    setNewTask("")
                }
                }}/>

            {(taskList.length == 0) && <div className="py-3 px-5 fs-4 colorFont">No tasks, add a task</div>}
            {taskList.map( (tarea, indice) => <Task task={tarea} key={indice} onRemove={()=>{
                setTaskList(taskList.filter((_tarea, indiceABorrar)=> (indice != indiceABorrar)))
            }} />)}
            <p className="my-0 p-2 colorFont">{taskList.length} items left</p>
        </div>
    )
}

export default ToDosList;