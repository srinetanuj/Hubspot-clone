import { Grid} from "@chakra-ui/react"
import Footer from "../Footer/Footer"
import Card from "./Card";
import axios from 'axios';
import { useState,useEffect } from "react";
import HomePageTop from "./HomePageTop";
import HomePageTopNext from "./HomePageTopNext";
import PlatForm from "./PlatForm";
import Advertisement from "./Advertisement";
import Customer from "./Customer";
import Growing from "./Growing";


const getCard =()=>{
  return axios.get(`http://localhost:5000/card`);
}

const HomePage = () => {
  const [data,setData] = useState([]);

  useEffect(()=>{
      getCard().then((res)=>setData(res.data))
      .catch((err)=>console.log(err))
      .finally(()=>console.log("called"))
  },[])
   console.log(data)
  return (
      <>
       <HomePageTop/>
       <HomePageTopNext/>
       <PlatForm/>
       <Grid templateColumns="repeat(3,1fr)" w="80%" m="auto"  gap={10} >
      
           {data&&data.map((item)=>(
            <Card 
            id={item.id}
            key={item.id}
            title={item.title}
            logo={item.logo}
            para={item.para}
            ch_para1={item.ch_para1}
            ch_para2={item.ch_para2}
            ch_para3={item.ch_para3}

            />
           ))}
          
       </Grid>
       <Advertisement/>
       <Customer/>
       <Growing/>
       <Footer/>
      </>
  
  )
}

export default HomePage
