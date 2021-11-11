import React, { useContext } from 'react';
import TaskContext from '../../Services/TaskContext';
import { useParams } from "react-router-dom";



const UpdateTask = () => {

 const context = useContext(TaskContext);
 let { id } = useParams();

    return (
        <div>
            <form onSubmit={(e) => context.updateTask(id)}>
                <label htmlFor="title">Update Title</label>
                <input name="title" onChange={context.handleTitleChange} />
                <label htmlFor="body">Update Body</label>
                <input name="body" onChange={context.handleBodyChange}/>
                <button type="button" onClick={(e) => context.updateTask(id)}>update</button>
            </form>
        </div>
    )
}

export default UpdateTask;