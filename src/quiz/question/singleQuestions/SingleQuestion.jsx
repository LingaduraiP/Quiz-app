import React, { useState } from "react";
import classes from "./SingleQuestions.module.css";

const SingleQuestions = ({
  currentQuestion,
  curQusNo,
  onNextQus,
  lengthOfAllQuestions,
}) => {
  const [activeButton, setActiveButton] = useState(null);
  const [selectedAns, setSelectedAns] = useState([]);
  // const [answer, setAnswer] = useState("Not Answer");
  const [answerResult, setAnswerResult] = useState([]);
  let answerListArr = answerResult;
  // let answerResult=[]

  const activeButtonHandler = (i) => {
    setActiveButton(i);
  };

  const nextQusFn = () => {
    onNextQus((prev) => prev + 1);

    // no answers are selected
    if (typeof activeButton === "object") {
      answerListArr[curQusNo - 1] = "not Answer";
      setAnswerResult(answerListArr);
    }

    setActiveButton(null);
  };

  const prevQusFn = () => {
    onNextQus((prev) => prev - 1);
    setActiveButton(null);
  };

  return (
    <div className={classes.question__container}>
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
        <button disabled={curQusNo === 0} onClick={prevQusFn}>
          prev
        </button>
        <button disabled={lengthOfAllQuestions <= curQusNo} onClick={nextQusFn}>
          next
        </button>
      </div>
    </div>
  );
};

export default SingleQuestions;
