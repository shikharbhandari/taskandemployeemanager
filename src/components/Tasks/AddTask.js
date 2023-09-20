import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "../../store/Employees/Slice";
import { useNavigate } from "react-router-dom";
import { addTask } from "../../store/Tasks/Slice";

function AddTask() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: employees } = useSelector((state) => state.employees);
  const [data, setData] = useState({
    title: "",
    assignedTo: "",
  });

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formdata = {
      title: data.title,
      assignedTo: data.assignedTo,
    };
    dispatch(addTask(formdata));
    navigate("/tasks");
  };

  return (
    <div className='d-flex flex-column align-items-center pt-4'>
      <h2>Create Task</h2>
      <form class='row g-3 w-50' onSubmit={handleSubmit}>
        <div class='col-12'>
          <label for='inputName' class='form-label'>
            Title
          </label>
          <input
            required
            type='text'
            class='form-control'
            id='title'
            placeholder='Enter Title'
            autoComplete='off'
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
        </div>
        <div class='col-12'>
          <label for='inputName' class='form-label'>
            Assign To
          </label>
          <select
            required
            className='form-select'
            aria-label='default select'
            onChange={(e) => setData({ ...data, assignedTo: e.target.value })}
          >
            <option value='0' selected>
              Select an employee
            </option>
            {employees.map((employee, index) => {
              return (
                <option key={index} value={employee.id}>
                  {employee.name}
                </option>
              );
            })}
          </select>
        </div>

        <div class='col-12 d-flex justify-content-center'>
          <button
            type='submit'
            className='btn btn-outline-warning'
            style={{ marginBottom: "15px" }}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
