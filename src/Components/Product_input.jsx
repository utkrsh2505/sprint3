import React from 'react'
import {useState} from "react";
export const Product_input = ({handleSubmit}) => {
  let  initial = {
    
       
        title: "",
        cost : "",
        image : "",
        category: ""
        

    }
    const [data,setData] = useState(initial);
    const handleChange = (e)=>{
        let {name,value} = e.target;
        setData({
            ...data,
            [name] : value
        })
    }

    const Submit = (e)=>{
        e.preventDefault();
        handleSubmit(data)

    }
  return (
      <>
    
        <form onSubmit={Submit}>
            <input type="text" placeholder="Type Title"  name= "title" value={data.title} onChange={handleChange}/>
            <br/>
            <br/>
            <input type="text" placeholder="Type Price" name="cost" value={data.cost} onChange={handleChange}/>
            <br/> <br/>

            <input type="text" placeholder="Image" name="image" value={data.image} onChange={handleChange}/>
            <br/> <br/>

           <select  name="category" value={data.category} onChange={handleChange}>
               <option value="">Select category</option>
               <option value="Vegetables">Vegetables</option>
               <option value="Fruits">Fruits</option>
               <option value="Provisions">Provisions</option>
           </select>
           <br/> <br/>
                <input type="submit"/>
        </form>
      </>
   
  )
}
