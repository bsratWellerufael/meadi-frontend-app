import React, { useContext, useState } from 'react';
import {FormControl, FormLabel, Input,Flex,Box, Button, Heading} from '@chakra-ui/react'
import {useNavigate,useLocation, Link} from 'react-router-dom'
import axios from 'axios';
import { UserAuth } from '../contexts/UserAuth';
function Login() {
     const [email,setEmail]=useState()
     const [password,setPassword]=useState()
     const {token,login,setToken}=useContext(UserAuth)
     const location=useLocation()
     const redirectPath=location.state?.path || '/'
     const navigate=useNavigate()
     const handleLogin=async(e)=>{
          e.preventDefault()
          navigate(redirectPath ,{replace:true})
           login(token)
           await axios.post('http://localhost:4000/login',{email,password})
          .then((result)=>{
                 setToken(result.data)   
          })
          .catch((err)=>{
                 console.log(err)
          })
     }
  return (
    <Box backgroundColor='orange'>
 <form onSubmit={handleLogin} >
   <Flex
     justifyContent='center'
   >
      <Box 
      bg='#22212a'
      width='35%'
      padding='10px' m='10px'
      borderRadius='5px'
      color='white'
      >
          <Box textAlign='center'>
          <Heading as='h6' color='orange' >Login</Heading>
          </Box>
        
        <FormControl>
            <FormLabel>Email:</FormLabel>
            <Input type='text' 
                  value={email}
                   onChange={e=>setEmail(e.target.value)}/>
        </FormControl>
        <FormControl>
            <FormLabel>Password:</FormLabel>
            <Input type='password' 
            value={password}
            onChange={e=>setPassword(e.target.value)}
            />
        </FormControl>
        <Box color='orange'>
        <p>have not account</p>
         <Link to='/create-account'>signup</Link>
       </Box>
        <Box textAlign='center'>
           <Button onClick={handleLogin}> Login</Button>
       </Box>
      </Box>
   </Flex>
   </form>
    </Box>
   
  );
}
export default  Login
