import { Button, Checkbox, FormControl, FormLabel, Input, Textarea, } from '@chakra-ui/react';
import { useState } from 'react';
import { Form, useNavigate } from "react-router-dom"
import Item from '../Items';


function Newtask() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [checked, setChecked] = useState(false);
    const url = 'https://api-fake-json-gdep.onrender.com/tasks'
    const navigateHome = useNavigate();

    function onChangeText(e) {
        const target = e.target.value;
        setTitle(target);
    }
    function onChangeDescription(e) {
        const target = e.target.value;
        setDescription(target);
    }
    function onChangeChecked(e) {
        const target = e.target.checked;
        if(target){
            setChecked(!checked);
        }
    }

    function onClickSubmit(e) {
        e.preventDefault();
        if(title){
            let task = new Item(title,description);
            if(checked){
                 task.priority = true;
            }
            fetch(url,{
                method:'POST',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(task)
            }).then(() =>{
                console.log("New task");
                setDescription("");
                setTitle("");
                return navigateHome("/");
            })
        }
    }

    return (
        
        <Form  className='forms-tasks'>
            <FormControl isRequired w={400} mb={3} >
                <FormLabel>Task Title:</FormLabel>
                <Input maxLength={40} onChange={onChangeText} type="text" name="title"  focusBorderColor='purple.400'placeholder='Task Title' />
            </FormControl>

            <FormControl w={400} mb={3}>
                <FormLabel>Task Description:</FormLabel>
                <Textarea maxLength={200} onChange={onChangeDescription} name="description" focusBorderColor='purple.400'placeholder='Enter a descripition for the task'></Textarea>
            </FormControl>

            <FormControl w={400} className='priority' mb={3}>
                <Checkbox onChange={onChangeChecked} name="priority" colorScheme='purple'></Checkbox>
                <FormLabel ml={2} >Priority Task</FormLabel>
            </FormControl>

            <Button onClick={onClickSubmit} type='submit' bg="purple.400" color='white'>Submit</Button>
        </Form>
    )
}

export default Newtask;