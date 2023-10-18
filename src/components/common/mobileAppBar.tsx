
import { Box, Card,Text } from '@chakra-ui/react'
import React from 'react'

type mobileAppBarProps={
  text:string
}
const MobileAppBar = ({text}:mobileAppBarProps) => {
  return (
   <Box display={{base:"block",xl:"none"}} h=' 12vh'mb='2px'>
        <Card h='10vh' w='95vw'display='flex' justifyContent='center' alignItems='center'>
            <Text fontSize='24px'>{text}</Text>
        </Card>
   </Box>
  )
}

export default MobileAppBar
