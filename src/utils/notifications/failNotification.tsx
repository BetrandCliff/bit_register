import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Card,Text } from '@chakra-ui/react'






















import React from 'react'

const ErrorNotification = () => {
  return (
    <Box w='100vw' h='100vh' display='flex' justifyContent='center' alignItems='center'>
  <Alert
             status='error'
             variant='subtle'
             flexDirection='column'
             alignItems='center'
             justifyContent='center'
             textAlign='center'
             height='200px'
            
           >
             <AlertIcon boxSize='40px' mr={0} />
             <AlertTitle mt={4} mb={1} fontSize='lg'>
               Application Wasn't Successful!
             </AlertTitle>
             <AlertDescription maxWidth='sm'>
              Something went wrong please try again.
             </AlertDescription>
           </Alert>

           </Box>
    
  )
}

export default ErrorNotification




