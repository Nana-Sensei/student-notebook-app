import React from "react";
import Note from "./Note";

const AllNotes = ({ title, body }) => {
  // console.log (state)
  const note = {
    title: title,
    body: body,
  };

  return (
    <div className="all-notes">
      <Note note={note} />
    </div>
  );
};

export default AllNotes;
