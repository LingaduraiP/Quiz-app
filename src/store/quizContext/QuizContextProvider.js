import React, { useState } from "react";
import useFetchData from "../../hooks/use-fetch";
import QuizContext from "./QuizContext";

const QuizContextProvider = props => {
  const [questions, setQuestions] = useState([]);
  // fetching categories from
  const fetchingCategories = useFetchData(
    "https://quiz-app-2c4b1-default-rtdb.firebaseio.com/quizHeadeing.json"
  );
  console.log(fetchingCategories);
  const setQuestionHandler = categorys => {
    categorys.forEach(async category => {
      // Getting The Question From Firebase
      const response = await fetch(
        `https://quiz-app-2c4b1-default-rtdb.firebaseio.com/Quiz/${fetchingCategories[
          category
        ].replaceAll(" ", "_")}.json`
      );
      const data = await response.json();
      console.log(data);
    });
  };

  const contextValue = {
    setQuestionFn: setQuestionHandler,
    questions: questions,
    category: fetchingCategories,
  };

  return (
    <QuizContext.Provider value={contextValue}>
      {props.children}
    </QuizContext.Provider>
  );
};

export default QuizContextProvider;
