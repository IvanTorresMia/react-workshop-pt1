import "./App.css";
import API from "./Services/API";
import React, { useState, useEffect } from "react";
import AllTasks from "./Components/AllTasks";
import OneTask from "./Components/OneTask";
import TaskContext from "./Services/TaskContext";
import UpdateTask from "./Components/UpdateTask";
import NavBar from "./Components/NavBar";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [allTasks, setAllTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    body: "",
  });

  const [resfresh, setRefresh] = useState({ count: 0 });
  const navigate = useNavigate();

  const contextObject = {
    handleSubmit: (e) => {
      e.preventDefault();
      API.createTask(newTask).then((res) => {
        console.log(res);
        setRefresh({ ...resfresh, count: resfresh.count + 1 });
      });
    },
    handleTitleChange: (e) => {
      const { value } = e.target;
      setNewTask({ ...newTask, title: value });
      console.log(newTask);
    },
    handleBodyChange: (e) => {
      const { value } = e.target;
      setNewTask({ ...newTask, body: value });
      console.log(newTask);
    },
    deleteTask: (id) => {
      API.deleteTask(id).then((res) => {
        console.log(res);
        setRefresh({ ...resfresh, count: resfresh.count + 1 });
      });
    },
    updateTask: (id) => {
      API.updateTask(id, newTask).then((res) => {
        console.log(res);
        navigate("/");
        setRefresh({ ...resfresh, count: resfresh.count + 1 });
      });
    },
  };

  useEffect(() => {
    getAll();
  }, []);

  useEffect(() => {
    getAll();
  }, [resfresh]);

  const getAll = () => {
    API.getTask().then((res) => {
      setAllTasks(res.data);
    });
  };

  return (
    <div>
      <TaskContext.Provider value={contextObject}>
      <NavBar />
        <Routes>
          <Route path="/" exact element={<AllTasks taskData={allTasks} />} />
          <Route path="/one-task/:id" element={<OneTask />} />
          <Route path="/delete-task/:id" element={<UpdateTask />} />
        </Routes>
      </TaskContext.Provider>
    </div>
  );
}

export default App;
