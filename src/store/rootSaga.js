import { all, fork } from "redux-saga/effects";
import { watchLogin } from "./Login/saga";
import {
  watchGetEmployees,
  watchDeleteEmployees,
  watchAddEmployees,
  watchChangeStatus,
} from "./Employees/Saga";
import {
  watchAddTask,
  watchDeleteTask,
  watchGetTasks,
  watchChangeTaskStatus,
  watchGetTasksById,
  watchGetAllCompletedTasks,
} from "./Tasks/Saga";
import { watchGetDashboardCount } from "./Dashboard/saga";

const rootSaga = function* () {
  yield all([
    fork(watchLogin),
    fork(watchGetEmployees),
    fork(watchDeleteEmployees),
    fork(watchAddEmployees),
    fork(watchChangeStatus),
    fork(watchGetTasks),
    fork(watchAddTask),
    fork(watchDeleteTask),
    fork(watchChangeTaskStatus),
    fork(watchGetTasksById),
    fork(watchGetDashboardCount),
    fork(watchGetAllCompletedTasks),
    // Other forks
  ]);
};

export default rootSaga;
