import { Navigate } from "react-router-dom";
import { useSession } from "../hooks/session";

export default function Anonymous(props) {
  const {session: { isLogged },} = useSession();
  return <>
      {isLogged ? <Navigate to="/" /> : props.children}
  </>;
}

