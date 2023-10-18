import { Avatar, Box, Card, Flex,Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { MdLogout } from 'react-icons/md'
import { Link } from 'react-router-dom'
import MobileAppBar from '../../common/mobileAppBar'

const Profile = () => {

  return (
   <Box w='100%' h='100vh'>
      <MobileAppBar text="Profile" />
      <Card w="94vw" h='90vh' display='flex' justifyContent='center' alignItems='center'>
            <Avatar w='45%' h='22%'src=''/>

           <Box h='60%' w='80%'>
            <Flex mt='15px' justifyContent='space-between' w=' 80%'>
                <Text flex={1}>Name:</Text>
                <Text flex={1}>John Doe</Text>
              </Flex>
            <Flex mt='15px' justifyContent='space-between' w=' 80%'>
                <Text flex={1}>Matricule:</Text>
                <Text flex={1}>BIT/0001</Text>
              </Flex>
            <Flex mt='15px' justifyContent='space-between' w=' 80%'>
                <Text flex={1}>Department:</Text>
                <Text flex={1}>Web Master</Text>
              </Flex>
            <Flex mt='15px' justifyContent='space-between' w=' 80%'>
                <Text flex={1}>Program:</Text>
                <Text flex={1}>ND</Text>
              </Flex>
            <Flex mt='15px' justifyContent='space-between' w=' 80%'>
                <Text flex={1}>Gender:</Text>
                <Text flex={1}>Male</Text>
              </Flex>
            <Flex mt='15px' justifyContent='space-between' w=' 80%'>
                <Text flex={1}>Fee:</Text>
                <Text flex={1}>Completed</Text>
              </Flex>
            <Flex mt='15px' justifyContent='space-between' w=' 80%'>
              <Box flex={1}><Link to='/'><MdLogout/></Link></Box>
                <Text flex={1}>Logout</Text>
              </Flex>
           </Box>
      </Card>
   </Box>
  )
}

export default Profile
