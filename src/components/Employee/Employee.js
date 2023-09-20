import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getEmployees,
  deleteEmployee,
  changeStatus,
} from "../../store/Employees/Slice";
import "./Employee.css";

function Employee() {
  const dispatch = useDispatch();
  const { data: employees, isLoading } = useSelector(
    (state) => state.employees
  );

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };

  const handleStatusChange = (id) => {
    dispatch(changeStatus(id));
  };

  return (
    <div className='px-5 py-3'>
      <div className='d-flex justify-content-center mt-2'>
        <h3>Employees</h3>
      </div>
      <Link
        to='/createemployee'
        className='btn btn-outline-warning float-end'
        style={{ marginBottom: "15px" }}
      >
        Add Employee
      </Link>
      <div className='mt-3'>
        <table id='employee'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {!isLoading ? (
            <tbody>
              {employees.map((employee, index) => {
                return (
                  <tr key={index}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.username}</td>
                    <td>{employee.email}</td>
                    <td>{employee.salary}</td>
                    <td>{employee.isActive ? "Active" : "Inactive"}</td>
                    <td>
                      <>
                        <button
                          className='btn  dropdown-toggle'
                          type='button'
                          data-bs-toggle='dropdown'
                          aria-expanded='false'
                        >
                          Actions
                        </button>
                        <ul className='dropdown-menu'>
                          <li>
                            <div
                              className='dropdown-item'
                              onClick={(e) => handleDelete(employee.id)}
                            >
                              Delete
                            </div>
                          </li>
                          <li>
                            <div
                              className='dropdown-item'
                              onClick={(e) => handleStatusChange(employee.id)}
                            >
                              {employee.isActive ? "Deactivate" : "Activate"}
                            </div>
                          </li>
                        </ul>
                      </>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <div className='d-flex justify-content-center'>
              <div className='spinner-border' role='status'>
                <span className='visually-hidden'>Loading...</span>
              </div>
            </div>
          )}
        </table>
      </div>
    </div>
  );
}

export default Employee;
