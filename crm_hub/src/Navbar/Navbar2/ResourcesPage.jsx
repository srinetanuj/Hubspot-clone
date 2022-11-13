import React from 'react'
import{
    Box,
    Grid,
    GridItem,
    Heading,
    Image,
    Link
} from "@chakra-ui/react"
// import {Link} from "react-router-dom"
const ResourcesPage = () => {
  return (
    <Box>
       <Grid templateColumns='repeat(2, 1fr)' gap={6} w="80%" m="auto" h="auto" p="20px" mt={10}>
            <GridItem w='100%' h='auto' >
                <div style={{display:"flex", gap:"5px"}}>
                   <Image src='https://53.fs1.hubspotusercontent-na1.net/hubfs/53/WBZ-1165%20Global%20Nav%20Redesign/1-icon.svg'/>
                   <Heading as="h3" size="md">Education</Heading>
                </div>
                <Box ml="20px" p={1}>
                <Heading p={1} as="h6" size="sm"><Link to="#"> Blog</Link></Heading>
                <Heading p={1}  as="h6" size="sm"><Link to="#"> Ebooks, Guides, & More</Link></Heading>
                <Heading p={1}  as="h6" size="sm"><Link to="#"> Free Courses & Certifications</Link></Heading>
                <Heading p={1}  as="h6" size="sm"><Link to="#"> Inbound Methodology</Link></Heading>
                </Box>
              
            </GridItem>
            <GridItem w='100%' h='auto' >
            <div style={{display:"flex", gap:"5px"}}>
                   <Image src='https://53.fs1.hubspotusercontent-na1.net/hubfs/53/WBZ-1165%20Global%20Nav%20Redesign/3-icon.svg'/>
                   <Heading as="h3" size="md">Services</Heading>
                </div>
                <Box ml="20px" p={1}>
                <Heading p={1} as="h6" size="sm"><Link to="#"> Onboarding & Consulting Services</Link></Heading>
                <Heading p={1}  as="h6" size="sm"><Link to="#">Hire a Services Provider</Link></Heading>
                </Box>
            </GridItem>
            <GridItem w='100%' h='auto' >
            <div style={{display:"flex", gap:"5px"}}>
                   <Image src='https://53.fs1.hubspotusercontent-na1.net/hubfs/53/WBZ-1165%20Global%20Nav%20Redesign/2-icon.svg'/>
                   <Heading as="h3" size="md">Why HubSpot ?</Heading>
                </div>
                <Box ml="20px" p={1}>
                <Heading p={1} as="h6" size="sm"><Link to="#">case Studies</Link></Heading>
                <Heading p={1}  as="h6" size="sm"><Link to="#">Why Choose HubSpot?</Link></Heading>
                </Box>
            </GridItem>
            <GridItem w='100%' h='auto' >
            <div style={{display:"flex", gap:"5px"}}>
                   <Image src='https://53.fs1.hubspotusercontent-na1.net/hubfs/53/WBZ-1165%20Global%20Nav%20Redesign/4-icon.svg'/>
                   <Heading as="h3" size="md">User Resources</Heading>
                </div>
                <Box ml="20px" p={1}>
                <Heading p={1} as="h6" size="sm"><Link to="#">Partner Programs</Link></Heading>
                <Heading p={1}  as="h6" size="sm"><Link to="#">Developer Tools</Link></Heading>
                <Heading p={1}  as="h6" size="sm"><Link to="#">Community</Link></Heading>
                <Heading p={1}  as="h6" size="sm"><Link to="#">HubSpot Ecosystem</Link></Heading>
                </Box>
            </GridItem>
            
            </Grid>
       
    </Box>
  )
}

export default ResourcesPage
