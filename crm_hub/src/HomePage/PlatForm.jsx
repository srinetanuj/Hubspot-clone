
import React from 'react'
import {
    Grid,
    Box,
    Heading,
    Text,
    Button
} from "@chakra-ui/react"
const PlatForm = () => {
  return (
    <div>
      <Grid m={100} w="80%" >
        <Box m="auto">
        <Heading as='h4' size='2xl' textAlign="center">The CRM Platform Your Whole Business Will Love</Heading>
        <Text fontSize='2xl' m={10}>HubSpot’s CRM platform has all the tools and integrations you need for marketing, sales, content <br /> management, and customer service. Each product in the platform is powerful alone, but the real magic <br /> happens when you use them together.</Text>
        <div style={{display:"flex", alignItems:"center",justifyContent:"center"}} >
           <Button colorScheme='teal'fontSize="20px" ml={5} border="0" variant='outline' bg="#F7522F" p={25} color="white">Get a demo</Button>
           <Button colorScheme='#F7522F'color="#F7522F" fontSize="20px"  ml={5} variant='outline' p={25} >Get started free</Button>
           </div>
        </Box>
       </Grid>
    </div>
  )
}

export default PlatForm
