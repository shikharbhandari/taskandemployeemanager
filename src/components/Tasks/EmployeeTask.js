import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeTaskStatus,
  getTasksByEmployeeId,
} from "../../store/Tasks/Slice";
import { format } from "date-fns";
import "./Tasks.css";

function EmployeeTask() {
  const dispatch = useDispatch();
  const { data: tasks, isLoading } = useSelector((state) => state.tasks);
  const user = useSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(getTasksByEmployeeId(user.id));
  }, [dispatch, user.id]);


  const handleStatusChange = (id) => {
    dispatch(changeTaskStatus(id));
  };

  return (
    <div className='px-5 py-3'>
      <div className='d-flex justify-content-center mt-2'>
        <h3>Tasks</h3>
      </div>
      <div >
        <table id='tasks'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Status</th>
              <th>Created Date</th>
              <th>Completed Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          {!isLoading ? (
            <tbody>
              {tasks.map((task, index) => {
                return (
                  <tr key={index}>
                    <td>{task.id}</td>
                    <td>{task.title}</td>
                    <td>{task.status ? "Completed" : "Pending"}</td>
                    <td>{format(new Date(task.createdOn), "dd-MM-yyyy")}</td>
                    <td>
                      {task.completedOn
                        ? format(new Date(task.completedOn), "dd-MM-yyyy")
                        : "NA"}
                    </td>
                    <td>
                        <button
                          class='btn  dropdown-toggle'
                          type='button'
                          data-bs-toggle='dropdown'
                          aria-expanded='false'
                        >
                          Actions
                        </button>
                        <ul class='dropdown-menu'>
                          <li>
                            <div
                              class='dropdown-item'
                              onClick={(e) => handleStatusChange(task.id)}
                            >
                              {task.status ? "Pending" : "Completed"}
                            </div>
                          </li>
                        </ul>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <div class='d-flex justify-content-center'>
              <div class='spinner-border' role='status'>
                <span class='visually-hidden'>Loading...</span>
              </div>
            </div>
          )}
        </table>
      </div>
    </div>
  );
}

export default EmployeeTask;
