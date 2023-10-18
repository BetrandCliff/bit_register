import { Avatar, Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr ,Text, VStack, TableCaption, SimpleGrid, Card, Divider, Heading, Flex} from '@chakra-ui/react'
import React from 'react'

const StudentTranscript = () => {
  return (

    <Box display='flex' flexDirection='column'

      h='100vh'>
        <Box> 
             <Card w='100%' h="100vh" display='flex'  flexDirection='column' alignItems='center' 
             
             overflowY='scroll'
             css={{
               '&::-webkit-scrollbar': {
                 width: '0px',
               },
             }} 
             >
                {/* SCHOOL HEADER */}
                
                <Box textAlign='center' mt='10px' >
                      <Heading fontSize=' 20px'>Buea Institute of Technology</Heading>
                      <Divider bgColor='white' mt='5px' mb='5px'/>
                      <Text>P.O. Box 1530 Molyko | Buea south West Region Cameroon</Text>
                      <Text>Tel: +237 653299033 | Email: info@bit.edu.cm | web: www.bit.edu.cm</Text>
                      <Text>Authorization No: 122/MINEFOP/SG/DFOP/SACD du/of 13-03-2017</Text>
                      <Divider bgColor='white' mt='5px' mb='5px'/>
                </Box>
               
                {/* STUDENT DETAILS */}

                <Box w='90%' mt='10px'>
                  <StudentInfo name='Name' value='Teghen Christon' textvalue='Buea Institute of Technology' />
                  <StudentInfo name='Matricule' value='WSD21NWNO14' text='DEPARTMENT:' textvalue='WEB AND SOFTWARE DEVELOPMENT'/>
                  <StudentInfo name='Date of Birth' value='08/06/2003' text='ACADEMIC YEAR:' textvalue='2021/2022'/>
                  <StudentInfo name='Major' value='WED DEVELOPMENT' text='' textvalue=''/>
                  <StudentInfo name='Minor' value='GRAPHICS DESIGNING' text='' textvalue=''/>
                </Box>


            <Box mt='2rem' mb='1rem' w='90%'>
                 <Heading textAlign='center' >STUDENT ACADEMIC  RECORD</Heading>
                <Flex mt='17px' >
                    <Box >
                    <Heading  fontSize=' 12px' mb=' 7px'>GRADE SYSTEM</Heading>
                    <GradeInfo type='A' value=' 4.00GPA : 80 - 100%'/>
                    <GradeInfo type='B+' value='3.50GPA : 70 - 79%'/>
                    <GradeInfo type='B-' value='3.00GPA : 60 - 69%'/>
                    <GradeInfo type='C+' value='3.00GPA : 50 - 59%'/>
                    <GradeInfo type='C' value='2.00GPA : 50 - 54%'/>
                    <GradeInfo type='D+' value='2.00GPA : 45 - 49%'/>
                    <GradeInfo type='D' value='1.00GPA : 40 - 44%'/>
                    
                    </Box>
                    <Box>
                    <Heading fontSize=' 12px' mb=' 7px'>GRADE SYSTEM</Heading>
                   
                    <GradeInfo type='F' value='0.00GPA : 0  - 39%'/>
                    <GradeInfo type='w' value='0.00GPA: withdraw'/>
                    <GradeInfo type='l' value='0.00GPA: Incomplete'/>
                    <GradeInfo type='X' value='0.00GPA: Absent from Exam'/>
                    <GradeInfo type='N' value='0.00GPA: No Cradit'/>
                    </Box>
                    <Box>
                    <Heading fontSize=' 12px' mb=' 7px'>COURSE STATE</Heading>
                    
                    <GradeInfo type='R' value='Required'/>
                    <GradeInfo type='C' value='Compulsory '/>
                    <GradeInfo type='E' value='Elective'/>
                    <GradeInfo type='X' value='Withdraw/Absent = 0.0GPA'/>
                    </Box>
                </Flex>
                <Text textAlign='center' fontSize='15px' mt='15px' mb='5px'>THIS TRANSCRIPT IS NOT VALID WITHOUT THE SIGNATURE OF THE DIRECTOR ALONGSIDE THE SCHOOL'S OFFICIAL STAMP</Text>

            </Box>
              <Heading fontSize='18px'>First Semester  Result </Heading>
                <Box>
                    <TableContainer>
                      <Table>
                        <Thead>
                          <Th>S/N</Th>
                          <Th>C.CODE</Th>
                          <Th>COURSE TITLE</Th>
                          <Th>STATE</Th>
                          <Th>CV</Th>
                          <Th>CA</Th>
                          <Th>EXAM</Th>
                          <Th>GRADE</Th>
                          <Th>GPA</Th>
                        </Thead>
                        <Tbody>
                          <Tr>
                          <Td>01</Td>
                          <Td>WSD201</Td>
                          <Td>HTML/CSS</Td>
                          <Td>C</Td>
                          <Td>6</Td>
                          <Td>20</Td>
                          <Td>40</Td>
                          <Td>B</Td>
                          <Td>3</Td>
                          </Tr>
                          <Tr>
                          <Td>02</Td>
                          <Td>WSD201</Td>
                          <Td>HTML/CSS</Td>
                          <Td>C</Td>
                          <Td>6</Td>
                          <Td>20</Td>
                          <Td>40</Td>
                          <Td>B</Td>
                          <Td>3</Td>
                          </Tr>
                          <Tr>
                          <Td>03</Td>
                          <Td>WSD201</Td>
                          <Td>HTML/CSS</Td>
                          <Td>C</Td>
                          <Td>6</Td>
                          <Td>20</Td>
                          <Td>40</Td>
                          <Td>B</Td>
                          <Td>3</Td>
                          </Tr>
                          <Tr>
                          <Td>04</Td>
                          <Td>WSD201</Td>
                          <Td>HTML/CSS</Td>
                          <Td>C</Td>
                          <Td>6</Td>
                          <Td>20</Td>
                          <Td>40</Td>
                          <Td>B</Td>
                          <Td>3</Td>
                          </Tr>
                        </Tbody>
                      </Table>
                      <Flex justifyContent='space-evenly'>
                        <ResultInfo type='Attempted Courses:' value='08'/>
                        <ResultInfo type='Courses Passed:' value='08'/>
                        <ResultInfo type='Credit Earned:' value='36'/>
                        <ResultInfo type='GPA:' value='2.38'/>
                      </Flex>
                    </TableContainer>
                </Box>
             
              <Heading mt="20px" mb='10px'  fontSize='18px'>Second Semester  Result </Heading>
                <Box mb='30px' >
                    <TableContainer>
                      <Table>
                        <Thead>
                          <Th>S/N</Th>
                          <Th>C.CODE</Th>
                          <Th>COURSE TITLE</Th>
                          <Th>STATE</Th>
                          <Th>CV</Th>
                          <Th>CA</Th>
                          <Th>EXAM</Th>
                          <Th>GRADE</Th>
                          <Th>GPA</Th>
                        </Thead>
                        <Tbody>
                          <Tr>
                          <Td>01</Td>
                          <Td>WSD201</Td>
                          <Td>HTML/CSS</Td>
                          <Td>C</Td>
                          <Td>6</Td>
                          <Td>20</Td>
                          <Td>40</Td>
                          <Td>B</Td>
                          <Td>3</Td>
                          </Tr>
                          <Tr>
                          <Td>02</Td>
                          <Td>WSD201</Td>
                          <Td>HTML/CSS</Td>
                          <Td>C</Td>
                          <Td>6</Td>
                          <Td>20</Td>
                          <Td>40</Td>
                          <Td>B</Td>
                          <Td>3</Td>
                          </Tr>
                          <Tr>
                          <Td>03</Td>
                          <Td>WSD201</Td>
                          <Td>HTML/CSS</Td>
                          <Td>C</Td>
                          <Td>6</Td>
                          <Td>20</Td>
                          <Td>40</Td>
                          <Td>B</Td>
                          <Td>3</Td>
                          </Tr>
                          <Tr>
                          <Td>04</Td>
                          <Td>WSD201</Td>
                          <Td>HTML/CSS</Td>
                          <Td>C</Td>
                          <Td>6</Td>
                          <Td>20</Td>
                          <Td>40</Td>
                          <Td>B</Td>
                          <Td>3</Td>
                          </Tr>
                        </Tbody>
                      </Table>

                      <Flex justifyContent='space-evenly'>
                        <ResultInfo type='Attempted Courses:' value='08'/>
                        <ResultInfo type='Courses Passed:' value='08'/>
                        <ResultInfo type='Credit Earned:' value='36'/>
                        <ResultInfo type='GPA:' value='2.38'/>
                      </Flex>

                    </TableContainer>
                    
                    
                </Box>

                <Flex w=' 90%' mb="20px">
                    <Box w='30vw'>
                        <Heading fontSize='16px'>Grade Total</Heading>
                        <ResultInfo type='Total Cradit Attempted:' value='82'/>
                        <ResultInfo type='Total Cradit Earned:' value='82'/>
                        <ResultInfo type='Cumulative GPA:' value='2.52'/>
                    </Box>
                    <Box>
                        <Heading fontSize='16px'>Remark</Heading>
                    </Box>
                </Flex>
                

             </Card>
          
        </Box>
          
        
       
    </Box>
  )
}

