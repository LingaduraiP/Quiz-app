import React, { useContext, useEffect, useRef, useState } from "react";
import classes from "./SingleQuestions.module.css";
import QuizContext from "../../../store/quizContext/QuizContext";
import { useNavigate } from "react-router-dom";

const SingleQuestions = ({
  currentQuestion,
  curQusNo,
  onNextQus,
  lengthOfAllQuestions,
  categoryLabel,
}) => {
  // States
  const [activeButton, setActiveButton] = useState(null);
  const [selectedAns, setSelectedAns] = useState(
    new Array(lengthOfAllQuestions).fill("Not Answered")
  );
  const [answerResult, setAnswerResult] = useState(
    new Array(lengthOfAllQuestions).fill("Not Answer")
  );
  let lebelIndex = useRef(0);
  const quizCtx=useContext(QuizContext)

  const navigate = useNavigate();

  //  Active Button Handler
  const activeButtonHandler = (i) => {
    setActiveButton(i);
  };

  // Moving to the next Question

  const nextQusFn = () => {
    onNextQus((prev) => prev + 1);
    submitAns();
    if (curQusNo % 5 === 0) {
      lebelIndex.current++;
    }
  };

  // Moving to the previous Question
  const prevQusFn = () => {
    onNextQus((prev) => prev - 1);
    submitAns();
    if ((curQusNo - 1) % 5 === 0) {
      lebelIndex.current--;
    }
  };

  // Submiting answers Fn
  function submitAns() {
    //  Checking if the user choose any answer or not
    if (typeof activeButton === "object") {
      return;
    } else {
      let answerResultArr = answerResult;

      // for Selected answers
      let selectedAnswersArr = selectedAns;
      selectedAnswersArr[curQusNo - 1] = activeButton;
      setSelectedAns(selectedAnswersArr);

      // Checking Answer is right or Wrong
      if (currentQuestion.options[activeButton] === currentQuestion.answer) {
        answerResultArr[curQusNo - 1] = "correct";
      } else {
        answerResultArr[curQusNo - 1] = "wrong";
      }
      setAnswerResult(answerResultArr);
    }
  }

  // cheking Your Already selected answer or not
  useEffect(() => {
    if (selectedAns[curQusNo - 1] !== "Not Answered") {
      setActiveButton(selectedAns[curQusNo - 1]);
    } else {
      setActiveButton(null);
    }
  }, [curQusNo]);

  // Answer Submit Handler

  const answerSubmitHandler = () => {
    submitAns()
    quizCtx.setAnswerResult(answerResult)
    navigate("/result");
  };

  return (
    <div className={classes.question__container}>
      <span>{categoryLabel[lebelIndex.current]}</span>
      <p className={classes.question__text}>
        <span>{curQusNo} </span> {currentQuestion.question}
      </p>
      <div className={classes.options}>
        {currentQuestion.options.map((option, i) => (
          <button
            key={i}
            onClick={() => activeButtonHandler(i)}
            className={`option col-6 ${classes.option__button} ${
              activeButton === i ? classes.active : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className={classes.button__container}>
        <button disabled={curQusNo - 1 === 0} onClick={prevQusFn}>
          prev
        </button>
        <button disabled={lengthOfAllQuestions <= curQusNo} onClick={nextQusFn}>
          next
        </button>
      </div>
      {curQusNo === lengthOfAllQuestions && (
        <button onClick={answerSubmitHandler}>Submit Your Answer</button>
      )}
    </div>
  );
};

export default SingleQuestions;
