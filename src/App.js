import {React, useState} from 'react'
import './App.css';
import {Box, ChakraProvider, Flex, Heading,Image} from '@chakra-ui/react'
import {} from '@chakra-ui/icons'
import Menu from './components/Menu';
import Login from './components/Login'
import {Routes,Route} from 'react-router-dom'
import CreateAcount from './components/CreateAccount';
import Home from './components/Home'
import PrivateRoute from './components/PrivateRoute';
 import {Resturant} from './components/Resturant';
import NavBar from './components/NavBar';
import{ Client} from './components/Client'
import OrderSummery from './components/OrderSummery';
import { ResListProvider } from './contexts/ResListContext';
import { UserAuthProvider } from './contexts/UserAuth';
 function App(){
  return (
    <ResListProvider>
   <UserAuthProvider>
     <ChakraProvider>
        <Flex 
        display='flex'
        flexDirection='column' 
        >
          <Box >
           <NavBar/>
          </Box>
            <Box display='flex' flexGrow={1} flexDirection='column'>
              <Routes>
                <Route path='/'
                 element={<Home/>}/>
                <Route path='resturant'
                 element={<Resturant/>}/>
                 <Route path='orders' element={<OrderSummery/>}/>
               <Route path='menu-item'
                element={
                <PrivateRoute>
                   <Menu/>
                </PrivateRoute>
               }>
                 </Route>

                 <Route path='create-account'
                   element={<CreateAcount/>}/>
                 <Route path='login'
                   element={<Login/>}/>

                 < Route path='/meadi-custemers' 
                    element={
                     <Client/>
                     }/>
              </Routes>
          </Box> 

              <Box color='white' 
              bg='#22212a'  display='flex' 
              textAlign='center'
               flexDirection='column'
               fontSize='1.5rem'>
                <div>  <p>meadi online food delivery</p></div>
                <div> <p>Phone:0945345545</p></div>
                <p>Email:Meadi@gmail.com</p>
                <p>find us: facebook telegram</p>
                <strong>@copy allright is reserved</strong> 
               </Box>
        </Flex>
      </ChakraProvider>
      </UserAuthProvider>
    </ResListProvider>
    
  );    
}
export default App
// import React from "react"
// import { Spacer } from "@chakra-ui/react"
// import ComponentB from "./components/ComponentB"
// import { AuthProvider } from "./components/ComponentA"
// //import  ComponentProvider from "./components/ComponentA"

// function App(){
     
//    return(
//     <>
       
//           <AuthProvider>
//            <ComponentB/>
//          </AuthProvider>
      
//     </>
//    )
// }
// export default App

// import React from 'react';
// import { Routes,Route } from 'react-router-dom';
// import NavBar1 from './components/NavBar1';
// import Profile from './components/Profile'
// import Home1 from './components/Home1'
// import Users from './components/Users'
// import { UserContextProvider } from './contexts/UsersContext';
// import Customer from './components/Customer';
//  function App() {
//   return (
//     <UserContextProvider>
//       <NavBar1/>
//       <Routes>
//          <Route path='/' element={<Home1/>}/>
//         <Route path='/users' element={<Users/>}/>
//         <Route path='/profile' element={<Profile/>}/>
//         <Route path='/customer' element={<Customer/>}/>
//       </Routes>
//     </UserContextProvider>
//   );
// }
// export default App