import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
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
} from "./Slice";

function* getAllTasks() {
  try {
    const response = yield axios.get(`https://localhost:7234/Tasks`);
    yield put(getTasksSuccessAction(response.data));
  } catch (error) {
    yield put(getTasksErrorAction(error));
  }
}

function* getAllCompletedTasks() {
  try {
    const response = yield axios.get(`https://localhost:7234/completed`);
    yield put(getCompletedTasksSuccessAction(response.data));
  } catch (error) {
    yield put(getCompletedTasksErrorAction(error));
  }
}

function* getAllTasksByEmployeeId(action) {
  try {
    const response = yield axios.get(
      `https://localhost:7234/Tasks/${action.payload}`
    );
    yield put(getTasksByEmployeeIdSuccessAction(response.data));
  } catch (error) {
    yield put(getTasksByEmployeeIdErrorAction(error));
  }
}

function* deleteSingleTask(action) {
  try {
    const response = yield axios.put(
      `https://localhost:7234/Tasks/${action.payload}`
    );
    yield put(deleteTaskSuccessAction(response.data));
  } catch (error) {
    yield put(deleteTaskErrorAction(error));
  }
}

function* addNewTask(action) {
  try {
    const response = yield axios.post(
      `https://localhost:7234/Tasks`,
      action.payload
    );
    yield put(addTaskSuccessAction(response.data));
  } catch (error) {
    yield put(addTaskErrorAction(error));
  }
}

function* taskStatusChange(action) {
  try {
    const response = yield axios.put(
      `https://localhost:7234/UpdateStatus/${action.payload}`
    );
    yield put(changeTaskStatusSuccessAction(response.data));
  } catch (error) {
    yield put(changeTaskStatusErrorAction(error));
  }
}

export function* watchGetTasks() {
  yield takeLatest(getTasks, getAllTasks);
}

export function* watchGetAllCompletedTasks() {
  yield takeLatest(getCompletedTasks, getAllCompletedTasks);
}

export function* watchGetTasksById() {
  yield takeLatest(getTasksByEmployeeId, getAllTasksByEmployeeId);
}

export function* watchDeleteTask() {
  yield takeLatest(deleteTask, deleteSingleTask);
}

export function* watchAddTask() {
  yield takeLatest(addTask, addNewTask);
}

export function* watchChangeTaskStatus() {
  yield takeLatest(changeTaskStatus, taskStatusChange);
}
