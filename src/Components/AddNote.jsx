import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/NoteSlice';



const AddNote = () => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newNote = {
      id: uuid(),
      title: title,
      noteBody: noteBody,
    }

    // console.log(newNote);
    dispatch(addNote(newNote));

    setTitle("");
    setNoteBody("");
  };

  return (
    <div>
      
      <div>
      <form className="note-form" onSubmit={handleSubmit}>
        
        <label>Title</label>
        <input className="title-box"
          placeholder="Enter Title"
          value={title ||""}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />

        <label>Note</label>
        <textarea className="text-box"
          type="text"
          placeholder="Create note"
          value={noteBody ||""}
          onChange={(event) => {
            setNoteBody(event.target.value);
          }} />

        <button className="add-btn" type="submit">Add note</button>

      </form>
      </div>
    </div>
  )
}

export default AddNote