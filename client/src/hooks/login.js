import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { USER_URL, HEADERS } from "../constants/request";
import { useSession } from "./session";
import {
  loginEmptyFieldsAlert,
  loginInvalidInformation,
} from "../utils/alerts";

export default function useLoginUser() {
  const { setSession, setLocalStorageSession } = useSession();
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
          id: data.id,
          name: data.name,
          email,
          isLogged: true,
          role: data.role,
        };
        setSession(newSession);
        setLocalStorageSession(newSession);
        if (data.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        const error = await response.json();
        loginInvalidInformation(error);
      }
    } catch (error) {
      throw error;
    }
  };

  const loginButton = async () => {
    try {
      !email.trim() && !password.trim()
        ? loginEmptyFieldsAlert()
        : await loginUser();
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
