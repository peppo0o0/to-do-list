import { useState } from "react";
import { USER_URL, HEADERS } from "../constants/request";
import { useNavigate } from "react-router-dom";
import { validateSignup } from "../utils/validation";
import { registrationAlert, loginInvalidInformation } from "../utils/alerts";

export default function useUserData() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const cleanUser = async () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const registerUser = async () => {
    try {
      const response = await fetch(USER_URL, {
        method: "POST",
        headers: HEADERS,
        body: JSON.stringify({ name, email, password }),
      });
      if (response.ok) {
        await cleanUser();
        await registrationAlert();
        navigate("/login");
      } else {
        const error = await response.json();
        loginInvalidInformation(error.message);
      }
    } catch (error) {
      throw error;
    }
  };

  const registerButton = async () => {
    setName(name.trim());
    setEmail(email.trim());
    setPassword(password.trim());

    try {
      const validations = validateSignup(name, email, password);
      if (!validations.length) {
        await registerUser();
      }
    } catch (error) {
      console.log("Hubo un problema con la petición Fetch:" + error.message);
    }
  };

  const setNameValue = (e) => {
    let inputValue = e.target.value;
    setName(inputValue);
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
    name,
    email,
    password,
    setNameValue,
    setEmailValue,
    setPasswordValue,
    registerButton,
  };
}
