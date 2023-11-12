import { Navigate, Outlet } from "react-router-dom";
import { useSession } from "../hooks/session";


export default function PrivateRoutes(props){
    const { session: { isLogged } } = useSession();
    return(
        <>
            {isLogged ? props.children : <Navigate to='/login' />}
        </>
    )
}