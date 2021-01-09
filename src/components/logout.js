import { React } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import logout  from "../public/logout.png";
const Logout = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const signout = () => {
        dispatch({ type: "LOGOUT"});
        history.push(`/`);
    }
    return(
        <div className="logout" onClick={() => signout()}>
            <img src={logout} alt="logout" width="25px" title="Logout" />
        </div>
    )
}

export default Logout;