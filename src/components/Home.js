import { Flex ,Image,} from '@chakra-ui/react';
import {React }from 'react';
 function Home() { 
  return (
       <Flex 
       justifyContent='center' 
       alignItems='center' 
       backgroundColor='orange' > 
       <Image src='burger.png'/>
      </Flex>
  );
}
export default Home