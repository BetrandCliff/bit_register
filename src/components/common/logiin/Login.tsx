
import { Box, Button, Card, Flex, FormControl, FormLabel, Heading, Image,Input,Text,useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import  image_source from'../assets/images/land.webp'
import { Link } from 'react-router-dom'

const Login = () => {

    const isMobile = useBreakpointValue({ base: true, md: false });


    const handleLogin=()=>{

    }


  return (
   
   <Box w='100vw' h='100vh' display='flex' justifyContent='center' alignItems='center'>
        <Box h='90vh' w={{base:"98vw",xl:'60vw'}}>
            <Card h='100%' w="100%">

            <Flex h='100%' w='100%'>
                <Box flex={1} display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
                     
                     
                        <Heading>Login</Heading>
                     
                     

                        <FormControl w='80%'>
                            <FormLabel color='#b6b6b4'> Email</FormLabel>
                            <Input />

                        </FormControl>

                        <FormControl w='80%' mt='10px' mb='20px'>
                             <FormLabel color='#b6b6b4'> Password</FormLabel>
                             <Input />
                         </FormControl>

                         <Button w='80%' onClick={handleLogin}><Link to='/'>  Login</Link></Button>

                         <Text mt='20px' display='flex' color='#b6b6b4'>If you don't have an account <Link to='/register'><Text color='blue' ml='8px'>Apply</Text></Link></Text>
                </Box>

                    {
                            !isMobile &&
                            <Box flex={1} h='100%' display='flex' justifyContent='center'>
                            <Image src={image_source}/>
                        </Box>
                    }

            </Flex>

            </Card>
        </Box>
   </Box>
   
  )
}

export default Login
