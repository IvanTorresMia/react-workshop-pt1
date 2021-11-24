import React, { useContext, useEffect, useState } from "react";
import API from "../../Services/API";
import { useParams } from "react-router-dom";
import JournalContext from "../../Services/JournalContext";

const OneJournal = () => {

  const context = useContext(JournalContext);
  const [journal, setJournal] = useState({});
  let { id } = useParams();

  useEffect(() => {
    const getJournal = () => {
      API.getJournalById(id).then((res) => {
        setJournal(res.data);
        console.log(res);
      });
    };
    getJournal();
  }, []);
  

  return (
    <div className="view-journal">
      <h3>{journal.title}</h3>
      <p>{journal.body}</p>
      <button className="btn" onClick={() => context.deleteJournal(journal.id)}>Delete</button>
      <a className="btn" href={`/update-journal/:${journal.id}`}>Update Journal</a>
    </div>
  );
};

export default OneJournal;
