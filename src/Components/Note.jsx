import React, { useState } from "react";
import { BiTrash, BiEdit } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteNote } from "../redux/NoteSlice";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { editNote } from "../redux/NoteSlice";
import EditNote from "./EditNote";

const Note = ({ note }) => {
  const state = useSelector((state) => {
    return state.notes;
  });
  const dispatch = useDispatch();

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   let updatedNote = {
  //     title,
  //     body,
  //     id: note.id,
  //   };

  //   dispatch(editNote({ id: note.id, updatedNote }));

  //   setOpen(false);
  // };

  return (
    <div>
      {state.notes.map((note) => {
        return (
          <div key={note.id}>
            <div className="note-card">
              <div className="note-con">
                <div className="note-header">
                  <span>
                    <h2>{note.title}</h2>
                  </span>
                  <small>Date:{note.timeStamp}</small>
                </div>
                <p className="note-text">{note.body}</p>
              </div>

              <div className="btns note-footer">
                <EditNote note={note} />
                <BiTrash
                  className="delete-btn"
                  onClick={() => dispatch(deleteNote(note.id))}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Note;
