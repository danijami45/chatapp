import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedin, setLoggedin] = useState(undefined);

  async function getLoggedin() {
    var loggedinRes = await axios.get("http://localhost:5000/auth/loggedin");
    setLoggedin(loggedinRes.data);
  }

  useEffect(() => {
    getLoggedin();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedin, getLoggedin }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
