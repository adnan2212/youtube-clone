import { createSlice } from "@reduxjs/toolkit";

const APP_INITIAL_STATE = {
  isMenuOpen: true,
};

const appSlice = createSlice({
  name: "app",
  initialState: APP_INITIAL_STATE,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = appSlice.actions;

export const appReducer = appSlice.reducer;
