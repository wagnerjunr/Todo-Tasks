import React, { useContext } from 'react'
import { TodoTasks } from "../Context/Context";

import { Icon } from "@chakra-ui/react";
import { DeleteIcon, WarningIcon,ArrowBackIcon } from '@chakra-ui/icons'
import { Tooltip } from '@chakra-ui/react'
import { Link } from "react-router-dom";

function Historic() {
    
    const [tasks,deleteTask,doneTask] = useContext(TodoTasks);

    return (

        <div className="grid-container">
            {tasks.map(task => (
               task.status ? (
                <div className="grid-item" key={task.id}>
                    <div className="title" text>
                        <h1>{task.title}</h1>
                        {task.priority ? <Tooltip hasArrow label='Priority Task' bg='red.600'><Icon className="warning-icon" as={WarningIcon}/></Tooltip> : null}
                    </div>
                    <div className="description">
                        {task.description}
                    </div>
                    <hr></hr>
                    <footer className="footer">
                        <Link onClick={()=>doneTask(task,'/historic')}><Icon as={ArrowBackIcon}/>Recover Task</Link>
                        <div onClick={() => deleteTask(task.id,'/historic')} className="btn_delete"><Icon as={DeleteIcon} />Delete</div>
                    </footer>
                </div>
            ) : null
            ))}
        </div>

    )
}



export default Historic;