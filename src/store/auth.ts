import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  loggedIn: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state): void {
      state.loggedIn = true;
    },
    logout(state): void {
      state.loggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
