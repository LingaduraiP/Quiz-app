import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../firebase";
import AuthContext from "../../store/authcontext/AuthContext";


const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authCtx=useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then(async(userCredential) => {
       authCtx.signup(email,password,name)

    //   })
    //   .catch((err) => console.log("error: " + err));
  };

 
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h1>create accout</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default SignUp;
