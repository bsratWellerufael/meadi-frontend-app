import {Flex, Box, FormControl, FormLabel, Image, Input, Button, Select } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState ,useContext} from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ResListContext } from '../contexts/ResListContext';
import { UserAuth } from '../contexts/UserAuth';
function Menu() {
  const navigate=useNavigate()
  const {logout}=useContext(UserAuth)
  const handleLogout=()=>{
    navigate('/')
    logout()
  } 
  const [foodName,setFoodName]=useState('')
   const [describtion,setDescribtion]=useState('')
   const [price,setPrice]=useState('')
   const [catagory,setCatagory]=useState('')
   const [ingrident,setIngrident]=useState('')
   const [image,setImage]=useState('')
   const [resName,setResName]=useState('')
   const {data}=useContext(ResListContext)
    const handleCreateFoodMenuItems=(e)=>{ 
           e.preventDefault()
      const formData=new FormData()
      formData.append("foodName",foodName)
      formData.append("describtion", describtion)
      formData.append("price",price)
      formData.append("catagory",catagory)
      formData.append("ingrident",ingrident)
      formData.append("image",image)
      formData.append("resName",resName)  
      axios.post("http://localhost:4000/food-menu",formData)
      .then((result)=>{
            console.log(result.data)
      })
      .catch((err)=>{
          console.log(err)
           console.log('error while inserting data')
      })
      } 
 const handleResName=(e)=>{
   setResName(e.target.value)
 }
  const handleImage=(e)=>{
    console.log(e.target.files[0])
   setImage(e.target.files[0])
  }
  return (
    <>
    < form onSubmit={handleCreateFoodMenuItems}>
   <Flex
     bg='orange'
     textAlign='center'
     justifyContent='center'
      padding='10px' 
     >
           <Box bg='#22212a'
           color='white'
           boxShadow='2xl'
            fontSize='2rem' width='35%' padding='10px'>
            <FormControl>
                <FormLabel>FoodName</FormLabel>
               <Input type='text'
                  name='foodName'
                 onChange={e=>setFoodName(e.target.value)}
               />
            </FormControl>
            <FormControl>
                <FormLabel>Describtion</FormLabel>
               <Input 
               type='text'
               name='describtion'
               onChange={e=>setDescribtion(e.target.value)}
               />
            </FormControl>
            <FormControl>
                <FormLabel>Price</FormLabel>
               <Input type='text'
                name='price'
                onChange={e=>setPrice(e.target.value)}
               />
            </FormControl>
            <FormControl>
                <FormLabel>Catagory</FormLabel>
               <Input type='text'
               name='catagory'
               onChange={e=>setCatagory(e.target.value)}
               />
            </FormControl>
            <FormControl>
                <FormLabel>Ingrident</FormLabel>
               <Input type='text'
               name='ingrident'
               onChange={e=>setIngrident(e.target.value)}
               />
            </FormControl>
            <FormControl>
            <Input type='file' accept='image/*'
             name='image'
             onChange={handleImage} 
            />
            </FormControl>
            <FormControl>
                <FormLabel>ResturnatName:</FormLabel>
                <Select color='orange' value={resName}  onChange={handleResName}>
                  {data.map((resturant)=><option 
                  key={resturant._id}
                   >
                    {resturant.resName}</option>)}
                </Select>
            </FormControl>
             <Button type='submit' >create menu</Button>
            </Box>
            
     </Flex>
   </form>  
     <Outlet/>
    </>
    
  );
}
export default  Menu
