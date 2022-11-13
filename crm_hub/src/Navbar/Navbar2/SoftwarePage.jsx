import { 
    Box,
    Heading,
    Button,
    Grid,
    Text
 } from '@chakra-ui/react';
 import axios from 'axios';
 import {useState,useEffect} from "react";
import SoftPageData from './SoftPageData';


const getSoftData = ()=>{
  return axios.get(`http://localhost:5000/card`);
}

const SoftwarePage = ({logo,title,description}) => {
  const [data,setData] = useState([]);
  useEffect(()=>{
    getSoftData().then((res)=>setData(res.data))
    .catch((err)=>console.log(err))
    .finally(()=>console.log("called"))
  },[])
  return (
    <>
    <Box w="60%" m="auto" textAlign="center"  mb={30} >
        <Heading m={6} as="h3" size="md" >The HubSpot CRM Platform</Heading>
        <Heading as="h6" size="sm">All of HubSpot’s marketing, sales CRM, customer service, CMS, and operations software on one platform.</Heading>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"20px",marginTop:"20px"}}>
            <Button colorScheme='teal' variant='outline' p="10px 55px">
            <Heading as="h6" size="sm">Free HubSpot CRM</Heading>
            </Button>
            <Button p="10px 55px" colorScheme='teal' variant='outline'>Overview of all products</Button>
        </div>  
         <Box >
          <Grid templateColumns="repeat(3,1fr)" w="auto" m="auto" mt={25} mb={25}  gap={5}>
           {data&&data.map((item)=>(
            <SoftPageData
              logo={item.logo}
              title={item.title}
              description={item.description}
            />
           ))}
          </Grid>
         </Box>
         <Heading as="h6" size="md">App MarketPlace</Heading>
         <Text>Connect your favorite apps to HubSpot.<Text color="teal">See all integrations</Text></Text>
    </Box>
    </>
  )
}

export default SoftwarePage