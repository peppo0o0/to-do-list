import { useState, useEffect } from "react";
import { TASK_URL, HEADERS } from "../constants/request";

export default function useTaskData() {
  const [tasks, setTasks] = useState([]);
  const [item, setItem] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
    try {
      const response = await fetch(TASK_URL);
      const data = await response.json();
      setTasks(data);
      setIsLoading(false);
    } catch (error) {
      console.log("Hubo un problema con la petición Fetch:" + error.message);
    }
  };

  const addTask = async () => {
    try {
      if (item.trim("")) {
        await fetch(TASK_URL, {
          method: "POST",
          headers: HEADERS,
          body: JSON.stringify({ task: item }),
        });
      }
      setItem("");
      loadData();
    } catch (error) {
      console.log("Hubo un problema con la petición Fetch:" + error.message);
    }
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`${TASK_URL}/${id}`, {
        method: "DELETE",
      });
      loadData();
    } catch (error) {
      console.log("Hubo un problema con la petición Fetch:" + error.message);
    }
  };

  const editTask = async (id, newValue) => {
    try {
      if (newValue) {
        await fetch(`${TASK_URL}/${id}`, {
          method: "PUT",
          headers: HEADERS,
          body: JSON.stringify({ task: newValue }),
        });
      }
      loadData();
    } catch (error) {
      console.log("Hubo un problema con la petición Fetch:" + error.message);
    }
  };

  const setNewItemValue = (e) => {
    let inputValue = e.target.value;
    setItem(inputValue);
  };

  const refreshTask = () => {
    setItem("");
    loadData();
  };

  const searchTask = () => {
    const filterTask = tasks.filter((task) =>
      task.task.toLowerCase().includes(item.toLowerCase())
    );
    setTasks(filterTask);
  };

  useEffect(() => {
    loadData();
    return () => {};
  }, []);

  return {
    tasks,
    item,
    isLoading,
    addTask,
    deleteTask,
    editTask,
    searchTask,
    setNewItemValue,
    refreshTask,
  };
}
