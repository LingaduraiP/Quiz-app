import React, { useState } from 'react'
import classes from './CategoryOption.module.css'
const CategoryOption = ({name,value,onSelectedListFn}) => {
    const [isClicked,setIsClicked] = useState(false)
   
    const clickHandler=(e)=>{
        setIsClicked(prev=>!prev)
        onSelectedListFn(e.target.value)
       
    }
  return (
    <button onClick={clickHandler} value={value} className={`${classes.categoryOption__button } ${isClicked?classes.clicked:''}`}>
      {name}
    </button>
  )
}

export default CategoryOption