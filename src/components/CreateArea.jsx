import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="note-area">
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={note.title}
        ></input>
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        ></textarea>
        <button onClick={handleClick}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
