import { 
    Grid,
    Box,
    GridItem,
    Heading,
    Text,
    Button,
    Image
 } from '@chakra-ui/react'


const Growing = () => {
  return (
    <div> 
      <Grid templateColumns='repeat(2, 1fr)' gap={6} w="90%" m="auto" mb={200}>
        <GridItem w='100%' h='300'  >
            <Box textAlign="left" ml="100px">
                <Heading as="h2" size="xl" m={8}>Start Growing With HubSpot Today</Heading>
                <Text m={8} fontSize='xl' >With tools to make every part of your process more human and a support team <br /> excited to help you, getting started with inbound has never been easier.</Text>
                <div style={{display:"flex"}}>
                <Button colorScheme='teal'fontSize="20px" ml={10} border="0" w="30%"  variant='outline' bg="#F7522F" p={35} color="#fff">Get a demo</Button>
                <Button colorScheme='#F7522F' color="#F7522F" fontSize="20px" w="30%" ml={5} variant='outline' p={35} >Get started free</Button>
                </div>
                <Text m={7} fontSize='xl'>Get started with free tools, or get more with our premium software.</Text>
            </Box>
        </GridItem>
        <GridItem w='100%' h='300'  ml={200} mt={-20}>
            <Image src="https://www.hubspot.com/hubfs/CSOL/module-assets/_cta_contentblock_headshots_headshot_6.png" w="60%" h="auto" />
        </GridItem>
    </Grid>
    </div>
  )
}

export default Growing
