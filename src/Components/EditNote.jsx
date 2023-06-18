import React, { useState } from "react";
import { BiTrash, BiEdit } from "react-icons/bi";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { editNote } from "../redux/NoteSlice";

export default function EditNote({ note }) {
  const [open, setOpen] = useState(false);
  const [newNote, setNewNote] = useState({
    title: note.title,
    body: note.body,
  });

  const dispatch = useDispatch();

  const { title, body } = newNote;
  const handleChange = (e) => {
    setNewNote((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 3,
  };
  return (
    <div>
      <BiEdit className="edit-btn" onClick={handleOpen} />
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              let updatedNote = {
                title,
                body,
                id: note.id,
              };

              dispatch(editNote({ id: note.id, updatedNote }));

              setOpen(false);
            }}
            action=""
            style={{
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              justifyItems: "center",

              height: "100%",
              padding: 6,
            }}
          >
            <div>
              <label htmlFor="">title: </label>
              <input
                style={{
                  width: "100%",
                  marginBottom: 20,
                  height: 30,
                }}
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="name">note: </label>
              <textarea
                type="text"
                name="body"
                value={body}
                onChange={handleChange}
                style={{
                  width: "100%",
                  height: "200px",
                  marginTop: 10,
                  marginBottom: 20,
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                border: "none",
                backgroundColor: "#222438",
                color: "white",
                padding: 10,
              }}
            >
              update note
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
