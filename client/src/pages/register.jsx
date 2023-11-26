import useUserData from "../hooks/register";
import { Link } from "react-router-dom";

function register() {
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
        <button onClick={registerButton} className="enter-button-signin-login">
          <i className="fa-solid fa-user-plus" />
        </button>
        <Link to={`/login`}>
          <button className="top-right-button" id="log-in-button">
            <i className="fa-solid fa-right-to-bracket" />
          </button>
        </Link>
        <p>Password: Minimum eight characters, at least one letter and one number:</p>
      </div>
    </>
  );
}

export default register;
