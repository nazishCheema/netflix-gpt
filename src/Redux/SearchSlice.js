import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: `search`,
  initialState: {
    toggleSearch: false,
    searchResult: null,
  },
  reducers: {
    toggleSearchView: (state) => {
      state.toggleSearch = !state.toggleSearch;
    },
    addSearchResult: (state, action) => {
      state.searchResult = action.payload;
    },
  },
});
export const { toggleSearchView, addSearchResult } = SearchSlice.actions;
export default SearchSlice.reducer;
