import React, { useState } from "react";
import classes from "./Category.module.css";
import CategoryOption from "./category option/CategoryOption";
import useFetchData from "../../hooks/use-fetch";

const Category = () => {
  const [listArr, setListArr] = useState([]);

  const selectedList = (value) => {
    
    if (listArr.indexOf(value) === -1) {
      setListArr((prev) => [...prev, value]);
    } else {
      setListArr(prev=>prev.filter(val=>val !==value))
    }
  };
  const data = useFetchData(
    "https://quiz-app-2c4b1-default-rtdb.firebaseio.com/quizHeadeing.json"
  );

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
      {/* <div className={`col-md-6 ${classes.category}`}><CategoryOption /></div>
        <div className={`col-md-6 ${classes.category}`}><CategoryOption/></div>
        <div className={`col-md-6 ${classes.category}`}><CategoryOption/></div>
        <div className={`col-md-6 ${classes.category}`}><CategoryOption/></div>
        <div className={`col-md-6 ${classes.category}`}><CategoryOption/></div>
        <div className={`col-md-6 ${classes.category}`}><CategoryOption/></div>
        <div className={`col-md-6 ${classes.category}`}><CategoryOption/></div>
        <div className={`col-md-6 ${classes.category}`}><CategoryOption/></div>
        <div className={`col-md-6 ${classes.category}`}><CategoryOption/></div>
        <div className={`col-md-6 ${classes.category}`}><CategoryOption/></div> */}
    </div>
  );
};

export default Category;
