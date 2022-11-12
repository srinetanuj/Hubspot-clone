import React from 'react'
import {
    Grid,
    Box,
    GridItem,
    Text,
    Button
} from "@chakra-ui/react"

const HomePageTop = () => {
  return (
    <div>
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
    </div>
  )
}

export default HomePageTop