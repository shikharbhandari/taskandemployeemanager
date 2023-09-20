import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../../store/Login/Slice";

const Header = () => {
  const user = useSelector((state) => state.user.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAction());
    navigate("/Login");
  };

  return (
    <div className='row container-fluid'>
      <div
        className='d-flex justify-content-center'
        style={{
          backgroundColor: "#012a2d",
          color: "white",
        }}
      >
        <h6>Welcome {user.name}!</h6>
      </div>
      <nav
        class='navbar navbar-light h-200 justify-content-start'
        style={{
          backgroundColor: "rgb(68 125 112)",
          color: "white",
          fontFamily: "var(--bs-font-sans-serif)",
          fontsize: "5 rem",
          fontweight: "400",
          lineheight: "1.5",
          height: "60px",
        }}
      >
        <div className='col d-flex justify-content-start'>
          <Link
            to={"/"}
            class='navbar-brand text-white'
            style={{
              marginLeft: "20px",
              fontSize: "20px",
              fontWeight: "bolder",
            }}
          >
            CBRE
          </Link>
          <Link
            to={"/"}
            className='nav-link text-white'
            style={{ padding: "10px" }}
          >
            Dashboard
          </Link>
          {user.role === 1 && (
            <Link
              to='/employee'
              className='nav-link text-white'
              style={{ padding: "10px" }}
            >
              Employees
            </Link>
          )}
          <Link
            to={user.role === 1 ? "/tasks" : `/tasks/${user.id}`}
            className='nav-link text-white'
            style={{ padding: "10px" }}
          >
            Tasks
          </Link>
        </div>
        <Link
          className='nav-link'
          style={{ paddingRight: "20px" }}
          onClick={handleLogout}
        >
          Logout
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Header;
