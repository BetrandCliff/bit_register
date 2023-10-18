import {Box,Card,Divider,Flex,Image,Text} from '@chakra-ui/react';
import logo  from '../../components/common/assets/images/bitlogo.png'
import {MdLogout,MdWorkOutline,MdOutlineVolunteerActivism} from 'react-icons/md'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { NavState, actions } from '../../services/navigation/navSlice';

// import data from './data.json'  



const StudentSidebar = () => {
    
  return (
   <Box h={{md:'100vh'}} w={{md:"15vw"}} >
    {/* Mobile NavBar */}

    <Box pos="fixed" bottom="22px" top="84vh"  zIndex={2} display={{md:"none", base:"flex"}}   m='10px' >
      <Box w='87vw' h='6vh'  bgColor="GrayText"  borderRadius='23px' position={{base:"fixed",md:"relative"}}>
        
        <Box display='flex' h='inherit' justifyContent='center' alignItems="center" >
          <Box w='35px'/>
        {/* <MenuItems path='dashboard'   text='Dashboard' image={<MdOutlineDashboard/>}/>
        <MenuItems path='students' text='Student' image={<MdOutlinePostAdd/>}/> */}
        <MenuItems path='dashboard' text='Result' image={<MdWorkOutline/>}/>
        <MenuItems path='dashboard/profile' text='Marks' image={<MdOutlineVolunteerActivism/>}/>
        
        </Box>
      </Box>
    </Box>

    {/* Desktop NavBar */}
    <Card   display={{md:"flex", base:"none",}} h='100%' justifyContent='start' alignItems='center'flexDirection='column'
    // pos={{md:"",base:"absolute",bottom:12}}
    >   
    <Image src={logo} borderRadius='50%'  w='50%' marginTop='2rem' mb='0.3rem' />
    <Text mb='10px'>Buea Institute of Technology</Text>
    <Divider mt={2} mb={5}/>
    
    {/* <MenuItems path='admin/students' text='Student' image={<MdOutlinePostAdd/>}/> */}
    <MenuItems path='dashboard' text='Result' image={<MdWorkOutline/>}/>
    {/* <MenuItems path='student/transcript' text='Transcritp' image={<MdOutlineVolunteerActivism/>}/> */}
    <Divider mt='70%'/>
    <MenuItems path=''  text='Log out' image={<MdLogout/>}/>
    </Card>
   </Box>
  )
}

export default StudentSidebar

type MenuProps={
    text:string,
    image:React.ReactNode,
    path:string
}

export const MenuItems = ({text,image,path}:MenuProps) => {
  // const navlink = useSelector((state:{nav:NavState})=>state.nav.activeLink)
  const dispatch = useDispatch()

  

   const linkStyles={
    // display:"flex",  
    width:"80%", 
    
   }
  return (

     <Link to={"/"+path} onClick={()=>dispatch(actions.changeLinkState(text))} style={ linkStyles}>
        <Box w='80%' display="flex" alignItems="center" flexDirection={{base:"column-reverse",md:"initial"}}>
            
          <Box w={{base:"4rem",md:'2px'}} h={{base:"2px",md:"14px"}} ></Box>
          <Box  display='flex' flexDirection={{base:"column",md:"initial"}} justifyContent='space-between' alignItems='center' w="100%" p='10px'>
            <Box flex={1}>{image}</Box>
            <Box flex={3} fontSize={{base:11,md:16}}>{text}</Box>
            
          </Box>
        </Box>
       
    </Link>
    
    
   
  )
  }


 
