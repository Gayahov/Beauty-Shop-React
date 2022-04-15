import React from "react";
import { useState, useRef } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Counter.css";

const Counter = (props) => {
  // // const amountInputRef = useRef();
  // const cartCtx = useContext(CartContext);

  // const [amountIsValid, setAmountIsValid] = useState();
  // // const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1) {
      return;
      setAmountIsValid(false);
    }
    props.onAddToCart(enteredAmountNumber);
  };
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: amount,
      price: props.price,
    });
  };

  // let [count, setCount] = useState(1)

  // function increase() {
  //   setCount(count + 1)
  // }
  // function decrease() {
  //         setCount(count - 1)
  //     }

  // function onCountEdit(event) {
  //   let countContent = Number(event.target.textContent)
  //   if (Number.isNaN(countContent))
  //     setCount(Math.floor(Math.random() * 10))
  //   else
  //     setCount(countContent)
  // }

  return (
    <form onSubmit={submitHandler}>
      <Input
        ref ={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button name="Add to Cart"></Button>
      {!amountIsValid && <p>Please enter a valid amount</p>}
    </form>
    
  );
};
export default Counter;
