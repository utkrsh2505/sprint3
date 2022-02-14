import React from "react";
import { Product_input } from "./Product_input";

import { useState,useEffect } from "react";


export const Product = () => {
    const [list,setList] = useState([]);
    const [pageNumber,setPageNumber] = useState(1);
    useEffect(()=>{
        fetch(`http://localhost:3001/product?_page=${pageNumber}&_limit=1`)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
            setList(res);
          })
          .catch((err)=>{
            console.log(".....wrong")
          })

    },[pageNumber])
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
    <div style={{display : "flex",flexWrap : "wrap", justifyContent:"center",width : "700px",margin : "auto"}}>
      
        {list.map((i)=>{
            return(
                <div  style={{ border : "1px solid black"}} key={i.id}>
                    <div><img style={{width : "200px", height : "200px"}} src={i.image}/></div>
                    <div>
                    <h6>Title:{i.title}</h6> 
                    <p>Cost : {i.cost}</p>
                    </div>
                     
                </div>
                  
            )
         
           
              
        
        })}
    </div>
    <button onClick={()=>{
        if(pageNumber > 1){
         
            setPageNumber(pageNumber-1)
        }
    }}>Prev</button>
    <button onClick={()=>{
    
        setPageNumber(pageNumber+1)
    }}>Next</button>
      </>
  
  )
}
