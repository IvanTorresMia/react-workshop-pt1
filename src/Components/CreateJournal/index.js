import React, { useContext } from "react";
import TaskContext from "../../Services/JournalContext";
//dummy component

const CreateJournal = () => {
  const context = useContext(TaskContext);

  return (
    <div>
      <form onSubmit={context.handleSubmit} className="forms">
        <label htmlFor="title">Title Of Journals</label>
        <br />
        <input name="title" onChange={context.handleTitleChange}></input>
        <br />
        <label htmlFor="body">Body Of Journal</label>
        <br />
        <textarea
          rows="20"
          cols="50"
          name="body"
          onChange={context.handleBodyChange}
        ></textarea>
        <br />
        <button className="btn" type="submit">
          Add Journal
        </button>
      </form>
    </div>
  );
};

export default CreateJournal;
