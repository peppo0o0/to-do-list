import "../App.css";
import { useSession } from "../hooks/session";
import useTaskData from "../hooks/task";
import useAdminSettings from "../hooks/admin";
import "../assets/css/responsive.css";

export default function AdminPage() {
  // you are gonna show the user total and task total
  // count to task and user table
  // select count(*) from task
  // response example => { user_total: 40, task_total: 49 }
  const { logoutSession } = useSession();
  const { redirectToDoList } = useTaskData();
  const { user_total, task_total } = useAdminSettings();

  return (
    <>
      <h1 id="welcome-h1-admin">Admin Dashboard</h1>
      <div>
        <button
          className="top-right-button"
          id="logout-button"
          onClick={logoutSession}
        >
          <i className="fa-solid fa-right-from-bracket" />
        </button>

        <button
          className="admin-dashboard-top-button"
          onClick={redirectToDoList}
        >
          <i className="fa-solid fa-list" />
        </button>
      </div>
      <div id="count-user-task-container">
        <h2>Users in Database: {user_total}</h2>
        <h2>Tasks in Database: {task_total}</h2>
      </div>
    </>
  );
}
