import { Icon } from "@chakra-ui/react";
import { DeleteIcon, EditIcon, CheckIcon, WarningIcon } from '@chakra-ui/icons'
import { Tooltip } from '@chakra-ui/react'
import { Link, useLoaderData, useNavigate } from "react-router-dom";

function Dashboard() {
    const tasks = useLoaderData();
    const navigateHome = useNavigate();

    function deleteTask(task) {
        fetch('http://localhost:3000/tasks/' + task, {
            method: 'DELETE'
        }).then(() => {
            console.log("Item delete");
            return navigateHome("/");
        })
    }

    function doneTask(task){
       task.status = !task.status
       fetch('http://localhost:3000/tasks/' + task.id, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task)
    }).then(() => {
        console.log("Task Edit");
        return navigateHome("/");
    })
    }

    return (

        <div className="grid-container">
            {tasks.map(task => (
               
               !task.status ? (
                <div className="grid-item" key={task.id}>
                    <div className="title">
                        <h1 className="task-title">{task.title}</h1>
                        {task.priority ? <Tooltip hasArrow label='Priority Task' bg='red.600'><Icon className="warning-icon" as={WarningIcon}/></Tooltip> : null}
                    </div>
                    <div className="description">
                        {task.description}
                    </div>
                    <hr></hr>
                    <footer className="footer">
                        <Link to={`/task/${task.id}`}><Icon as={EditIcon} />Edit</Link>
                        <Link onClick={()=>doneTask(task)}><Icon as={CheckIcon} />Done</Link>
                        <div onClick={() => deleteTask(task.id)} className="btn_delete"><Icon as={DeleteIcon} />Delete</div>
                    </footer>
                </div>
            ) : null
            ))}
        </div>

    )
}

export const TaskLoader = async () => {
    const res = await fetch('http://localhost:3000/tasks');
    return await res.json();
}

export default Dashboard;