import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { USER_URL, HEADERS } from "../constants/request";
import { useSession } from "./session";

export default function useLoginUser() {
  const { session, setSession, setLocalStorageSession } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const response = await fetch(`${USER_URL}/login`, {
        method: "POST",
        headers: HEADERS,
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        const newSession = {
          name: data.name,
          email,
          isLogged: true,
        };
        setSession(newSession);
        setLocalStorageSession(newSession);
        navigate("/");
      } else {
        const error = await response.json();
        alert(`error: ${response.status}, message: ${error}`);
      }
    } catch (error) {
      throw error;
    }
  };

  const loginButton = async () => {
    try {
      if (email.trim() && password.trim()) {
        await loginUser();
      }
    } catch (error) {
      console.log("Hubo un problema con la petición Fetch:" + error.message);
    }
  };

  const setEmailValue = (e) => {
    let inputValue = e.target.value;
    setEmail(inputValue);
  };

  const setPasswordValue = (e) => {
    let inputValue = e.target.value;
    setPassword(inputValue);
  };

  return {
    email,
    password,
    setEmailValue,
    setPasswordValue,
    loginButton,
  };
}