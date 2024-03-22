import React,{useState,createContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";


export const TodoTasks = createContext();

export  function TasksProvider(props){

    const [tasks,setTasks] = useState([])
    const url = 'https://api-fake-json-gdep.onrender.com/tasks'
    const navigateHome = useNavigate();

    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=> setTasks(data))
    },[tasks])


    function deleteTask(taskId,dest) {

        fetch(`${url}/${taskId}`, {
            method: 'DELETE'
        }).then(() => {
            console.log("Item delete");
            return navigateHome(dest);
        })
    }

    function doneTask(task,dest){

       task.status = !task.status
       fetch(`${url}/${task.id}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task)
    }).then(() => {
        return navigateHome(dest);
    })
    }   

    return (
        <TodoTasks.Provider value={[tasks,deleteTask,doneTask]}>
                {props.children}
        </TodoTasks.Provider>
    )
}