import React, { useEffect, useState } from "react";
import API from "../../Services/API";
import { useParams } from "react-router-dom";

const OneJournal = () => {
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
  ƒ;

  return (
    <div className="view-journal">
      <h3>{journal.title}</h3>
      <p>{journal.body}</p>
    </div>
  );
};

export default OneJournal;
