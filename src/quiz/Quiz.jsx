import React, { useContext, useState } from "react";
import classes from "./Quiz.module.css";
import Question from "./question/Question";
import Category from "./category/Category";
import QuizContext from "../store/quizContext/QuizContext";

const Quiz = () => {
  const quizCtx = useContext(QuizContext);
  const [selectedCategoryLabel, setSelectedLabel] = useState("");

  return (
    <div className={`container ${classes.quiz__container}`}>
      {quizCtx.questions.length < 1 && (
        <Category onSetSelectedLabel={setSelectedLabel} />
      )}
      {quizCtx.questions.length > 0 && (
        <Question categoryLabel={selectedCategoryLabel} />
      )}
    </div>
  );
};

export default Quiz;
