import { Form, useParams } from "react-router-dom";
import { Button, Checkbox, FormControl, FormLabel, Input, Textarea, } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";



function Edit() {
    const { id } = useParams();
    const navigateHome = useNavigate();
    const [task, setTask] = useState(null);
    const url = 'https://api-fake-json-gdep.onrender.com/tasks'

    useEffect(() => {
        fetch(`${url}/${id}`)
            .then((res) => {
                return res.json();
            }).then((data) => {
                setTask(data);
            })
    }, [])

    function editTask() {
        if (task) {
            fetch(`${url}/${id}`, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(task)
            }).then(() => {
                console.log("Task Edit");
                setTask(null);
                return navigateHome("/");
            })
        }
    }

    function backHomePage() {
        return navigateHome("/");
    }

    function onChangeTitle(e) {
        const target = e.target.value;
        setTask({ ...task, title: target });
    }

    function onChangeDescription(e) {
        const target = e.target.value;
        setTask({ ...task, description: target });
    }
    function onChangeCheckbox(e) {
        const target = e.target.checked;
        if (target) {
            setTask({ ...task, priority: true });
        } else {
            setTask({ ...task, priority: false });
        }
    }


    if (task) {
        return (
            <div className="container-edit-page">
                <Form className="forms">
                    <FormControl w={400} mb={3} >
                        <FormLabel>Task Title:</FormLabel>
                        <Input onChange={onChangeTitle} type="text" name="title" defaultValue={task.title} />
                    </FormControl>

                    <FormControl w={400} mb={3}>
                        <FormLabel>Task Description:</FormLabel>
                        <Textarea onChange={onChangeDescription} name="description" defaultValue={task.description}></Textarea>
                    </FormControl>
                    <FormControl w={400} className='priority' mb={3}>
                        {task.priority ? <Checkbox onChange={onChangeCheckbox} name="priority" colorScheme='purple' defaultChecked /> :
                            <Checkbox onChange={onChangeCheckbox} name="priority" colorScheme='purple'></Checkbox>
                        }
                        <FormLabel ml={2} >Priority Task</FormLabel>
                    </FormControl>
                </Form>

                <div className="btn-editPage" >
                    <Button onClick={editTask} type='submit' bg="purple.400" color='white' mr={3}>Save</Button>
                    <Button onClick={backHomePage} type='submit' bg="purple.400" color='white'>Home</Button>
                </div>
            </div>
        )
    }
}

export default Edit;
