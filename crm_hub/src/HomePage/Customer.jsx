import { 
  Grid,
  GridItem,
  Box,
  Heading,
  Image
} from '@chakra-ui/react'

const Customer = () => {
  return (
    <div>
    <Grid templateColumns='repeat(2, 1fr)' gap={6} w="90%" m="auto" mt={100} >
    <GridItem w='100%' h='400'  alignItems="center" justifyContent="center" >
       <Box mt={10} textAlign="center">
          <Heading >150,000<sup>+</sup></Heading>
          <Heading as="h6" size="md">customers in over 120 countries growing <br /> their businesses with HubSpot</Heading>
        </Box>
    </GridItem>
    <GridItem w='100%' h='400' >
      <Grid templateColumns='repeat(4, 1fr)' gap={6}>
          <GridItem w='100%' h='100'  >
          <Image src="https://f.hubspotusercontent00.net/hubfs/53/1200px-WWF_logo_svg%20(1).png" w="100%" h="auto" />
          </GridItem>
          <GridItem w='100%' h='100'  >
            <Image src="https://f.hubspotusercontent00.net/hubfs/53/trello-logo-blue%20(1).png"   />
          </GridItem>
          <GridItem w='100%' h='100' >
            <Image src="https://www.hubspot.com/hubfs/Reddit%20Logo%20for%20HS%20website%20(1).png"   />
          </GridItem>
          <GridItem w='100%' h='100'  >
            <Image src="https://www.hubspot.com/hubfs/WW%20Logo%20for%20HS%20Website%20(2).png"   />
          </GridItem>
          <GridItem w='100%' h='100'  >
            <Image src="https://f.hubspotusercontent00.net/hubfs/53/soundcloud.png"  />
          </GridItem>
          <GridItem w='100%' h='100'  >
            <Image src="https://www.hubspot.com/hubfs/Momentive%20Logo%20for%20HS%20website.png" />
          </GridItem>
          <GridItem w='100%' h='100' >
            <Image src="https://www.hubspot.com/hubfs/DoorDash%20Logo%20for%20HS%20Website-1.png"  />
          </GridItem>
          <GridItem w='100%' h='100'  >
            <Image src="https://www.hubspot.com/hubfs/Eventbrite%20Logo%20for%20HS%20Website-1.png"  />
          </GridItem>
        </Grid>
   
    </GridItem>
   
  </Grid>
    </div>
  )
}

export default Customer
