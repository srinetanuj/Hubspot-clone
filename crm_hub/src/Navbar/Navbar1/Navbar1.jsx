import { Grid, GridItem, Heading,Link} from '@chakra-ui/react';
import Contact from './Contact';
import Language from './Language';
import CustomerSupport from './CustomerSupport';
import Login from './Login';
import About from './About';
import { IconButton } from '@chakra-ui/react'
import {SearchIcon} from "@chakra-ui/icons"
function Navbar1(){
   return(
  
      <Grid templateColumns='150px 200px 300px 30px 150px 250px 150px' w="80%" m="auto"  h="auto" mt={5} mb={5}>
      <GridItem w='20%%' h='10'  >
        <Heading as="h6" size="md"> <Link to="#"><Language/> </Link></Heading>
      </GridItem>
      <GridItem w='20%%' h='10'  >
      <Heading as="h6" size="md"> <Link to="#"> <Contact/> </Link></Heading>
      
      </GridItem>
      <GridItem w='20%%' h='10'  ></GridItem>
      <GridItem w='20%%' h='10'  >
     
      <Heading as="h6" size="md">  <IconButton aria-label='Search database' icon={<SearchIcon />} /> </Heading>
      </GridItem>
      <GridItem w='20%%' h='10'  >
      <Heading as="h6" size="md"> <Link to="#"> <Login/> </Link></Heading>
        
      </GridItem>
      <GridItem w='20%%' h='10'>
      <Heading as="h6" size="md">  <Link to="#"><CustomerSupport/></Link> </Heading>
      
      </GridItem>
      <GridItem w='20%%' h='10'  >
      <Heading as="h6" size="md"><Link to="#"> <About/></Link></Heading>
       
      </GridItem>
      </Grid>
   
   )
}
export default Navbar1;