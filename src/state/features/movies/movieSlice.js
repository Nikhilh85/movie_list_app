import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  searchQuery: "",
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
    resetPage: (state) => {
      state.page = 1;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { incrementPage, resetPage, setSearchQuery } = movieSlice.actions;
export default movieSlice.reducer;
