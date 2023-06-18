import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

export const NoteSlice = createSlice({
  name: "notes",
  initialState: initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes = [...state.notes, action.payload];
    },

    editNote: (state, action) => {
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload.updatedNote;
        }
        return note;
      });
      console.log(action.payload.updatedNote);
      console.log(action.payload.id);
    },

    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) =>
        note.id !== action.payload ? note : null
      );
    },
  },
});

export const { addNote, editNote, deleteNote } = NoteSlice.actions;

export default NoteSlice.reducer;
