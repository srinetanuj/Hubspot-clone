import React from 'react'
import {
    Grid,
    GridItem,
    Heading,
    Image,
    Button
} from "@chakra-ui/react"
const HomePageTopNext = () => {
  return (
    <div>
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
    </div>
  )
}

export default HomePageTopNext