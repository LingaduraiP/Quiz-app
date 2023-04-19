import React, { memo, useContext, useState } from "react";
import classes from "./Question.module.css";
import SingleQuestions from "./singleQuestions/SingleQuestion";
import QuizContext from "../../store/quizContext/QuizContext";

  
  const Question = ({categoryLabel}) => {
  const quizCtx= useContext(QuizContext)
  const [currentQusNo, setCurrentQusNo] = useState(0);
  const selectedLabel=[]
 
  categoryLabel.forEach(element => {
  selectedLabel.push(quizCtx.category[element])
    
  });

  return (
    <>
      {quizCtx.questions.length > 0 && (
        <SingleQuestions
          onNextQus={setCurrentQusNo}
          currentQuestion={quizCtx.questions[currentQusNo]}
          curQusNo={currentQusNo + 1}
          lengthOfAllQuestions={quizCtx.questions.length}
          categoryLabel={selectedLabel}
        />
      )}
      
    </>
  );
};

export default memo(Question);
