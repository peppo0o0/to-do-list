import useLoginUser from "../hooks/login";
import { Link } from "react-router-dom";

function App() {
  const { email, password, setEmailValue, setPasswordValue, loginButton } =
    useLoginUser();

  return (
    <>
      <div className="form-register-login">
        <h2>Login</h2>
        <p>Please enter your email, and password!</p>
        <div id="input-boxes">
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
        <button onClick={loginButton} id="register-button">
          Login
        </button>
        <Link to={`/register`}>
          <button id="sign-in-button">Sign Up</button>
        </Link>
      </div>
    </>
  );
}

export default App;
