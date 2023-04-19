import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Quiz from "./quiz/Quiz";
import QuizResult from "./quiz/quizResult/QuizResult";
import QuizContextProvider from "./store/quizContext/QuizContextProvider";

function App() {
  return (
    <QuizContextProvider>
      <div className="container-fluid">
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Quiz />} />
            <Route path="/result" element={<QuizResult />} />
          </Routes>
        </Router>
      </div>
    </QuizContextProvider>
  );
}

export default App;
