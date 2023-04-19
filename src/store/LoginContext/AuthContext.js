import { createContext } from "react";

const AuthContext = createContext({
  isLogin: "",
  login: () => {},
  signup: () => {},
});

export default AuthContext