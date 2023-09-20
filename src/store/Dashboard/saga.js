import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  getDashboardCounts,
  getDashboardCountsSuccessAction,
  getDashboardCountsErrorAction,
} from "./Slice";

function* getDashboardCountsforUser(action) {
  try {
    const response = yield axios.get(
      `https://localhost:7234/Dashboard/${action.payload}`
    );
    yield put(getDashboardCountsSuccessAction(response.data));
  } catch (error) {
    yield put(getDashboardCountsErrorAction(error));
  }
}

export function* watchGetDashboardCount() {
  yield takeLatest(getDashboardCounts, getDashboardCountsforUser);
}
