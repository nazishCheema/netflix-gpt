import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: `config`,
  initialState: {
    preferedLang: `en`,
  },
  reducers: {
    changeLang: (state, action) => {
      state.preferedLang = action.payload;
    },
  },
});
export const { changeLang } = configSlice.actions;
export default configSlice.reducer;
