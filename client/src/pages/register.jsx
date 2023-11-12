import useUserData from "../hooks/register";
import { Link } from "react-router-dom";

function App() {
  const {
    name,
    email,
    password,
    setNameValue,
    setEmailValue,
    setPasswordValue,
    registerButton,
  } = useUserData();

  return (
    <>
      <div className="form-register-login">
        <h2>Sign Up</h2>
        <p>Please enter your name, email, and password!</p>
        <div id="input-boxes">
          <input
            placeholder="Name"
            value={name}
            onChange={setNameValue}
            className="input-container"
          />
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={setEmailValue}
            className="input-container"
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={setPasswordValue}
            className="input-container"
          />
        </div>
        <button onClick={registerButton} id="register-button">
          Sign Up
        </button>
        <Link to={`/login`}>
          <button id="sign-in-button">Login</button>
        </Link>
      </div>
    </>
  );
}

export default App;
