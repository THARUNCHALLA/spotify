import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  songs: [],
  currentSong: null,
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setCurrentSong: (state, action) => {
      const { updateData, song } = action.payload;
      state.songs = updateData;
      state.currentSong = song;
    },
  },
});

export const { setCurrentSong } = playlistSlice.actions;

export const store = configureStore({
  reducer: {
    playlist: playlistSlice.reducer,
  },
});
