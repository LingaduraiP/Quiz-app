import { createContext } from "react";

const AuthContext = createContext({
  currentUser: "",
  signup: () => {},
  logout: () => {},
  login:()=>{}
});

export default AuthContext;
