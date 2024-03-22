import React, { useContext } from 'react'
import { TodoTasks } from "../Context/Context";
import { Link} from "react-router-dom";

import { Icon } from "@chakra-ui/react";
import { DeleteIcon, EditIcon, CheckIcon, WarningIcon } from '@chakra-ui/icons'
import { Tooltip } from '@chakra-ui/react'

function Dashboard() {

    const [tasks,deleteTask,doneTask] = useContext(TodoTasks);
    console.log(tasks)

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
                        <Link onClick={()=>doneTask(task,'/')}><Icon as={CheckIcon} />Done</Link>
                        <div onClick={() => deleteTask(task.id,'/')} className="btn_delete"><Icon as={DeleteIcon} />Delete</div>
                    </footer>
                </div>
            ) : null
            ))}
        </div>

    )
}


export default Dashboard;