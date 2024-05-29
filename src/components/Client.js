import { Button, Flex, FormControl, FormLabel, Input,Box ,Heading,Image} from '@chakra-ui/react';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { ResListContext } from '../contexts/ResListContext';
export const Client=() =>{
  const [quantity,setQuantity]=useState('')
  const [name,setName]=useState('')
  const [phone,setPhone]=useState('')
  const [address,setAddres]=useState('')
  const {resNames,foodNames,images}=useContext(ResListContext)
 const [message,setMessage]=useState('')
  const handleCustomer=async(e)=>{
       e.preventDefault()
       await axios.post('http://localhost:4000/customer' ,
       {quantity,name,phone,address,resNames,foodNames})
       .then((res)=>{
             setMessage(res.data)
       })
       .catch((err)=>{
          console.log(err)
       })
  }
return (
  <>
   <form onSubmit={handleCustomer}>
  <Flex justifyContent='center'
        padding='10px' 
        backgroundColor='orange'
        textAlign='center' >
      <Box boxShadow='3xl'
             bg='#22212a' width='35%'
             color='white'
             padding='10px' fontSize='2rem'>
        <Heading as='h6' color='orange' >Order Now</Heading>
        <FormControl>
          <FormLabel>Resturant Name:</FormLabel>
          <Input type='text'  value={resNames}/>
      </FormControl>
      <FormControl>
          <FormLabel>FoodType:</FormLabel>
          <Input type='text'  value={foodNames}/>
      </FormControl>
     <FormControl>
          <FormLabel>Name:</FormLabel>
          <Input type='text' onChange={e=>setName(e.target.value)}/>
      </FormControl>
      <FormControl>
          <FormLabel>Quantity:</FormLabel>
          <Input type='text' onChange={e=>setQuantity(e.target.value)}/>
      </FormControl>
      <FormControl>
          <FormLabel>Phone:</FormLabel>
          <Input type='text' onChange={e=>setPhone(e.target.value)}/>
      </FormControl>
      <FormControl>
          <FormLabel>address:</FormLabel>
          <Input type='text' onChange={e=>setAddres(e.target.value)}/>
      </FormControl>
      <Box>
     <Button type='submit'>submit</Button>
      </Box>
     </Box>
     <Box m={10}>
     <Image src={images} width='200px'  height='200px'/> 
    </Box>
</Flex>
</form>
  </>
);
}
 export default Client