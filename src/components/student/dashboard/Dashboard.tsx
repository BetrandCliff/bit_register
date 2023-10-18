
import { Box, Card, Divider, Image, Text, useBreakpointValue } from '@chakra-ui/react'


import { Link, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import person  from '../../common/assets/images/person.jpg'

import { MdOutlineMonetizationOn, MdOutlineMoney, MdOutlineNumbers } from 'react-icons/md'
import { NavState } from '../../../services/navigation/navSlice'
import StudentSidebar from '../../common/studentSidebar'


const StudentDashboard = () => {
  // const initial = useSelector((state:{nav:NavState})=>state.nav.initial);
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box display='flex' width="100vw"  h='100vh'  overflow='hidden' >
   
       <StudentSidebar />
       
    <Box   w={{md:"80vw"}} display='flex' flexDirection='column' ml={3} mr={3} h={{base:'100%',md:'100vh'}} 
    overflow='hidden'
   >
     {/* THIS IS FOR DISPLAYING THE OUTPUT OF THE INDIVIDUAL SCREENS */}
       <Box h='100%' overflowY='hidden'>
          <Outlet/>
       </Box>   
    </Box>
    {
      !isMobile&&
      <Box width={{md:"18vw"}}>
      <Card h={{md:"100vh"}} 
          display={{md:"flex"}} 
          alignItems={{md:"center"}}
          flexDirection={{md:"column"}}>
        <Image src={person} borderRadius='50%'  w='50%' marginTop='2rem' mb='0.3rem' />
        <Text mb='10px'>TekStedia Lexi</Text>
        <Divider mt={2} mb={5}/>
        <ProfileItems title='BIT/WM/0001' name='Matricule' icon={<MdOutlineNumbers/>}/>
        <ProfileItems title='Web Master' name='Program' icon={<MdOutlineNumbers/>}/>
        <ProfileItems title='Owing' name='Fee Status' icon={<MdOutlineMonetizationOn/>}/>
          
      </Card>
    </Box>
    }
   </Box>

  )
}

export default StudentDashboard


type profileProps={
  title:string,
  name:string,
  icon:React.ReactNode

}

export const ProfileItems = ({title,name,icon}:profileProps) => {
  return (
    <Box display='flex'  w='10vw' justifyContent='space-between' mb=' 10px' alignItems='center'>
      
       <Box flex={1}>{icon}</Box>
     
       <Box flex={3} display='flex' flexDirection='column'>
         <Text>{title}</Text>
         <Text color='gray'>{name}</Text>
       </Box>
    </Box>
  )
}



