import { useForm } from "react-hook-form";
import { login } from "../../store/Login/Slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: user, errors: error } = useSelector((state) => state.user);

  if (user && user.role === 1) {
    navigate("/");
  }

  if (user && user.role === 0) {
    navigate(`/`);
  }

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
      <div className='p-8 rounded d-flex justify-content-center align-items-center w-25 border loginForm'>
        <form
          className='form-group login-form'
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              id='Username'
              placeholder='enter your user name'
              {...register("username", {
                required: "*username is required",
              })}
            />
            <p>{errors.username?.message}</p>
            <label htmlFor='Username'>Username</label>
          </div>
          <div className='form-floating'>
            <input
              type='password'
              className='form-control'
              id='floatingPassword'
              placeholder='Password'
              {...register("password", {
                required: "*password is required",
              })}
            />
            <p>{errors.password?.message}</p>
            <label htmlFor='floatingPassword'>Password</label>
          </div>
          {error && <p>Invalid credentials!</p>}
          <button type='submit' className='submit-btn'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
