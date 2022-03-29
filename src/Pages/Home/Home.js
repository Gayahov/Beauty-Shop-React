import { useState } from "react";
import MainCarousel from "../../component/MainCarousel/MainCarousel";
import StoreCarousel from "../../component/StoreCarousel/StoreCarousel";
import Header from "../../layout/Header/Header";
import CartProvider from "../../store/CartProvider"
import Cart from "../../component/Cart/Cart";
import "./Home.css";




export default function Home() {
    


  return (
    <CartProvider>
      <Header></Header>
      <div className="mainHome">
        <div className="mainCarousel">
          <MainCarousel />
        </div>
        
        <div>
          <img src={require("../../assets/4img.jpg")}></img>
        </div>
        <div className="daily">
        <p className="daily-2">Treat yourself</p>
        <p className="daily-1">Daily!</p>
        </div>
      </div>
        <div className="test">
      <StoreCarousel/>
      </div>
    </CartProvider>
  );
}
