import { useState } from "react";
import { USER_URL, HEADERS } from "../constants/request";
import {
  validateName,
  validateEmail,
  validatePassword,
} from "../utils/validation";

export default function useUserData() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    try {
      await fetch(USER_URL, {
        method: "POST",
        headers: HEADERS,
        body: JSON.stringify({ name, email, password }),
      });
      setName("");
      setEmail("");
      setPassword("");
      alert("Successful registration")
      window.location.replace("http://localhost:5173/login");
    } catch (error) {
      console.log("Hubo un problema con la petición Fetch:" + error.message);
    }
  };

  const registerButton = async () => {
    setName(name.trim())
    setEmail(email.trim())
    setPassword(password.trim())
    try {
      // validateSignup returns an array with all the signup validations
      const validations = validateSignup({ name, email, password })
      // If exist at least one validation it should show them into modal component
      if(validations.length) {
        // show modal with all validations
      }
      if (validateName(name) && validateEmail(email) && validatePassword(password)) {
        registerUser();
      }
      setName("");
      setEmail("");
      setPassword("");
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
