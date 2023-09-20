import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { login, loginSuccessAction, loginErrorAction } from "./Slice";

function* userLogin(action) {
  try {
    const response = yield axios.post(
      `https://localhost:7234/login`,
      action.payload
    );
    yield put(loginSuccessAction(response.data));
  } catch (error) {
    yield put(loginErrorAction(error));
  }
}

export function* watchLogin() {
  yield takeLatest(login, userLogin);
}
