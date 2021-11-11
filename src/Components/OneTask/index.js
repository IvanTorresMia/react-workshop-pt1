import React, { useEffect, useState } from "react";
import API from "../../Services/API";
import { useParams } from "react-router-dom";

const OneTask = () => {
  const [task, setTask] = useState({});
  let { id } = useParams();

  useEffect(() => {
    const getTask = () => {
        API.getTaskById(id).then((res) => {
            setTask(res.data);
            console.log(res);
          });
    }
    getTask();
  }, []);





  

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.body}</p>
    </div>
  );
};

export default OneTask;
