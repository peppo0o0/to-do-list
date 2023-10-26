import { useState, useEffect } from 'react'
import './App.css'
import List from './components/List'
const apiUrl = 'http://localhost:3000/api/task'

function App() {
  const [tasks, setTasks ] = useState([])
  const [item, setItem] = useState('')
  const [isLoading, setIsLoading] = useState(true);
  
  // GET
  const loadData = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setTasks(data); 
        setIsLoading(false); 
      });
  }

  useEffect(() => {
    loadData()
    return () => {}
  }, []);

  // POST
  const addTask = async () => {
    if (item.trim()) {
      await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task: item }), 
      });
      setItem('')
      loadData()
    }
  };

  // DELETE
  async function deleteTask(id) {
    await fetch(`${apiUrl}/${id}`,{
      method: 'DELETE'
    });
    loadData()
  };

  // PUT
  const editTask = async (id, newValue) => {
    if (newValue) {
      await fetch(`${apiUrl}/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ task: newValue }),
        });
        loadData()
    }
  };

  const backToTasks = () => {
    setItem('')
    loadData()
  }

  const searchTask = () => {
    const filterTask = tasks.filter(task => task.task.toLowerCase().includes(item.toLowerCase()));
    setTasks(filterTask);
  }

  const setNewItemValue = (e) => {
    let inputValue = e.target.value;
    setItem(inputValue)
  }

  const buttonStyle = {
    marginLeft: '20px',
    color: 'red !important'
  }

  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <>
      <h1>To Do List</h1>
      <div id="nav-bar">
      <input value={item} type="text" placeholder='Write your task...' onChange={setNewItemValue} />
      <button style={buttonStyle} onClick={addTask}>Add</button>
      <button style={buttonStyle} onClick={searchTask}>Search</button>
      <button style={buttonStyle} onClick={backToTasks}>Back</button>
      </div>
      <div id="task-list">
        <List tasks={tasks} deleteItem={deleteTask} editItem={editTask}/>
      </div>
    </>
  )
}

export default App