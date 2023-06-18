import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/NoteSlice";

const AddNote = ({ title, body, setTitle, setBody }) => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    let today = new Date();
    today = today.toString();
    today = today.slice(0, 15);
    // let time =
    //   today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    const newNote = {
      id: uuid(),
      title: title,
      body: body,
      timeStamp: today,
    };

    console.log(today);

    console.log(newNote);
    dispatch(addNote(newNote));

    setTitle("");
    setBody("");
  };

  return (
    <div>
      <div>
        <form className="note-form" onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            className="title-box"
            placeholder="Enter Title"
            value={title || ""}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />

          <label>Note</label>
          <textarea
            className="text-box"
            type="text"
            placeholder="Create note"
            value={body || ""}
            onChange={(event) => {
              setBody(event.target.value);
            }}
          />

          <button className="add-btn" type="submit">
            Add note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
