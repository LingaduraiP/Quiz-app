import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./authentication/signIn/Login";
import SignUp from "./authentication/signUp/SignUp";
import Navbar from "./components/navbar/Navbar";
import Quiz from "./quiz/Quiz";
import QuizResult from "./quiz/quizResult/QuizResult";
import AuthContextProvider from "./store/authcontext/AuthContextProvider";
import QuizContextProvider from "./store/quizContext/QuizContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <QuizContextProvider>
        <div className="container-fluid">
          <Navbar />
          <Router>
            <Routes>
              <Route path="/" element={<Quiz />} />
              <Route path="/result" element={<QuizResult />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </Router>
        </div>
      </QuizContextProvider>
    </AuthContextProvider>
  );
}

export default App;
