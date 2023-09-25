import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: '',
  searchType: 'name',
};

export const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSearchType: (state, action) => {
      state.searchType = action.payload;
    }
  },
});


export const { setSearchQuery } = searchSlice.actions;
export const { setSearchType } = searchSlice.actions;



export const selectSearchQuery = (state) => state.search.searchQuery;

export const selectSearchType = (state) => state.search.searchType;

export default searchSlice.reducer;


