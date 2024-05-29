import React, { useState,useEffect } from 'react';
import { createContext } from 'react';
import axios from 'axios';
export const ResListContext=createContext()
export const ResListProvider=({children})=>{
    const [data,setData]=useState([])
    const [resNames,setResNames]=useState('')
    const [foodNames,setFoodNames]=useState('')
    const [images,setImages]=useState('')
    useEffect(()=>{
        axios.get('http://localhost:4000/resturant-list') 
        .then((result)=>{
         setData(result.data)
         console.log('data is feched')
         console.log(result)
        })  
        .catch((err)=>{
         console.log(err)
        })
},[])
    return <ResListContext.Provider 
    value={{data,setData,resNames,setResNames,
    foodNames,setFoodNames,images,setImages}}>
        {children}</ResListContext.Provider>
}
