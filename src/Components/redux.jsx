import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  songs: [],
  currentSong: null,
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    addSong: (state, action) => {
      state.songs.push(action.payload);
    },
    removeSong: (state, action) => {
      state.songs = state.songs.filter(song => song.id !== action.payload);
    },
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },
  },
});

export const { addSong, removeSong, setCurrentSong } = playlistSlice.actions;

export const store = configureStore({
  reducer: {
    playlist: playlistSlice.reducer, 
  },
});
