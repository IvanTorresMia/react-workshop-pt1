import React, { useContext } from "react";
import TaskContext from "../../Services/JournalContext";
import { useParams } from "react-router-dom";

const UpdateJournal = () => {
  const context = useContext(TaskContext);
  let { id } = useParams();

  return (
    <div className="update-header">
      <form className="create-form" onSubmit={(e) => context.updateJouranl(id)}>
        <h3>Update Journal</h3>
        <label htmlFor="title">Update Title</label>
        <br />
        <input name="title" onChange={context.handleTitleChange} />
        <br />
        <label htmlFor="body">Update Body</label>
        <br />
        <textarea
          rows="20"
          cols="50"
          name="body"
          onChange={context.handleBodyChange}
        ></textarea>
        <br />
        <button
          className="btn"
          type="button"
          onClick={() => context.updateJournal(id)}
        >
          update
        </button>
      </form>
    </div>
  );
};

export default UpdateJournal;
