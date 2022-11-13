
import {
     Image,
     Heading,
     VStack,
     Box,
     Text,
     List,
     ListIcon,
     ListItem,
     Button,
     useDisclosure,
     
} from '@chakra-ui/react'
import React from 'react'

const Card = ({title,logo,para,ch_para1,ch_para2,ch_para3}) => {
  const {MdCheckCircle}=useDisclosure (true);
  return (
    <>
      <VStack>
        <Box boxShadow='2xl' p='6' rounded='md' bg='white' textAlign="left" w="100%"  h="auto">
        <Box textAlign="left">
           <div style={{display:"flex",justifyContent:"center", marginTop:"50px"}}>
              <Image  src={logo} w="50px" h="50px" />
              <Heading>{title}</Heading>
           </div>
           <Text fontSize='md' m={10}>{para}</Text>
        </Box>
        <Box>
          <div style={{borderTop:"1px solid gray",margin:"10px"}}></div>
          {/* <Divider orientation='horizontal' /> */}
        </Box>
        <Box alignItems="center" justifyContent="center" >
          <Heading as="h6" size="md" mt={8} ml={6}>Popular Features</Heading>
          <List spacing={3} ml={6} mt={3}>
          <ListItem>
           <ListIcon as={MdCheckCircle} color='orange.500' />
           {/* <Icon as={CheckCircle}/> */}
             {ch_para1}
            </ListItem>
          <ListItem>
           <ListIcon as={MdCheckCircle} color='orange.500' />
           {/* <CheckCircle/> */}
             {ch_para2}
            </ListItem>
          <ListItem>
           <ListIcon as={MdCheckCircle} color='orange.500' />
           {/* <CheckCircle/> */}
             {ch_para3}
            </ListItem>
          </List>

          <Button colorScheme='teal'fontSize="20px" ml={5} mt={5}   border="0" variant='outline' bg="#F7522F" w="90%" p={25} color="white">Get started</Button>
        </Box>
        
        </Box>
      </VStack>
    </>
  )
}

export default Card
