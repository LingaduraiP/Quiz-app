import React, { useState } from "react";
import classes from "./Quiz.module.css";
import Question from "./question/Question";
import Category from "./category/Category";

const Quiz = () => {
 
  return (
    <div className={`container ${classes.quiz__container}`}>
     <Question/>
     {/* <Category/> */}
    </div>
  );
};

export default Quiz;
