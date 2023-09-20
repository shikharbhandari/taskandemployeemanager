import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import ProtectedRoute from "./Protectedroute";
import Header from "./components/Header/Header";
import Employee from "./components/Employee/Employee";
import AddEmployee from "./components/Employee/AddEmployee";
import Tasks from "./components/Tasks/Tasks";
import AddTask from "./components/Tasks/AddTask";
import EmployeeTask from "./components/Tasks/EmployeeTask";
import Dashboard from "./components/Dashboard/Dashboard";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Header />
            </ProtectedRoute>
          }
        >
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='createemployee' element={<AddEmployee />}></Route>
          <Route path='employee' element={<Employee />}></Route>
          <Route path='tasks' element={<Tasks />}></Route>
          <Route path='tasks/:id' element={<EmployeeTask />} />
          <Route path='addtask' element={<AddTask />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
