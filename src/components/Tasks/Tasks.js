import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTask,
  getTasks,
  changeTaskStatus,
  getCompletedTasks,
} from "../../store/Tasks/Slice";
import { format } from "date-fns";
import "./Tasks.css";

function Tasks() {
  const dispatch = useDispatch();
  const { data: tasks, isLoading } = useSelector((state) => state.tasks);
  const [search, setSearch] = useState("");
  const [showingCompletedTasks, setShowingCompletedTasks] = useState(false);

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleStatusChange = (id) => {
    dispatch(changeTaskStatus(id));
  };

  const handleShowCompletedTasks = () => {
    if (showingCompletedTasks) {
      dispatch(getTasks());
      setShowingCompletedTasks(!showingCompletedTasks);
    } else {
      dispatch(getCompletedTasks());
      setShowingCompletedTasks(!showingCompletedTasks);
    }
  };

  let filteredSearchResults = tasks || [];

  if (search) {
    const lowerCaseSearch = search.toLowerCase();
    filteredSearchResults = tasks.filter((task) => {
      return (
        task.title.toLowerCase().includes(lowerCaseSearch) ||
        task.assignedTo.toLowerCase().includes(lowerCaseSearch) ||
        task.id.toString().includes(lowerCaseSearch)
      );
    });
  }

  return (
    <div className='px-5 py-3'>
      <div className='d-flex justify-content-center mt-2'>
        <h3>Tasks</h3>
      </div>
      <div className='d-flex'>
        <input
          type='text'
          class='form-control quick-search'
          placeholder='search...'
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className='btn btn-outline-warning float-end'
          onClick={() => handleShowCompletedTasks()}
          style={{ margin: "0px 15px 8px 0px" }}
        >
          {showingCompletedTasks ? "Pending Task" : "Completed Tasks"}
        </button>
        <Link
          to='/addtask'
          className='btn btn-outline-warning float-end'
          style={{ marginBottom: "8px" }}
        >
          Add Task
        </Link>
      </div>
      <div className='mt-3'>
        <table id='tasks'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Assigned To</th>
              <th>Status</th>
              <th>Created Date</th>
              <th>Completed Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          {!isLoading ? (
            <tbody>
              {filteredSearchResults.map((task, index) => {
                return (
                  <tr key={index}>
                    <td>{task.id}</td>
                    <td>{task.title}</td>
                    <td>{task.assignedTo}</td>
                    <td>{task.status ? "Completed" : "Pending"}</td>
                    <td>{format(new Date(task.createdOn), "dd-MM-yyyy")}</td>
                    <td>
                      {task.completedOn
                        ? format(new Date(task.completedOn), "dd-MM-yyyy")
                        : "NA"}
                    </td>
                    <td>
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
                            onClick={(e) => handleDelete(task.id)}
                          >
                            Delete
                          </div>
                        </li>
                        <li>
                          <div
                            className='dropdown-item'
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
            <div className='spinner-border' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </div>
          )}
        </table>
      </div>
    </div>
  );
}

export default Tasks;
