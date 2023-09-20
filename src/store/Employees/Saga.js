import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
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
} from "./Slice";

function* getAllEmployees() {
  try {
    const response = yield axios.get(`https://localhost:7234/Employee`);
    yield put(getEmployeesSuccessAction(response.data));
  } catch (error) {
    yield put(getEmployeesErrorAction(error));
  }
}

function* deleteSingleEmployee(action) {
  try {
    const response = yield axios.put(
      `https://localhost:7234/Employee/${action.payload}`
    );
    yield put(deleteEmployeeSuccessAction(response.data));
  } catch (error) {
    yield put(deleteEmployeeErrorAction(error));
  }
}

function* addNewEmployee(action) {
  console.log(action);
  try {
    const response = yield axios.post(
      `https://localhost:7234/Employee/`,
      action.payload
    );
    yield put(addEmployeeSuccessAction(response.data));
  } catch (error) {
    yield put(addEmployeeErrorAction(error));
  }
}

function* employeeStatusChange(action) {
  try {
    const response = yield axios.put(
      `https://localhost:7234/changestatus/${action.payload}`
    );
    yield put(changeStatusSuccessAction(response.data));
  } catch (error) {
    yield put(changeStatusErrorAction(error));
  }
}

export function* watchGetEmployees() {
  yield takeLatest(getEmployees, getAllEmployees);
}

export function* watchDeleteEmployees() {
  yield takeLatest(deleteEmployee, deleteSingleEmployee);
}

export function* watchAddEmployees() {
  yield takeLatest(addEmployee, addNewEmployee);
}

export function* watchChangeStatus() {
  yield takeLatest(changeStatus, employeeStatusChange);
}
