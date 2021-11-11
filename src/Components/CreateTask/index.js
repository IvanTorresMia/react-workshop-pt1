import React, { useContext } from "react";
import TaskContext from "../../Services/TaskContext";
//dummy component

const CreateTask = () => {


const context = useContext(TaskContext)


    return (
        <div>
            <form onSubmit={context.handleSubmit}>
                <label htmlFor="title">Title Of Task</label>
                <input name="title" onChange={context.handleTitleChange}></input>
                <label htmlFor="body">Title Of Task</label>
                <input name="body" onChange={context.handleBodyChange}></input>
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}

export default CreateTask;