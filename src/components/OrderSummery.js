import { Flex, Table, Td, Th, Tr,Box } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

 function OrderSummery() {
           const [data,setData]=useState([])
            useEffect(()=>{
                 axios.get('http://localhost:4000/order-summery')
                .then((result)=>{
                       setData(result.data)
                })
                .catch((err)=>{
                    console.log(err)
                })
           },[])
  return (
      <>
      <Flex bg='orange'>
           <Box p={4} m='10px' >
                   { data.map((item)=>
                   <Table  border='3px' bg='#22212a' color='white' m='10px'>
                   <Tr gap={20}><Th color='orange'>ResturantName</Th>
                   <Th color='orange'>FoodName</Th>
                   <Th color='orange'>CustomerName:</Th>
                   <Th color='orange'>Phone</Th>
                   <Th color='orange'>Address</Th>
                   <Th color='orange'>Quantity</Th>
                   <Th color='orange'>Date</Th>
                   </Tr>
                   
                    <Tr><Td>{item.resNames}</Td>
                      <Td>{item.foodNames}</Td>
                      <Td>{item.name}</Td>
                      <Td>{item.phone}</Td>
                      <Td>{item.address}</Td>
                       <Td>{item.quantity}</Td>
                       <Td>{item.createdAt}</Td>
                       </Tr>
                      </Table> 
                     )
                    }
               
           </Box>
      </Flex>
      </>
  );
}
export default OrderSummery