import React from 'react';
import { BiTrash, BiEdit } from 'react-icons/bi';
import { useSelector } from 'react-redux';


const Note = ({ note }) => {

  const state = useSelector((state) => {
    return state.noteReducer;
  })

  return (
    <div>
      {state.notes.map((note) => {
        return <div key={note.id}>
          <div className="note-card">
          <div className="note-con">
          <div className="note-header">
            <span><h2>{note.title}</h2></span>
            <small>Date</small>
          </div>
          <p className="note-text">{note.noteBody}</p>
          </div>

          <div className="btns note-footer">
            <BiEdit className="edit-btn" />
            <BiTrash className="delete-btn" />
          </div>
          </div>
        </div>
      })}
    </div>
  )
}

export default Note;