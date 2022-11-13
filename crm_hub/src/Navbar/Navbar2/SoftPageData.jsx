import React from 'react'
import {
    Image,
    VStack,
    Text,
    Heading,
    Box
} from "@chakra-ui/react"

const SoftPageData = ({logo,title,description}) => {
  return (
  
        <>
        <VStack>
        <Box boxShadow='2xl' p='2' rounded='md' bg='white' textAlign="left" w="auto"  h="auto" >
        <Box textAlign="left">
           <div style={{display:"flex",justifyContent:"center", marginTop:"20px"}}>
              <Image  src={logo} w="30px" h="30px" />
              <Heading as="h6" size="md">{title}</Heading>
           </div>
           <Text fontSize='md' m={10}>
            {description} <Heading color="teal" as="h6" size="sm">Free and premium plans</Heading>
           </Text>
        </Box>
        </Box>
      </VStack>  
        </>
  
  )
}

export default SoftPageData