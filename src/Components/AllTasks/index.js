import React, { useContext } from "react";
import CreateTask from "../CreateTask";
import TaskContext from "../../Services/TaskContext";

const AllTasks = ({ taskData }) => {
const context = useContext(TaskContext)

  return (
    <div>
        <CreateTask />
      {taskData.map((task, i) => (
        <div key={i}>
          <h3>{task.title}</h3>
          <div>
            <a href={`one-task/${task.id}`}> View Task </a>
            <button onClick={() => context.deleteTask(task.id)}>Delete This Task</button>
            <a href={`delete-task/${task.id}`}>Update Task</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllTasks;
