import React from "react";
import { useState } from "react";
import "./Counter.css";

   const Counter=React.forwardRef( (props,ref)=> {
    let [count, setCount] = useState(1)
    
    function increase() {
      setCount(count + 1)
    }
    function decrease() {
            setCount(count - 1)
        }
      
    function onCountEdit(event) {
      let countContent = Number(event.target.textContent)
      if (Number.isNaN(countContent))
        setCount(Math.floor(Math.random() * 10))
      else
        setCount(countContent)
    }
    
    return (
      <div className='count-wrapper'>
        <button className="counter" onClick={decrease}>-</button>
        <p className='count' contenteditable='true' onBlur={onCountEdit} ref={ref}>{count}</p>
        <button className="counter" onClick={increase}>+</button>  
      </div>
    )
  })
  export default Counter;