import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Card,Text } from '@chakra-ui/react'






















import React from 'react'

const Notification = () => {
  return (
    <Box w='100vw' h='100vh' display='flex' justifyContent='center' alignItems='center'>
  <Alert
             status='success'
             variant='subtle'
             flexDirection='column'
             alignItems='center'
             justifyContent='center'
             textAlign='center'
             height='200px'
            
           >
             <AlertIcon boxSize='40px' mr={0} />
             <AlertTitle mt={4} mb={1} fontSize='lg'>
               Application submitted!
             </AlertTitle>
             <AlertDescription maxWidth='sm'>
               Thanks for submitting your application. Our team will get back to you soon.
             </AlertDescription>
           </Alert>

           </Box>
    
  )
}

export default Notification




