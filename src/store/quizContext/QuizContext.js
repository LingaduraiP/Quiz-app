import { createContext } from "react";

const QuizContext = createContext({
  selectedCategory: [],
  setSelectedCategoryFn: () => {},
  questions: [],
  setQuestionFn: () => {},
  category: [],
});
export default QuizContext;
