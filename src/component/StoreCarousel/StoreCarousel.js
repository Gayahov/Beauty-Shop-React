import React, { Component, createContext } from "react";
import { storeInfo } from "../../constants/store.constant";
import ProductCard from "../ProductCard/ProductCard";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "./StoreCarousel.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context"
import Counter from "../UI/Counter/Counter";
import Button from "../UI/Button/Button";
import { PropaneSharp } from "@mui/icons-material";

export default function StoreCarousel(props) {
  const cartCtx = useContext(CartContext)


  const [amountIsValid, setAmountIsValid] = useState();
  const amountInputRef = useRef();



  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1) {
      return;
      setAmountIsValid(false);
    }
    PropaneSharp.onAddToCart(enteredAmountNumber)
  };
  const addToCartHandler = amount => {
    cartCtx.addItem({
      
      id: props.id,
      name:amount,
      price: props.price
    });
  };


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <div className="store-carousel">
      <Slider {...settings}>
        {storeInfo.map((item) => (
          <div className="store-img">
            <ProductCard
              key={item.id}
              id = {item.id}
              img={item.img}
              header={item.header}
              price={item.price}
            />
            <div className="buttons">
              <Counter ref={amountInputRef} onAddToCart ={addToCartHandler} />
              <Button name="Add To Cart" onSubmit={submitHandler}></Button>
              {!amountIsValid && <p>Please enter a valid amount</p>}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
