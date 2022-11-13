import { 
  Grid, 
  GridItem,
  Heading,
  Image,
  Button,
  Box,
  Link
} from '@chakra-ui/react'

import logo1 from "./logo1.png"
import Resources from './Resources'
import Software from "./Software"
const Navbar2 = () => {
  return (
    <div>
      <Box  pos="sticky" >
      <Grid templateColumns='130px 200px 80px 200px 150px 400px' w="80%" h={20} m="auto" gap={1} position="sticky">
        <GridItem w='100%' h='10'   >
          <Image src={logo1} h={10} />
          </GridItem>
       <GridItem w='100%' h='10'  >
        <Link to="#"> <Software/> </Link>
      
        </GridItem>
        <GridItem w='100%' h='10'  >
        <Heading as="h6" size='md'  mt={2}> <Link to="#">Pricing</Link> </Heading>
        </GridItem>
        <GridItem w='100%' h='10'  >
        <Link to="#"><Resources/></Link> 
          
        </GridItem>
        <GridItem w='100%' h='10'  ></GridItem>
        <GridItem w='100%' h='10'  >
        <div style={{display:"flex", alignItems:"center",justifyContent:"center"}} >
           <Button colorScheme='teal'fontSize="20px" ml={5} w={200} border="0" variant='outline' bg="#F7522F" p={25} color="white">Get a demo</Button>
           <Button colorScheme='#F7522F'color="#F7522F" fontSize="20px" w={200} ml={5} variant='outline' p="25px 80px" >Get started free</Button>
           </div>
        </GridItem>
      </Grid>
      </Box>
    </div>
  )
}

export default Navbar2
