import {
  Grid,
  Heading,
  Text,
  Box,
  GridItem,
  Image,

} from "@chakra-ui/react"
const Advertisement = () => {
  return (
    <div>
       <Grid  bg="green.500" p={20} color="#fff" textAlign="center" mt={100}>
          <Heading as="h2" size="xl">Learn and grow with award-winning <br /> support and a thriving community behind <br /> you.</Heading>  
          <Text fontSize="2xl">You don't have to go it alone. Master the inbound methodology and get the most out of <br /> your tools with HubSpot's legendary customer support team and a community of <br /> thousands of marketing and sales pros just like you.</Text>

          <Box>
          <Grid templateColumns='repeat(4, 1fr)' gap={0} w='60%' m='auto' mt='100'>
          <GridItem w='100%' h='200' borderRight='1px solid white'  borderBottom='1px solid white'>
            <Box  mt={10}>
            <Image src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-handshake-icon-png-image_695871.jpg" w={50} h={50} ml={100} borderRadius={10} mb={2} />
            <Heading >150<sup>+</sup></Heading>
            </Box>
            <Heading as="h6" size="md">HubSpot user groups</Heading>
          </GridItem>
          <GridItem w='100%' h='200'  borderRight='1px solid white'  borderBottom='1px solid white'>
            <Box mt={10}>
            <Heading as="h6" size="md" fontStyle="initial">HubSpot</Heading>
            <Text>BLOGS</Text>
            <Heading >7M<sup>+</sup></Heading>
            <Heading as="h6" size="md">monthly visits</Heading>
            </Box>
          </GridItem>
          <GridItem w='100%' h='200'   borderRight='1px solid white'  borderBottom='1px solid white'> 
            <Box mt={10}>
            <Heading as="h6" size="xs" fontStyle="initial">HubSpot</Heading>
            <Heading as="h4" size="xl" fontStyle="initial">Academy</Heading>
            <Heading >453K<sup>+</sup></Heading>
            <Heading as="h6" size="md">certified professionals</Heading>
            </Box>
          </GridItem>
          <GridItem w='100%' h='200' borderBottom='1px solid white'>
            <Box mt={10}>
            <Heading as="h4" size="xl" fontStyle="initial">INBOUND</Heading>
            <Heading >70K</Heading>
            <Heading as="h6" size="md">registered attendees</Heading>
            </Box>
          </GridItem>
          <GridItem w='100%' h='200' borderRight='1px solid white' >
            <Box mt={10}>
            <Heading as="h6" size="md" fontStyle="initial">HubSpot</Heading>
            <Text>App Marketplace</Text>
            <Heading >1,160<sup>+</sup></Heading>
            <Heading as="h6" size="md">integrations</Heading>
            </Box>
          </GridItem>
          <GridItem w='100%' h='200'  borderRight='1px solid white'>
            <Box mt={10}>
            <Image src="https://www.freepnglogos.com/uploads/globe-png/file-blank-globe-svg-wikimedia-commons-40.png" w={50} h={50} ml={100} borderRadius="50%" mb={2} />
            <Heading >6</Heading>
            <Heading as="h6" size="md">languages</Heading>
            </Box>
          </GridItem>
          <GridItem w='100%' h='200' borderRight='1px solid white' >
          <Box mt={10}>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIfaOyBBMF5VGv_2_FAD-uwiT0anIkmKsxkBixQ2sr&s" w={50} h={50} ml={100} borderRadius="50%" mb={2} />
            <Heading >3.1M<sup>+</sup></Heading>
            <Heading as="h6" size="md">social followers</Heading>
            </Box>
          </GridItem>
          <GridItem w='100%' h='200' >
          <Box mt={10}>
            <Image src="https://e7.pngegg.com/pngimages/406/844/png-clipart-computer-icons-person-user-spark-icon-people-share-icon-thumbnail.png" w={50} h={50} ml={100} borderRadius="50%" mb={2} />
            <Heading >150,000<sup>+</sup></Heading>
            <Heading as="h6" size="md">social followers</Heading>
            </Box>
          </GridItem>
        </Grid>
        </Box>
       </Grid>
    </div>
  )
}

export default Advertisement
