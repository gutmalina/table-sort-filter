import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
  isLoading: false,
  errors: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsersFetch: (state) => {
      state.isLoading = true;
    },
    getUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    },
    getUsersFailure: (state, action) => {
      state.errors = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getUsersFetch, getUsersSuccess, getUsersFailure } =
  usersSlice.actions;

export default usersSlice.reducer;
