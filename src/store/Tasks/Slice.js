import { createSlice } from "@reduxjs/toolkit";

const tasksInitialState = {
  data: [],
  isLoading: false,
  errors: "",
};

export const gettasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    getTasks: (state) => {
      state.isLoading = true;
      state.errors = "";
    },
    getTasksSuccessAction: (state, { payload: tasks }) => {
      state.isLoading = false;
      state.data = tasks;
    },
    getTasksErrorAction: (state, { payload: error }) => {
      state.isLoading = false;
      state.errors = error;
    },
    getCompletedTasks: (state) => {
      state.isLoading = true;
      state.errors = "";
    },
    getCompletedTasksSuccessAction: (state, { payload: tasks }) => {
      state.isLoading = false;
      state.data = tasks;
    },
    getCompletedTasksErrorAction: (state, { payload: error }) => {
      state.isLoading = false;
      state.errors = error;
    },
    getTasksByEmployeeId: (state) => {
      state.isLoading = true;
      state.errors = "";
    },
    getTasksByEmployeeIdSuccessAction: (state, { payload: tasks }) => {
      state.isLoading = false;
      state.data = tasks;
    },
    getTasksByEmployeeIdErrorAction: (state, { payload: error }) => {
      state.isLoading = false;
      state.errors = error;
    },
    deleteTask: (state) => {
      state.isLoading = false;
      state.errors = "";
    },
    deleteTaskSuccessAction: (state, { payload: tasks }) => {
      console.log(tasks);
      state.isLoading = false;
      state.data = tasks;
    },
    deleteTaskErrorAction: (state, { payload: error }) => {
      state.isLoading = false;
      state.errors = error;
    },
    addTask: (state) => {
      state.isLoading = true;
      state.errors = "";
    },
    addTaskSuccessAction: (state, { payload: tasks }) => {
      state.isLoading = false;
      state.data = tasks;
    },
    addTaskErrorAction: (state, { payload: error }) => {
      state.isLoading = false;
      state.errors = error;
    },
    changeTaskStatus: (state) => {
      state.isLoading = false;
      state.errors = "";
    },
    changeTaskStatusSuccessAction: (state, { payload: tasks }) => {
      state.isLoading = false;
      state.data = tasks;
    },
    changeTaskStatusErrorAction: (state, { payload: error }) => {
      state.isLoading = false;
      state.errors = error;
    },
  },
});

export const {
  getTasks,
  getTasksSuccessAction,
  getTasksErrorAction,
  getCompletedTasks,
  getCompletedTasksSuccessAction,
  getCompletedTasksErrorAction,
  addTask,
  addTaskSuccessAction,
  addTaskErrorAction,
  deleteTask,
  deleteTaskSuccessAction,
  deleteTaskErrorAction,
  changeTaskStatus,
  changeTaskStatusSuccessAction,
  changeTaskStatusErrorAction,
  getTasksByEmployeeId,
  getTasksByEmployeeIdSuccessAction,
  getTasksByEmployeeIdErrorAction,
} = gettasksSlice.actions;
export default gettasksSlice.reducer;
