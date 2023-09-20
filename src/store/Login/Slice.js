import { createSlice } from "@reduxjs/toolkit";

const loginInitialState = {
  data: null,
  isLoading: false,
  errors: "",
};

export const loginSlice = createSlice({
  name: "user",
  initialState: loginInitialState,
  reducers: {
    login: (state) => {
      state.isLoading = true;
      state.errors = "";
    },
    loginSuccessAction: (state, { payload: user }) => {
      state.isLoading = false;
      state.data = user;
    },
    loginErrorAction: (state, { payload: error }) => {
      state.isLoading = false;
      state.errors = error;
    },
    logoutAction: (state) => {
      state.data = null;
    },
  },
});

export const { login, loginSuccessAction, loginErrorAction, logoutAction } =
  loginSlice.actions;
export default loginSlice.reducer;
