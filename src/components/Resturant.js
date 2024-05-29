import React, { useState } from 'react';
import {Box, Card, CardBody, CardFooter,   Flex,
   CardHeader, Select ,Image,Button,
   }   from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { ResListContext } from '../contexts/ResListContext';
export const Resturant=() =>{ 
      const navigate=useNavigate()
      const [resName,setResName]=useState('')
      const {data,setResNames,setFoodNames,setImages}=useContext(ResListContext)
      const [resturnatDetail,setResturnatDetail]=useState([])
      const [intialLoad,setIntialLoad]=useState(true)
       const handleViewMenu=async()=>{
                    await axios.post('http://localhost:4000/meadi-food-menu',{resName})
                    .then((result)=>{
                            setResturnatDetail(result.data)
                            setIntialLoad(false)
                    })
                    .catch((err)=>{
                      console.log(err)
                    })
              }
  return  ( 
    <React.Fragment>
    <Flex
      bg='orange'
      flexWrap='wrap'
      display='flex'
      justifyContent='center'
     >
    <Box
    width='35%'
    m='15px'
   >
    <Box>{intialLoad?(
    <>
    <p>select available resturants from the select box and view thier menus </p>
    <Image src='burger.png' width='200px' height='200px'/>
    </>):null}
    <Select
    fontSize='1.5rem'
    color='#22212a'
    value={resName}
    onChange={(e)=>setResName(e.target.value)}
    >  
  {data.map((resturant)=><option key={resturant._id} >{resturant.resName}</option>)}
   </Select>
   </Box>
   <Box ml='10px' mt={'15px'}>
    <Button 
      bg='#22212a' 
      color='white'
      padding='1.3rem'
      onClick={handleViewMenu}
     >view menu
     </Button>
     </Box>
     </Box> 
    <Box display='flex' flexWrap='wrap' >
      {(resturnatDetail.map((item)=> 
              <React.Fragment>
              <Card m='10px' key={item._id} bg='#22212a' 
              color='white'  width='325px' textAlign='center' >
            <CardHeader 
                color='orange' 
                borderRadius='10px' 
                textAlign='center' 
                fontSize='1.6rem'>
                {item.resName}
              </CardHeader>
            <CardBody  
            fontFamily='sans-serif' 
            fontSize='1.3rem'
             color="orange">
                   <Image
                    src={item.image}
                    boxShadow='sm'
                    width={200} height={200}
                    />
               <p>Type:{item.foodName}</p>
               <p>Price:{item.price}</p>
            </CardBody>
            <CardFooter >
              <Button
               onClick={()=>navigate('/meadi-custemers',
               setResNames(item.resName),setFoodNames(item.foodName),
               setImages(item.image)) }>order now</Button>
            </CardFooter>
          </Card>   
              </React.Fragment>  
            )
          )
          }
    </Box>
   </Flex >    
     </React.Fragment>       
  )
}
