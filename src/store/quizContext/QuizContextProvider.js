import React, { useState } from "react";
import useFetchData from "../../hooks/use-fetch";
import QuizContext from "./QuizContext";

const QuizContextProvider = props => {
  const [questions, setQuestions] = useState([]);
  const [answerResult,setAnswerResult]=useState([])

  // fetching categories from
  const fetchingCategories = useFetchData(
    "https://quiz-app-2c4b1-default-rtdb.firebaseio.com/quizHeadeing.json"
  );
  const setQuestionHandler = categoriesArr => {
    categoriesArr.forEach(async categoryIndex => {
      let fetchingCategorieIndex = fetchingCategories[categoryIndex].replaceAll(
        " ",
        "_"
      );

      // Getting The Question From Firebase
      const response = await fetch(
        `https://quiz-app-2c4b1-default-rtdb.firebaseio.com/Quiz/${fetchingCategorieIndex}.json`
      );
      const data = await response.json();

      let uniqueQuestions = new Set();
      while (uniqueQuestions.size < 5) {
        let randomNumber = Math.floor(Math.random() * data.length);
        uniqueQuestions.add(data[randomNumber]);
      }

      setQuestions(prev => [...prev, ...uniqueQuestions]);
    });
  };

  const contextValue = {
    questions: questions,
    setQuestion:setQuestions,
    setQuestionFn: setQuestionHandler,
    category: fetchingCategories,
    answerResult,
    setAnswerResult
  };

  return (
    <QuizContext.Provider value={contextValue}>
      {props.children}
    </QuizContext.Provider>
  );
};

export default QuizContextProvider;
