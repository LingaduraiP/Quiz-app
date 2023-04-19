import { createContext } from "react";

const QuizContext = createContext({
  questions: [],
  setQuestionFn: () => {},
  category: [],setQuestion:()=>{},
  answerResult: [],
  setAnswerResult: () => {},
});
export default QuizContext;
