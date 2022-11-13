
import { Grid,Heading,Link} from '@chakra-ui/react'


const FooterTop = () => {
 
  return (
    <>
    <Grid templateColumns='300px 300px 300px 300px 300px' p={20} gap={20} bg="#213343" color="white" display="flex">
    <div style={{borderRight:"1px solid white",margin:"0 50px ", padding:" 0px 50px "}}>
    <Grid display="flex" gap={6} >
     <Grid gap={5} >
      <Heading as='h6' size='md'>Popular Features</Heading>
      <Link to="#">Free Meeting Scheduler App</Link>
      <Link>Social Media Tools</Link>
      <Link>Email Tracking Software</Link>
      <Link>Sales Email Automation</Link>
      <Link>Ads Software</Link>
      <Link>Email Marketing Software</Link>
      <Link>Lead Management Software</Link>
      <Link>Pipeline Management Tools</Link>
      <Link>Free Website Builder</Link>
      </Grid>
      <Grid >
        <Heading></Heading>
        <Heading></Heading>
        <Link>Sales Email Templates</Link>
        <Link>Help desk Software</Link>
        <Link>Free Online Form Builder</Link>
        <Link>Free Chatbot Builder</Link>
        <Link>Free Live Chat Software</Link>
        <Link>Marketing Analytics</Link>
        <Link>Free Loading Page Builder</Link>
        <Link>Free Web Hosting</Link>
      </Grid>
     </Grid>
    </div>
      <Grid gap={5} >
      <Heading as='h6' size='md'>Free Tools</Heading>
      <Link>Website Grader</Link>
      <Link>Make My Persona</Link>
      <Link>Email Signature Generator</Link>
      <Link>Blog Ideas Generator</Link>
      <Link>Invoice Template Generator</Link>
      <Link>Marketing Plan Generator</Link>
      <Link>Free Business Templates</Link>
      <Link>Industry Benchmark Data</Link>
      <Link>Software Comparisons</Link>
      <Link>Library</Link>
      <Link>Website Themes and Templates</Link>
      
      </Grid>
      <Grid >
      <Heading as='h6' size='md' gap={5}>Company</Heading>
         <Link>About Us</Link>
         <Link>Careers</Link>
         <Link>Management Team</Link>
         <Link>Board of Directors</Link>
         <Link>Investors Relations</Link>
         <Link>Blog</Link>
         <Link>Contact Us</Link>
         <Link></Link>
         <Link></Link>
         <Link></Link>
         <Link></Link>
         <Link></Link>
         <Link></Link>
         
      </Grid>
      <Grid>
        <Grid>
        <Heading as='h6' size='md'>Customers</Heading>
            <Link>Customer Support</Link>
            <Link>Joint a Local User Group</Link>
            <Link></Link>
            <Link></Link>
            <Link></Link>
            <Link></Link>
        </Grid>
        <Grid>
        <Heading as='h6' size='md'>Customers</Heading>
        <Link>All Partner Programs</Link>
        <Link>Solutions Partner Program</Link>
        <Link>App Partner Program</Link>
        <Link>HubSpot for Startups</Link>
        <Link>Affiliate Program</Link>
        <Link></Link>
        <Link></Link>
        <Link></Link>
        </Grid>
      </Grid>
    </Grid>
    
    </>
  )
}

export default FooterTop