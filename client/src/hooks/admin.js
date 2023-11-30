import { useEffect, useState } from "react";
import { USER_URL } from "../constants/request";

export default function useAdminSettings() {
  const [data, setData] = useState({ user_total: 0, task_total: 0 });

  const loadData = async () => {
    try {
      const response = await fetch(USER_URL);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log("Hubo un problema con la petición Fetch:" + error.message);
    }
  };

  useEffect(() => {
    loadData();
    return () => {};
  }, []);

  return data;
}
