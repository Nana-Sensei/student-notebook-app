import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './NoteSlice';


const store = configureStore({
  reducer: {
    noteReducer: noteReducer
  },
});

export default store