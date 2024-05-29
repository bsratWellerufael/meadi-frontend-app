import { Avatar, Box, Button,  Flex, FormControl,
      FormLabel, Heading, Input, Spacer,} 
from '@chakra-ui/react';
import React, {useState } from 'react';
import axios from 'axios'
 function CreateAcount() {
  const [resName ,setResName]=useState('')
  const [ownerName ,setOwnerName]=useState('')
  const [email ,setEmail]=useState('')
  const [phone ,setPhone]=useState('')
  const [address,setAddress]=useState('')
  const [city ,setCity]=useState('')
  const [resState,setState]=useState('')
  const [password,setPassword]=useState('')
  const [succssfulyMessage,setSuccssfulyMessage]=useState('')
 const handleSubmit=async (e)=>{
        e.preventDefault()
         try{
               const response=await axios.post('http://localhost:4000/owner_detail'
               ,{resName,ownerName,email,phone,address,city,resState,password})
           if(response.data){
                setSuccssfulyMessage(response.data)
           }
           else{
            console.log('error')
           }
         }
         catch(err){
            console.log(err)
         }
 }
  return (
        <form onSubmit={handleSubmit}>
        <Flex 
         justifyContent='center'
         padding='10px' 
         backgroundColor='orange'
         textAlign='center'
        >
            <Box 
             boxShadow='3xl'
             bg='#22212a' width='35%'
             color='white'
             padding='10px' fontSize='2rem' >
             
           <Box 
           display='flex' 
           justifyContent='space-evenly'>
          <Heading as='h6' color='orange' >Create Account</Heading>
                    <Avatar
                    src='burger.png'
                    boxShadow='sm'
                    p='1px'
                    />
                </Box>
                <Spacer/>
            <FormControl >
            <FormLabel>Resturant Name\ሽም ምግቤት</FormLabel>
           < Input
              type='text' 
              name='name' 
              value={resName}
              onChange={e=>setResName(e.target.value)}
           />
         </FormControl >
         <FormControl >
            <FormLabel>Owner Name\ሽም በዓል ዋና</FormLabel>
           < Input
             type='text' 
             name='name' 
             value={ownerName}
             onChange={e=>setOwnerName(e.target.value)} />
         </FormControl>
         <FormControl >
            <FormLabel>Email\ኢሜል</FormLabel>
           < Input
            type='text'
            name='name'
            value={email}
            onChange={e=>setEmail(e.target.value)}/>
         </FormControl>
         <FormControl>
            <FormLabel>Phone\ስልኪ ቁፅሪ</FormLabel>
           < Input 
           type='text' 
           name='name' 
           value={phone}
           onChange={e=>setPhone(e.target.value)}/>
         </FormControl>
         <FormControl>
            <FormLabel>Address\ኣድራሻ</FormLabel>
           < Input type='text' 
           name='name' 
           value={address}
           onChange={e=>setAddress(e.target.value)}/>
         </FormControl>
         <FormControl>
            <FormLabel>City\ከተማ</FormLabel>
           < Input type='text' 
           name='name'
           value={city} 
           onChange={e=>setCity(e.target.value)}/>
         </FormControl>
         <FormControl>
            <FormLabel>State\ክልል</FormLabel>
           < Input type='text' 
           name='name' 
           value={resState}
           onChange={e=>setState(e.target.value)}/>
         </FormControl>
         <Box>
         <FormControl>
            <FormLabel>Password\መሕለፊ ቃል</FormLabel>
           < Input type='text' 
           name='password' 
           value={password}
           onChange={e=>setPassword(e.target.value)}/>
         </FormControl>
         </Box>
         <Box>
          {
            succssfulyMessage
          }
         </Box>
         <Button type='submit'>create account</Button>
            </Box>
        </Flex>
       
    </form>
     
  );
}
export default CreateAcount
