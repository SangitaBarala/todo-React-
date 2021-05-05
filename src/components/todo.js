import React, {useState} from "react";
import {useForm} from "react-hook-form";
import List from "./list";
import './todo.css'

const Todo = ()=>{
    const {register, handleSubmit, formState:{errors}} = useForm()
    const [tasks, setTasks] = useState([])
    const onSubmit = (formData, event)=>{
        //console.log("It works")
        setTasks(currentValue => [...currentValue, formData.task ])
        event.target.reset()
    }
    return (
        <div class="bg">
            <div class="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div class="row">
                    <div class="col-12">
                        <h1 class="title">My Todo App</h1>
                    </div>
                    <div class="col-10">
                        <input type="text"  name="task" class="form-control" placeholder="Enter a task" {...register('task', {required: true})}/>
                        {errors.task && <p class="errors">Please enter a valid value</p>}
                    </div>
                    <div class="col-2">
                        <input type="submit" class="btn btn-primary"/>
                    </div>
                </div>
                </form>
                <div>
                    <ol class="taskColor">
                       <List taskList={tasks}/>
                    </ol>
                </div>
            </div>
        </div>

    )
}
export default Todo