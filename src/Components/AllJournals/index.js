import React, { useContext } from "react";
import TaskContext from "../../Services/JournalContext.js";
import CreateJournal from "../CreateJournal";

const AllJournalsCom = ({ journalData }) => {
  const context = useContext(TaskContext);
  console.log(context);

  return (
    <div className="container header">
      <CreateJournal />
      <div>
        {journalData.map((journal, i) => (
          <div key={i} className="one-journal">
            <h3>{journal.title}</h3>
            <div>
              <a className="btn" href={`one-journal/${journal.id}`}>
                {" "}
                View Journal{" "}
              </a>
              <button
                className="btn"
                onClick={() => context.deleteJournal(journal.id)}
              >
                Delete This Journal
              </button>
              <a className="btn" href={`update-journal/${journal.id}`}>
                Update Journal
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllJournalsCom;
