import { createSlice } from "@reduxjs/toolkit";

const employeesInitialState = {
  data: [],
  isLoading: false,
  errors: "",
};

export const getEmployeesSlice = createSlice({
  name: "employees",
  initialState: employeesInitialState,
  reducers: {
    getEmployees: (state) => {
      state.isLoading = true;
      state.errors = "";
    },
    getEmployeesSuccessAction: (state, { payload: employees }) => {
      state.isLoading = false;
      state.data = employees;
    },
    getEmployeesErrorAction: (state, { payload: error }) => {
      state.isLoading = false;
      state.errors = error;
    },
    deleteEmployee: (state) => {
      state.isLoading = true;
      state.errors = "";
    },
    deleteEmployeeSuccessAction: (state, { payload: employees }) => {
      state.isLoading = false;
      state.data = employees;
    },
    deleteEmployeeErrorAction: (state, { payload: error }) => {
      state.isLoading = false;
      state.errors = error;
    },
    addEmployee: (state) => {
      state.isLoading = true;
      state.errors = "";
    },
    addEmployeeSuccessAction: (state, { payload: employees }) => {
      state.isLoading = false;
      state.data = employees;
    },
    addEmployeeErrorAction: (state, { payload: error }) => {
      state.isLoading = false;
      state.errors = error;
    },
    changeStatus: (state) => {
      state.isLoading = true;
      state.errors = "";
    },
    changeStatusSuccessAction: (state, { payload: employees }) => {
      state.isLoading = false;
      state.data = employees;
    },
    changeStatusErrorAction: (state, { payload: error }) => {
      state.isLoading = false;
      state.errors = error;
    },
  },
});

export const {
  getEmployees,
  getEmployeesSuccessAction,
  getEmployeesErrorAction,
  deleteEmployee,
  deleteEmployeeSuccessAction,
  deleteEmployeeErrorAction,
  addEmployee,
  addEmployeeSuccessAction,
  addEmployeeErrorAction,
  changeStatus,
  changeStatusSuccessAction,
  changeStatusErrorAction,
} = getEmployeesSlice.actions;
export default getEmployeesSlice.reducer;
