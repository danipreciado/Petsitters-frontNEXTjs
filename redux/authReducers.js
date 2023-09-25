import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
  name: "auth",
  initialState: { },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state ) => {
      state.value = null;
    }
  },
});

export const { login, logout } = authSlice.actions;
export const authSelector = (state) => state.auth.value;
export default authSlice.reducer;