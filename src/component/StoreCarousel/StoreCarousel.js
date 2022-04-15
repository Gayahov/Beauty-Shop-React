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


export default function StoreCarousel(props) {
  const cartCtx = useContext(CartContext)


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
  
             
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
