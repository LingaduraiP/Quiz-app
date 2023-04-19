import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import QuizContext from "../../store/quizContext/QuizContext";

const QuizResult = () => {
  const quizCtx = useContext(QuizContext);
  const navigate = useNavigate();
  const backBtnHandler = () => {
    quizCtx.setQuestion([])
    navigate("/");
  };
  return (
    <div>
      <h2>Your Result</h2>
      <h3>
        Your score is
        <span>
          {quizCtx.answerResult.filter(result => result === "correct").length}
        </span>/<span>{quizCtx.answerResult.length}</span>
      </h3>
      <div>
        <div>
          <span>No of questions attempted</span>
          <span>
            {quizCtx.answerResult.filter(result => result === "correct").length}
          </span>
        </div>
        <div>
          <span>No of questions notAnswered</span>
          <span>
            {quizCtx.answerResult.filter(result => result === "wrong").length}
          </span>
        </div>
        <div>
          <span>No of questions Wrong Answered</span>
          <span>
            {
              quizCtx.answerResult.filter(result => result === "Not Answer")
                .length
            }
          </span>
        </div>
      </div>
      <button onClick={backBtnHandler}>Go Back</button>
    </div>
  );
};

export default QuizResult;
