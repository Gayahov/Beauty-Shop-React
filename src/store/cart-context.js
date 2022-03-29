 import React from 'react';



const createContext = React.createContext({
     item:[],
     totalAmount:0,
     addItem:(item)=>{},
     removeItem:(id) => {}
 })

 export  default createContext