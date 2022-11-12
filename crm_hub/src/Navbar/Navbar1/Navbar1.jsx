import { Grid, GridItem, Heading} from '@chakra-ui/react';
import Contact from './Contact';
import Language from './Language';
import CustomerSupport from './CustomerSupport';
import Login from './Login';
import About from './About';
import { IconButton } from '@chakra-ui/react'
import {SearchIcon} from "@chakra-ui/icons"
function Navbar1(){
   return(
  
      <Grid templateColumns='150px 200px 600px 20px 150px 200px 150px' w="80%" m="auto" gap={3} mt={30} h={20}>
      <GridItem w='20%%' h='10'  >
        <Heading as="h6" size="md"> <Language/> </Heading>
      </GridItem>
      <GridItem w='20%%' h='10'  >
      <Heading as="h6" size="md">  <Contact/> </Heading>
      
      </GridItem>
      <GridItem w='20%%' h='10'  ></GridItem>
      <GridItem w='20%%' h='10'  >
     
      <Heading as="h6" size="md">  <IconButton aria-label='Search database' icon={<SearchIcon />} /> </Heading>
      </GridItem>
      <GridItem w='20%%' h='10'  >
      <Heading as="h6" size="md">  <Login/> </Heading>
        
      </GridItem>
      <GridItem w='20%%' h='10'>
      <Heading as="h6" size="md"> <CustomerSupport/> </Heading>
      
      </GridItem>
      <GridItem w='20%%' h='10'  >
      <Heading as="h6" size="md"> <About/></Heading>
       
      </GridItem>
      </Grid>
   
   )
}
export default Navbar1;