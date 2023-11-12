import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useSession = () => {
  const navigate = useNavigate();

  let defaultSession = JSON.parse(localStorage.getItem('account'))
  defaultSession = defaultSession || {
    name: "",
    email: "",
    isLogged: false,
  }
  const [session, setSession] = useState(defaultSession);

  const setLocalStorageSession = (session) => {
    localStorage.setItem("account", JSON.stringify(session));
  };

  const logoutSession = () => {
    localStorage.removeItem("account");
    navigate("login");
  };

  const loadAccount = () => {
    const localSession = JSON.parse(localStorage.getItem("account"));
    if (localSession) {
      setSession(localSession);
    }
  };

  useEffect(() => {
    loadAccount();
    return () => {};
  }, []);

  return {
    session,
    setSession,
    setLocalStorageSession,
    logoutSession,
  };
};
