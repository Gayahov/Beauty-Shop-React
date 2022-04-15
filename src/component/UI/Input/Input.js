import React from "react";
import "./Input.css";

const Input = React.forwardRef((props, ref) =>{
    return( <div>
        <lebel htmlFor={props.input.id}>{props.lebel}</lebel>
        <input ref={ref} {...props.input}></input>
    </div>
);
});
export default Input;