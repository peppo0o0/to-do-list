import { Navigate } from "react-router-dom";
import { useSession } from "../hooks/session";

export default function AdminRoute(props) {
  const {session: { role },} = useSession();
  return <>
      {role == "admin" ? props.children : <Navigate to="/login" />}
  </>;
}
