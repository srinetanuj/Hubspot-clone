import {Box, Grid,GridItem,Text,Button, Heading,Image} from "@chakra-ui/react"

import React from 'react'

const HomePageTop = () => {
  return (
    <div>
      <>
       <Grid>
        <Box bg="#81E6D9" >
            <Grid templateColumns="50% 7% 20%" p={35} alignItems="center" justifyContent="center">
                 <GridItem ml="15%" >
                    <Text fontSize="20px" fontStyle="initial">
                        HubSpot and LinkedIn surveyed 1,000+ marketing leaders to find out how to build winning regional marketing teams and drive international growth.
                    </Text>
                 </GridItem>
                 <GridItem></GridItem>
                 <GridItem>
                 <Button colorScheme='black' variant='outline' bg="white" border="0">
                      Read the full report 
                  </Button>
                 </GridItem>
            </Grid>
        </Box>
       </Grid>
       <Grid bg="#F7522F" p={20} templateColumns="50% 50%">
          <GridItem color="#fff" m={3}>
            <Heading m={5} as="h6" size="md" >HUBSPOT CRM PLATFORM</Heading>
           <Heading m={5} as='h2' size='3xl' > Powerful,<br /> not overpowering </Heading>
           <Heading m={5} as="h6" size="md" >Finally, a CRM platform that’s both powerful and easy to use. <br /> Create delightful customer experiences. Have a delightful time doing it.</Heading>
           <div style={{display:"flex"}}>
           <Button colorScheme='teal'fontSize="20px" ml={5} border="0" w="30%"  variant='outline' bg="#fff" p={35}>Get a demo</Button>
           <Button colorScheme='#fff' fontSize="20px" w="30%" ml={5} variant='outline' p={35} >Get started free</Button>
           </div>
           <Heading m={5} as="h6" size="md" >Get started with free tools,<br /> or get more with our premium software.</Heading>
          </GridItem>
          <GridItem>
            <Image  src="https://www.hubspot.com/hubfs/SUI-Homepage-Header-Desktop@2x.png"/>
          </GridItem>
       </Grid>
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
      </>
    </div>
  )
}

export default HomePageTop
