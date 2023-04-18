import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Quiz from "./quiz/Quiz";

function App() {
  return <div className="container-fluid">
      <Navbar/>
      <Quiz/>
  </div>;
}

export default App;
