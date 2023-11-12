import "./App.css";
import List from "./components/List";
import useTaskData from "./hooks/task";
import { useSession } from "./hooks/session";
// import useLoginUser from "./hooks/login";
function App() {
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

  const { logoutSession, session } = useSession();
  // const { session } = useLoginUser();
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
      <h1>{session.isLogged ? "Estoy loggeado" : "no esta logeado"}</h1>
      <h1>To Do List</h1>
      <div id="nav-bar">
        <input
          value={item}
          type="text"
          placeholder="Write your task..."
          onChange={setNewItemValue}
        />
        <button style={buttonStyle} onClick={addTask}>
          Add
        </button>
        <button style={buttonStyle} onClick={searchTask}>
          Search
        </button>
        <button style={buttonStyle} onClick={refreshTask}>
          Back
        </button>
      </div>
      <div id="task-list">
        <List tasks={tasks} deleteItem={deleteTask} editItem={editTask} />
      </div>
      <button id="sign-in-button" onClick={logoutSession}>
        Logout
      </button>
    </>
  );
}

export default App;
