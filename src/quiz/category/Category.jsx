import React, { useContext, useState } from "react";
import classes from "./Category.module.css";
import CategoryOption from "./category option/CategoryOption";
import QuizContext from "../../store/quizContext/QuizContext";

const Category = ({onSetSelectedLabel}) => {
  const [listArr, setListArr] = useState([]);
  const quizCtx = useContext(QuizContext);
  const data = quizCtx.category;

  const selectedList = (value) => {
    if (listArr.indexOf(value) === -1) {
      setListArr((prev) => [...prev, value]);
    } else {
      setListArr((prev) => prev.filter((val) => val !== value));
    }
  };
  

  const submitHandler=()=>{
    quizCtx.setQuestionFn(listArr)
    onSetSelectedLabel(listArr)
  }
  return (
    <div className="row">
      {data.length > 0 &&
        data.map((name, i) => (
          <div key={name} className={`col-md-6 ${classes.category}`}>
            <CategoryOption
              onSelectedListFn={selectedList}
              value={i}
              name={name}
            />
          </div>
        ))}

        <button onClick={submitHandler}>submit</button>
    </div>
  );
};

export default Category;
