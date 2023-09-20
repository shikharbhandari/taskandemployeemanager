import { createSlice } from "@reduxjs/toolkit";

const dashboardCountsInitialState = {
  data: null,
  isLoading: true,
  errors: "",
};

export const dashboardCountsSlice = createSlice({
  name: "dashboardCounts",
  initialState: dashboardCountsInitialState,
  reducers: {
    getDashboardCounts: (state) => {
      state.isLoading = true;
      state.errors = "";
    },
    getDashboardCountsSuccessAction: (state, { payload: user }) => {
      state.isLoading = false;
      state.data = user;
    },
    getDashboardCountsErrorAction: (state, { payload: error }) => {
      state.isLoading = false;
      state.errors = error;
    },
  },
});

export const {
  getDashboardCounts,
  getDashboardCountsSuccessAction,
  getDashboardCountsErrorAction,
} = dashboardCountsSlice.actions;
export default dashboardCountsSlice.reducer;
