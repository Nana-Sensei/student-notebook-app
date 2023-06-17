import { createSlice } from '@reduxjs/toolkit';

const initialState ={
  notes:[],
};

export const NoteSlice = createSlice({
  name: "notes",
  initialState: initialState,
  reducers: {

    addNote: (state, action)=>{
      state.notes=[...state.notes, action.payload];
    },

    editNote: ()=>{},

    deleteNote: ()=>{},
  },
})


export const {addNote, editNote , deleteNote} = NoteSlice.actions

export default NoteSlice.reducer