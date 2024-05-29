import {  Flex, Heading,Box } from '@chakra-ui/react';
import {NavLink,Link} from 'react-router-dom'
import React, { useContext } from 'react';
import '../App.css'
import { UserAuth } from '../contexts/UserAuth';
function NavBar () {
  const {token}=useContext(UserAuth)
  const navLinkStyle = ({isActive}) => {
                return{
                  fontWieght:isActive?'bold':'normal',
                  color:isActive?'orange':'white'
                }
   }
  return (
   <>
     <Flex as='nav'  flexWrap='wrap' bg='#22212a' color='white'>
     <Box display='flex' alignItems='center'>
         <Heading color='orange' stroke='4 white' >መኣዲ</Heading>
         <Box flexDirection='column' marginLeft='10px'>
         <Heading color='orange'> Food Ordering</Heading>
         <Heading letterSpacing={8} textAlign='end' color='orange'>Order Now</Heading>
         </Box>
         </Box>
         <Box display='flex' gap={20}  alignItems='center' ml='100px' _hover="bg:'orange'">
          <NavLink style={navLinkStyle} to='/'>Home</NavLink>
          <NavLink to='/menu-item' style={navLinkStyle}>Menu</NavLink>
          <NavLink style={navLinkStyle} to='/resturant'>Resturant</NavLink>
          <NavLink style={navLinkStyle} to='/login'>Login</NavLink>
           {token?<NavLink style={navLinkStyle} to='orders/'>Orders</NavLink>:null}
         </Box>  
         
    </Flex> 
   </>
  );
}
export default NavBar
