import React, { useCallback, useMemo, useState } from "react";
import classes from "./Question.module.css";
import SingleQuestions from "./singleQuestions/SingleQuestion";
import useFetchData from "../../hooks/use-fetch";

const url =
  "https://quiz-app-2c4b1-default-rtdb.firebaseio.com/quiz/Kannadacinema.json";

const Question = () => {
  const [currentQusNo, setCurrentQusNo] = useState(0);
  const questions = useFetchData(url);
  let score = [];


  return (
    <>
      {questions.length > 0 && (
        <SingleQuestions
          onNextQus={setCurrentQusNo}
          currentQuestion={questions[currentQusNo]}
          curQusNo={currentQusNo + 1}
          lengthOfAllQuestions={questions.length}
        />
      )}
      
    </>
  );
};

export default Question;
