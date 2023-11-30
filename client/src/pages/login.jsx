import useLoginUser from "../hooks/login";
import { Link } from "react-router-dom";

function login() {
  // console.log('env', import.meta.env)
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
        <button onClick={loginButton} className="enter-button-signin-login">
          <i className="fa-solid fa-right-to-bracket" />
        </button>
        <Link to={`/register`}>
          <button className="top-right-button" id="sign-up-button">
            <i className="fa-solid fa-user-plus" />
          </button>
        </Link>
      </div>
    </>
  );
}

export default login;
