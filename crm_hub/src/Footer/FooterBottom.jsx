
import { Grid ,GridItem,Image,Heading,Text,Link} from '@chakra-ui/react'
import React from 'react'

const FooterBottom = () => {
  return (
    <>
     <Grid templateColumns='200px 300px 200px'  gap={6} pl={40 } pr={40} pb={20} bg="#213343" color="white" display="flex">
    <GridItem w='100%' h='10'  >
        <div style={{borderTop:"1px solid white", marginTop:"20px"}}></div>
    </GridItem>
    <GridItem w='100%' h='10' >
     <div style={{display:"flex",alignItems:"center",justifyContent:'center'}}>
        <Image w="50px" h="50px" ml="5px" borderRadius="10px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7xIO2TWJzxChZ8QDyD4BMLw6R4KZBOAX8yQ&usqp=CAU"/>
        <Image w="50px" h="50px" ml="5px" borderRadius="10px" src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg"/>
        <Image w="50px" h="50px" ml="5px" borderRadius="10px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTHHWr7IIzhgQE0sfbPHXOd8Cwte2fhdk-w&usqp=CAU"/>
        <Image w="50px" h="50px" ml="5px" borderRadius="10px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUwZwh2-_Y1FpX24gWbF7ri7wTxJl-NtFJPw&usqp=CAU"/>
        <Image w="50px" h="50px" ml="5px" borderRadius="10px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTawKjFIVe0Vc9YVZnV_5gDRFHr_JwFdQyEoA&usqp=CAU"/>
        <Image w="50px" h="50px" ml="5px" borderRadius="10px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnCgwnKOGOUosPXqV2DMF08IDTZh6FWKWpAQ&usqp=CAU"/>
     </div>
    </GridItem>
    <GridItem w='100%' h='10' >
    <div style={{borderTop:"1px solid white", marginTop:"20px"}}></div>
    </GridItem>
    </Grid>
    <Grid bg="#213343" color="white" textAlign="center" pb={20} >
       <Heading fontStyle="italic">HubSpot</Heading>
       <Text p={3}>Copyright Ⓒ 2022 HubSpot, Inc. </Text>
       <div style={{display:"flex",gap:"30px", alignItems:"center",justifyContent:"center"}}>
          <Link  href="#" >Legal Stuff</Link>
          <div style={{border:"1px solid white", height:"20px"}}></div>
          <Link  href="#" >Privacy Policy</Link>
          <div style={{border:"1px solid white", height:"20px"}}></div>
          <Link  href="#" >Security</Link>
       </div>
    </Grid>
    </>
  )
}

export default FooterBottom

/*
<GridItem>
                <Image w="50px" h="50px" ml="5px" borderRadius="10px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7xIO2TWJzxChZ8QDyD4BMLw6R4KZBOAX8yQ&usqp=CAU"/>
            </GridItem>
            <GridItem>
                <Image w="50px" h="50px" ml="5px" borderRadius="10px" src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg"/>
            </GridItem>
            <GridItem>
                <Image w="50px" h="50px" ml="5px" borderRadius="10px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTHHWr7IIzhgQE0sfbPHXOd8Cwte2fhdk-w&usqp=CAU"/>
            </GridItem>
            <GridItem>
                <Image w="50px" h="50px" ml="5px" borderRadius="10px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUwZwh2-_Y1FpX24gWbF7ri7wTxJl-NtFJPw&usqp=CAU"/>
            </GridItem>
            <GridItem>
                <Image w="50px" h="50px" ml="5px" borderRadius="10px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTawKjFIVe0Vc9YVZnV_5gDRFHr_JwFdQyEoA&usqp=CAU"/>
            </GridItem>
            <GridItem>
                <Image w="50px" h="50px" ml="5px" borderRadius="10px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnCgwnKOGOUosPXqV2DMF08IDTZh6FWKWpAQ&usqp=CAU"/>
            </GridItem>
*/