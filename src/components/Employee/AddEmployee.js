import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../../store/Employees/Slice";
import { useDispatch } from "react-redux";

function AddEmployee() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    salary: "",
    username: "",
    role: 0,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    // const formdata = new FormData();
    const formdata = {
      name: data.name,
      email: data.email,
      password: data.password,
      salary: data.salary,
      username: data.username,
      role: data.role,
    };

    dispatch(addEmployee(formdata));
    navigate("/employee");
  };
  return (
    <div className='d-flex flex-column align-items-center pt-4'>
      <h2>Add Employee</h2>
      <form class='row g-3 w-50' onSubmit={handleSubmit}>
        <div class='col-12'>
          <label for='inputName' class='form-label'>
            Name
          </label>
          <input
            type='text'
            class='form-control'
            id='inputName'
            placeholder='Enter Name'
            autoComplete='off'
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div class='col-12'>
          <label for='inputName' class='form-label'>
            Username
          </label>
          <input
            type='text'
            class='form-control'
            id='inputUsername'
            placeholder='Enter Username'
            autoComplete='off'
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
        </div>
        <div class='col-12'>
          <label for='inputEmail4' class='form-label'>
            Email
          </label>
          <input
            type='email'
            class='form-control'
            id='inputEmail4'
            placeholder='Enter Email'
            autoComplete='off'
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div class='col-12'>
          <label for='inputPassword4' class='form-label'>
            Password
          </label>
          <input
            type='password'
            class='form-control'
            id='inputPassword4'
            placeholder='Enter Password'
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div class='col-12'>
          <label for='inputSalary' class='form-label'>
            Salary
          </label>
          <input
            type='number'
            class='form-control'
            id='inputSalary'
            placeholder='Enter Salary'
            autoComplete='off'
            onChange={(e) => setData({ ...data, salary: e.target.value })}
          />
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

export default AddEmployee;
