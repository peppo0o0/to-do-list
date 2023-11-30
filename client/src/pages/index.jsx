import List from "../components/List";
import useTaskData from "../hooks/task";
import { useSession } from "../hooks/session";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Index() {
  const {
    tasks,
    item,
    isLoading,
    deleteTask,
    editTask,
    addTask,
    searchTask,
    setNewItemValue,
    refreshTask,
  } = useTaskData();

  const { session, logoutSession } = useSession();
  const navigate = useNavigate();
  const buttonStyle = {
    marginLeft: "20px",
    color: "red !important",
  };

  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <>
      <h1 id="dashboard-title">To Do List</h1>
      <div id="nav-bar">
        <input
          value={item}
          type="text"
          placeholder="Write your task..."
          onChange={setNewItemValue}
        />

        <button
          className="fa-solid fa-plus"
          style={buttonStyle}
          onClick={addTask}
        />
        <button
          className="fa-solid fa-magnifying-glass"
          style={buttonStyle}
          onClick={searchTask}
        />
        <button
          className="fa-solid fa-arrows-rotate"
          style={buttonStyle}
          onClick={refreshTask}
        />
      </div>
      <div id="task-list">
        <List tasks={tasks} deleteItem={deleteTask} editItem={editTask} />
      </div>
      <button
        className="top-right-button"
        id="logout-button"
        onClick={logoutSession}
      >
        <i className="fa-solid fa-right-from-bracket" />
      </button>
      <div>
        {session.role === "admin" && (
          <button className="admin-dashboard-top-button" onClick={() => navigate("/admin")}>
            <i className="fa-solid fa-user"/>
          </button>
        )}
      </div>
    </>
  );
}