export default StudentTranscript

type keyvalueprops={
  name:string,
  value:string
}

export const KeyValuePairs = ({name,value}:keyvalueprops) => {
  return (
   <Box display='flex'justifyContent={{base:"flex-start",md:"flex-start"}}  mt='10px' width={{base:"100vw",md:"inherit"}}>
      <Text   pr='8px'>{name}:</Text>
      <Text pr={{base:"80px",md:"0px"}} >{value}</Text>
   </Box>
  )
}

// export default KeyValuePairs

type studentInfo ={
  name:string,
  value:string,
  text?:string,
  textvalue?:string,

}

 export const StudentInfo = ({name,value,text,textvalue}:studentInfo) => {
  return (
   <Box display='flex' justifyContent='space-between'>
    
    <Box display='flex'  width=' 40%' justifyContent='space-between' >
      <Text flex={2}>{name}:</Text>
      <Text flex={4}>{value}</Text>
    </Box>
    <Box display='flex' w='50%' alignItems='center'textAlign='end'>
      <Text flex={3}>{text}</Text>
      <Text flex={5}>{textvalue}</Text>
    </Box>
   
      
   </Box>
  )
}


type resultInfo={
    type:string,
    value:string
}

export const ResultInfo = ({type,value}:resultInfo) => {
  return (
    <Flex>
        <Text pr='5px'>{type}</Text>
        <Text >{value}</Text>
    </Flex>
  )
}

type gradeInfo={
    type:string,
    value:string
}

export const GradeInfo = ({type,value}:gradeInfo) => {
  return (
    <Flex w='23vw' justifyContent='space-evenly'>
        <Text flex={1} >{type}</Text>
        
        <Text flex={1} >=</Text>
        <Text flex={15} >{value}</Text>
    </Flex>
  )
}




