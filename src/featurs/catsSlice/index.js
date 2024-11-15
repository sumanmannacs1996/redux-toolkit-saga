import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cats: [],
  isLoading: false,
  error: "",
};

export const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    fetchCatsStart: (state) => {
      state.isLoading = true;
      state.cats = [];
      state.error = "";
    },
    fetchCatsSuccess: (state, action) => {
      state.isLoading = false;
      state.cats = action.payload;
      state.error = "";
    },
    fertchCatsFailed: (state, action) => {
      state.isLoading = false;
      state.cats = [];
      state.error = action.payload;
    },
  },
});

export const { fetchCatsStart, fetchCatsSuccess, fertchCatsFailed } =
  catsSlice.actions;
export default catsSlice.reducer;
