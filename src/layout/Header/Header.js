import React from "react";
import { useState } from "react";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Cart from "../../component/Cart/Cart";
import "./Header.css"
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";


export default function Header(props){

    const[showCart, setShowCart]=useState(false)

    const showCartHandler=()=>{
        
      setShowCart(true)
    }
    const hideCartHalder = ()=>{
      setShowCart (false)
    }

    return (
        <div className="header">
            <div className="header-logo">
                <p className="heder-logo-b">B</p>
                <p className="header_logo">Bio Beauty Care</p>
            </div>
            <div className="header-menu">
                <ul className="menu">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>For Body</li>
                    <li>For Home</li>
                    <li>Contact</li>
                    <li><AccountBoxIcon/>Log In</li>
                    <li><HeaderCartButton onShowCart={showCartHandler} /></li>
                </ul>
                {showCart && <Cart onClose={hideCartHalder}/> }
            </div>
        </div>
    )
}