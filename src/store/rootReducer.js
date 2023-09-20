import dashboardCountsSlice from "./Dashboard/Slice";
import getEmployeesSlice from "./Employees/Slice";
import loginSlice from "./Login/Slice";
import gettasksSlice from "./Tasks/Slice";

const rootReducers = {
  user: loginSlice,
  employees: getEmployeesSlice,
  tasks: gettasksSlice,
  dashboardCounts: dashboardCountsSlice,
};

export default rootReducers;
