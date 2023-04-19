import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Quiz from "./quiz/Quiz";
import QuizContextProvider from "./store/quizContext/QuizContextProvider";

function App() {
  return (
    <QuizContextProvider>
      <div className="container-fluid">
        <Navbar />
        <Quiz />
      </div>
    </QuizContextProvider>
  );
}

export default App;
