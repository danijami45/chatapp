import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import { useHistory } from "react-router-dom";

function LogoutBtn() {
  const { getLoggedin } = useContext(AuthContext);
  let history = useHistory();
  async function logout() {
    var logoutReq = await axios.get("http://localhost:5000/auth/logout");
    getLoggedin();
    history.push("/");

    console.log(logoutReq);
  }
  return (
    <button className="btn nav-link" onClick={logout}>
      Logout
    </button>
  );
}

export default LogoutBtn;
