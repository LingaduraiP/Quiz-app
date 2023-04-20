import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore/lite";

import { auth, db } from "../../firebase";
import AuthContext from "./AuthContext";

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Auth Change
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        
        console.log("user already loggedin");
        setCurrentUser(user);
      } else {
        console.log("no user available");
      }
    });
  }, []);

  //   user Signup
  const signUp = (email, password, userName) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async result => {
        let userCollectionRef = collection(db, "users");
        let userDocRef = doc(userCollectionRef, result.user.uid);

        // Storing the data to the firestore
        setDoc(userDocRef, { name: userName, email: email })
          .then(() => {
            console.log("created Successfully");
          })
          .catch(() => console.log("something went wrong"));
      })
      .catch(error => {
        if (error.code == "auth/email-already-in-use") {
          console.log("linga");
        }
      });
  };

    // user Login
    const login=(email,password)=>{
        signInWithEmailAndPassword(auth,email,password).then(userCredential=>{
            setCurrentUser(userCredential.user)
        })
    }

    // user SignOut
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("Signout Successfully");
      })
      .catch(() => console.log("Signout Failled"));
  };

  const value = {
    currentUser,
    signup: signUp,
    login:login,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
