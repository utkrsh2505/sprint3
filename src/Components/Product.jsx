import React from "react";
import { Product_input } from "./Product_input";

import { useState,useEffect } from "react";
import { ListItem } from "./ListItem";

export const Product = () => {
    const [list,setList] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3001/product")
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
            setList(res);
          })
          .catch((err)=>{
            console.log(".....wrong")
          })

    },[])
    const handle_Submit = (data)=>{
     //   console.log(data)
     fetch("http://localhost:3001/product",{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
         
        },
         
      })
      .then((res)=>res.json())
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log("wrong")
      })

    }


  return (
      <>
        <div>Product</div>
    <Product_input handleSubmit={handle_Submit}/>
    <div>
        {list.map((i)=>{
           { console.log(i.title)}
           <div>
               {i.title}
           </div>
        })}
    </div>
      </>
  
  )
}
