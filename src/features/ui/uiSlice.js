import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleDarkmode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const { toggleDarkmode, setDarkMode } = uiSlice.actions;
export default uiSlice.reducer;