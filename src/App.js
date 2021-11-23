import "./App.css";
import API from "./Services/API";
import React, { useState, useEffect } from "react";
import OneJournal from "./Components/OneJournal";
import JournalContext from "./Services/JournalContext";
import UpdateJournal from "./Components/UpdateJournal";
import NavBar from "./Components/NavBar";
import AllJournalsCom from "./Components/AllJournals";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [allJournals, setAllJournals] = useState([]);
  const [newJournal, setNewJournal] = useState({
    title: "",
    body: "",
  });

  const [resfresh, setRefresh] = useState({ count: 0 });
  const navigate = useNavigate();

  const contextObject = {
    handleSubmit: (e) => {
      e.preventDefault();
      API.createJournal(newJournal).then((res) => {  
        console.log(res);
        setRefresh({ ...resfresh, count: resfresh.count + 1 });
      });
    },
    handleTitleChange: (e) => {
      const { value } = e.target;
      setNewJournal({ ...newJournal, title: value });
      console.log(newJournal);
    },
    handleBodyChange: (e) => {
      const { value } = e.target;
      setNewJournal({ ...newJournal, body: value });
      console.log(newJournal);
    },
    deleteJournal: (id) => {
      API.deleteJournal(id).then((res) => {
        console.log(res);
        setRefresh({ ...resfresh, count: resfresh.count + 1 });
      });
    },
    updateJournal: (id) => {
      API.updateJournal(id, newJournal).then((res) => {
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
    API.getAll().then((res) => {
      setAllJournals(res.data);
    });
  };

  return (
    <div>
      <JournalContext.Provider value={contextObject}>
      <NavBar />
        <Routes>
          <Route path="/" exact element={<AllJournalsCom journalData={allJournals} />} />
          <Route path="/one-journal/:id" element={<OneJournal />} />
          <Route path="/delete-journal/:id" element={<UpdateJournal />} />
        </Routes>
      </JournalContext.Provider>
    </div>
  );
}

export default App;
