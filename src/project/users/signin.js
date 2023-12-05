import * as client from "./client";
import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

function Signin() {
  const [credentials, setCredentials] = useState({username: "", password: ""});
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/project/account");
  };
  return (
    <div>
      <h1>Signin</h1>
      <input value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
      <input value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      <button onClick={signin}> Signin</button>
      <br/>
      <Link to={`/project/signup`}>Click here to Signup</Link>
    </div>
  );
}

export default Signin;