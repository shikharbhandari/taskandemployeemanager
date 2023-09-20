import { useEffect } from "react";
import Card from "../Common/cards/Card";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardCounts } from "../../store/Dashboard/Slice";

const Dashboard = () => {
  const user = useSelector((state) => state.user.data);
  const { data: dashboardCounts, isLoading } = useSelector(
    (state) => state.dashboardCounts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboardCounts(user.id));
  }, [dispatch, user.id]);

  return !isLoading ? (
    <div
      className='container-fuild d-flex justify-content-center gap-5'
      style={{
        marginTop: "10rem",
      }}
    >
      <Card
        header='Active Tasks'
        title={dashboardCounts.taskCount}
        toLink={user.role === 1 ? "/tasks" : `/tasks/${user.id}`}
      />
      {user.role === 1 && (
        <>
          <Card
            header='Active Employees'
            title={dashboardCounts.employeeCount}
            toLink='/employee'
          />
          <Card
            header='Active Admins'
            title={dashboardCounts.adminCount}
            toLink='/'
          />
        </>
      )}
    </div>
  ) : (
    <div className='d-flex justify-content-center'>
      <div className='spinner-border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
};

export default Dashboard;
