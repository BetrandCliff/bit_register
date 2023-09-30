
import { Box,Text ,Button, Card, FormControl, Image, FormLabel, Input, VStack, Heading, Flex, Select, Alert, AlertIcon, AlertDescription, AlertTitle} from '@chakra-ui/react'

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import backArrow from '../assets/images/back_arrow.svg'
import { useAppDispatch, useAppSelector } from '../../../services/common/hooks'
import { admissionAction, postAdmissionAction } from '../../../services/registration/admissionSlice'

const Register = () => {
const dispatch = useAppDispatch()
const [firstName,setFirstName ]= useState('')
const [lastName,setLastName ]= useState('')
const [email,setEmail ]= useState('')
const [gender,setGender ]= useState('')
const [nationality,setNationality ]= useState('')
const [isNext,setIsNext ]= useState(false)
const [address,setAddress]= useState('')

const handleNext =()=>{
                if(firstName!==""&&lastName!==""&&email!==""&&gender!==""&& nationality!==""){
                       if(email.includes('@')&& email.includes('.')){
                      
                               setIsNext(true)
                       }

                }
}


const handleSubmit =()=>{
        dispatch(admissionAction.applicantPersonal({firstName,lastName,email,gender,nationality}))
}

  return (
   <Box  display='flex' justifyContent='center' alignItems='center' h='100vh' w='100vw'   >
        
      <Card 
          h={{base:'95vh',xl:'100vh','2xl':"90vh"}}
          w={{base:'95vw',xl:"40vw",'2xl':"60vw"}}
             shadow='2xl'
             justifyContent='center'
             alignItems='center'
             display='flex'
             >
               {/* <form onSubmit={formik.handleSubmit}>  */}
            <VStack 
            w='80%'
               >
                        
                        <Heading fontSize='16px'>APPLICATION FORM</Heading>
                        
                        <FormControl  mt='6px'>
                                <FormLabel mb='3px' htmlFor='name'>First Name</FormLabel>
                                <Input 
                                name='name' 
                                 w='100%' 
                                onChange={(e)=>setFirstName(e.target.value)} 
                                autoComplete="true"
                                placeholder="please enter your first name"
                            
                                onBlur={handleNext}
                                />
                                {/* <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage> */}
                        </FormControl>

                        <FormControl  mt='6px'>
                                <FormLabel mb='3px' htmlFor='name'>Last Name</FormLabel>
                                <Input name='name'
                                 w='100%'  
                                onChange={(e)=>setLastName(e.target.value)} placeholder="please enter your name"
                                onBlur={handleNext}
                                />
                                {/* <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage> */}
                        </FormControl>

                        <FormControl  mt='6px'>
                                <FormLabel mb='3px' htmlFor='name'>Email</FormLabel>
                                <Input name='name'
                                 w='100%'  
                                onChange={(e)=>{setEmail(e.target.value);handleNext()}}
                                 placeholder="please enter yourlast name"
                                onBlur={handleNext}
                                />
                        </FormControl>
                     

                        <FormControl  mt='6px'>
                                 <FormLabel mb='3px' htmlFor='name'>Nationality</FormLabel>
                                 <Input name='name'
                                  w='100%'  
                                 onChange={(e)=>{setNationality(e.target.value);handleNext()}}
                                  placeholder="please enter yourlast name"
                                 onBlur={handleNext}
                                 />
                         </FormControl>
                         <FormControl  >
         <FormLabel  htmlFor='email'>Address</FormLabel>
         <Input name='email' w='100%'
         onChange={(e)=>{setAddress(e.target.value);handleNext()}} 
         placeholder="please enter your address"/>
         {/* <FormErrorMessage>{formik.errors.address}</FormErrorMessage> */}
 </FormControl>
                                             
                         <FormControl   mt='6px'>
                                <FormLabel mb='3px' htmlFor='name'>Gender</FormLabel>
                                <Select onChange={(e)=>{setGender(e.target.value);handleNext()}}
                                
                                >
                                   <option>None</option>
                                   <option>Male</option>
                                   <option>Female</option>
                                </Select>
                                {/* <FormErrorMessage>{formik.errors.gender}</FormErrorMessage> */}
                        </FormControl>

                     
                     {
                        
                     isNext&&
                        <Box mt='5px' >
                        <Link to="/registerForm2" className='link'> <Button type='submit' variant="outline" h='2.4rem' w='6rem' mt={15} onClick={handleSubmit}>NEXT</Button> </Link>
                        </Box>
                      }
                        {/* <Flex> */}
                                {/* <Text>Already have an account </Text> <Text color='blue' pl='5px'><Link to="/" className='link'>Sign in</Link></Text> */}
                        {/* </Flex> */}

                {
                        (!isNext&&gender!=="")&&<Text color='red' textAlign='center'>Incorrect Inputs</Text>
                }

                </VStack>

                {/* </form> */}
        </Card>
   </Box>
  )
}

export default Register





export const RegisterForm2 = () => {


const [isNext,setIsNext ]= useState(false)

const dispatch =useAppDispatch()

const [telephone,setTelephone]= useState<number>(0)
const [highestQualification,setHighestQualification]= useState('')
const [program,setProgram]= useState('')
const [document,setDocs]= useState<File>()
const [passport,setPassport]= useState<File>()

const handleNext =()=>{
        if(telephone!==0&& highestQualification !=="" && program !==""){
                        setIsNext(true)
        }       
}

const handleSubmit =()=>{
        dispatch(admissionAction.applicantEducation({telephone,highestQualification,program,document,passport}))
}

const handleFile =(e:React.ChangeEvent<HTMLInputElement>, name="")=>{
        if(e.target.files){
                name==="document"?
                setDocs(e.target.files[0]):setPassport(e.target.files[0])
        }
}
       return (
        <Box  display='flex' justifyContent='center' alignItems='center' h='100vh' w='100vw'   >
             
            
             <Card 
              h={{base:'95vh',xl:'100vh','2xl':"90vh"}}
              w={{base:'95vw',xl:"40vw",'2xl':"60vw"}}
                
             
                  shadow='2xl'
                  justifyContent='center'
                  alignItems='center'
                  display='flex'
                  >
                   <Link to="/"><Box position='absolute' top={4} left={4}><Image src={backArrow} w='30px'/></Box></Link>  
                 
                 <VStack 
                  w='80%'
                    >
                             
                             <Heading fontSize='22px'>APPLICATION FORM</Heading>                                                                                                      
                             <FormControl mt='6px' >
                                     <FormLabel  htmlFor='password'>Telphone</FormLabel>
                                     <Input name='password' w='100%' 
                                      onChange={(e)=>{setTelephone(parseInt(e.target.value));handleNext()}} placeholder="please enter your telephone"/>
                             </FormControl>

                             <FormControl  mt='8px'>
                                     <FormLabel  htmlFor='name'>Highest qualification</FormLabel>
                                         <Select onChange={(e)=>{setHighestQualification(e.target.value);handleNext()}}>
                                                <option value=''>None</option>
                                                <option value ='First School'>Frist school</option>
                                                <option value ='GCE Ordinary level'>GCE Ordinary Level</option>
                                                <option value ='Advance Level'>Advance Level</option>
                                                <option value='Baccalereat'>Baccalereat</option>
                                                <option value='National Diploma'>National Diploma</option>
                                                <option value='Higher National Diploma'>Higher National Diploma</option>
                                                <option value='Bachelors Degree'>Bachelors Degree</option>
                                                <option value='Masters Degree'>Masters Degree</option>
                                                <option value='PHD'>PHD</option>
                                                <option value='Other'>Other</option>
                                         </Select>



                             </FormControl>
                            
                            
                             <FormControl   mt='6px'>
                                     <FormLabel  htmlFor='name'>Program</FormLabel>
                                     <Select onChange={(e)=>{setProgram(e.target.value);handleNext()}}>
                                     <option value=''>None</option>
                                        <option value ='HND Software Engineering'>HND Software Engineering</option>
                                        <option value ='HND E-Commence and Digital Marketing'>HND E-Commence and Digital Marketing</option>
                                        <option value ='HND Computer Graphic and Web Design'> HND Computer Graphic and Web Design</option>
                                        <option value ='HND Media Photography and Audiovisual'> HND Media Photography and Audiovisual</option>
                                        <option value='HND Journalism'>HND Journalism</option>
                                        <option value='HND Graphic Design'>HND Graphic Design</option>
                                        <option value='HND Cinematography'>HND Cinematography</option>
                                        <option value='ND Applications Development'>ND Applications Development</option>
                                        <option value='ND Webmaster'>ND Webmaster</option>
                                        <option value='ND Graphic Design'>ND Graphic Design</option>
                                        <option value='ND Office Automation Secretaryship'>ND Office Automation Secretaryship</option>
                                        <option value='Certificate Basic Computing'>Certificate Basic Computing</option>
                                        <option value='Certificate Web Design'>Certificate Web Design</option>
                                        <option value='Certificate Graphic Design'>Certificate Graphic Design</option>
                                        <option value='Certificate Digital Marketing'>Certificate Digital Marketing</option>
                                        <option value='Certificate Video Production'>Certificate Video Production</option>
                                     </Select>
                             </FormControl>
                            
                            
                            
                            
                                     
                        <FormControl  mt='6px'>
                                <FormLabel  htmlFor='email'>Qualification Document</FormLabel>
                                   <Input border="none"  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{handleFile(e,'document');handleNext()}} type="file"/> 
                                <Text fontSize='13px' fontStyle='italic' >upload all documents as one pdf file</Text>
                        </FormControl>


                        <FormControl  mt='6px'>

                        <FormLabel  htmlFor='email'>Passport Photo</FormLabel>
                         
                           
                           <Input border="none"  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{handleFile(e,'passport');handleNext()}} type="file"/> 
                       
                        {/* <Text fontSize='13px' fontStyle='italic' >upload all documents as one pdf file</Text> */}
                        </FormControl>
     
                            
                        
                            { 
                                isNext&&
                             <Box mt='0px'>
                             <Link to="/registerForm3" className='link'><Button type='submit' variant="outline" h='2.4rem' w='6rem' mt={15} onClick={handleSubmit}>NEXT</Button> </Link>
                             </Box>

                             }
                             {/* <Flex> */}
                                     {/* <Text>Already have an account </Text> <Text color='blue' pl='5px'><Link to="/" className='link'>Sign in</Link></Text> */}
                             {/* </Flex> */}

                             {
                           (!isNext&& program!=="")&&<Text color='red' textAlign='center'>Incorrect Inputs</Text>
                                  }
                     </VStack>
             </Card>
        </Box>
       )
     }
     

       
export const RegisterForm3 = () => {
        const [birthCeritificate,setBirthCeritificate] = useState("");
             
      
      const dispatch = useAppDispatch()
      const applicant = useAppSelector(state=>state.admissionApplicant)

      const navigate = useNavigate()

        const [guardianFirstName,setGuardianFirstName]= useState('')
        const [guardianLastName,setGuardianLastName]= useState('')
        const [guardianCity,setGuardianCity]= useState('')
        const [guardianTel,setGuardianTel]= useState<number>(0)
        const [relationship,setRelationship]= useState('')
        const [issubmitted,setIsSubmitted] = useState(false)
        const [isNext,setIsNext ]= useState(false)


        const handleSubmit =()=>{
                if(guardianCity !==""&& guardianFirstName !==""&& guardianLastName !==""&&guardianTel !==0){
                        setIsNext(true)
                }
                                }


const  handleSubmitData=()=>{
        setIsSubmitted(true)
                        dispatch(admissionAction.applicantGuardian({guardianFirstName,guardianLastName,guardianCity,guardianTel,relationshipWithGuardian:relationship}))
                        dispatch(postAdmissionAction({
                                                      
    firstName:                applicant.applicantPersonalData.firstName,
    lastName:                 applicant.applicantPersonalData.lastName,
    email:                    applicant.applicantPersonalData.email,
    gender:                   applicant.applicantPersonalData.gender,
    nationality:              applicant.applicantPersonalData. nationality,
    town:                     applicant.applicantPersonalData.address,
    program:                  applicant.applicantEducation.program,
    telephone:                applicant.applicantEducation.telephone,
    highestQualification:     applicant.applicantEducation.highestQualification,
    document:                 applicant.applicantEducation.document,        
    passport:                 applicant.applicantEducation.passport,        
    guardianFirstName:        applicant.applicantGuardian.guardianFirstName,
    guardianLastName:         applicant.applicantGuardian.guardianLastName,
    guardianTel:              applicant.applicantGuardian.guardianTel,
    guardianCity:             applicant.applicantGuardian.guardianCity,
    relationshipWithGuardian: applicant.applicantGuardian.relationshipWithGuardian,
    created_at                : ""

               
                        })).then(v=>navigate('/notification'))
                           
                
        }



       return (
        <Box  display='flex' justifyContent='center' alignItems='center' h='100vh' w='100vw'   >
             
           {!issubmitted &&
             <Card 
             
             h={{base:'95vh',xl:'100vh','2xl':"90vh"}}
             w={{base:'95vw',xl:"40vw",'2xl':"60vw"}}
                
                  shadow='2xl'
                  justifyContent='center'
                  alignItems='center'
                  display='flex'
                  >
                   <Link to="/registerForm2"><Box position='absolute' top={4} left={4}><Image src={backArrow} w='30px'/></Box></Link>  
                 <VStack 
                  w='80%'
                    >
                             
                             <Heading fontSize='18px'>APPLICATION FORM</Heading>
                             <FormControl  mt='10px'>
                                     <FormLabel mb='9px' htmlFor='name'>Guardian FirstName</FormLabel>
                                     <Input name='name'w='100%'  
                                     onChange={(e)=>{setGuardianFirstName(e.target.value);handleSubmit()}} 
                                     placeholder="please enter your guardian fristname"/>
                                     {/* <FormErrorMessage>{formik.errors.guardianFirstName}</FormErrorMessage> */}
                             </FormControl>

                             <FormControl  mt='6px'>
                                   <FormLabel mb='9px' htmlFor='name'>Guardian LastName</FormLabel>
                                   <Input name='name' w='100%' 
                                   onChange={(e)=>{setGuardianLastName(e.target.value);handleSubmit()}} 
                                   placeholder="please enter your guradian lastname"/>
                                   {/* <FormErrorMessage>{formik.errors.guardianLastName}</FormErrorMessage> */}
                           </FormControl>
                             <FormControl   mt='6px'>
                                     <FormLabel mb='9px' htmlFor='name'>Guardian Tel</FormLabel>
                                     <Input name='name' w='100%' 
                                      onChange={(e)=>{setGuardianTel(parseInt(e.target.value));handleSubmit()}} placeholder="please enter your guardian tel"/>
                                     {/* <FormErrorMessage>{formik.errors.guardianTel}</FormErrorMessage> */}
                             </FormControl>

                             <FormControl   mt='6px'>
                                     <FormLabel mb='9px' htmlFor='name'>Guardian City</FormLabel>
                                     <Input name='name' w='100%' 
                                      onChange={(e)=>{setGuardianCity(e.target.value);handleSubmit()}} placeholder="please enter your guardian city"/>
                                     {/* <FormErrorMessage>{formik.errors.guardianCity}</FormErrorMessage> */}
                             </FormControl>
     
     
     
     
                             <FormControl   mt='6px'>
                                     <FormLabel mb='9px' htmlFor='name'>Relationship With Guardian</FormLabel>

                                     <Select onChange={(e)=>{setRelationship(e.target.value)}}>
    
                                                <option value ='Father'>Father</option>
                                                <option value ='Mother'>Mother</option>
                                                <option value ='Brother'> Brother</option>
                                                <option value ='Sister'> Sister</option>
                                                <option value='Uncle'>Uncle</option>
                                                <option value='Aunt'>Aunt</option>
                                                <option value='Husband'>Husband</option>
                                                <option value='Wife'>Wife</option>
                                                <option value='Other'>Other</option>
      
                                     </Select>
                                    
                                    
                                    
                             </FormControl>
        
                                {

                                isNext&&
                             <Box mt='10px'>
                             <Link to="/student" className='link'><Button type='submit' variant="outline" h='2.4rem' w='6rem' mt={15} onClick={()=>{handleSubmitData();setIsSubmitted(!issubmitted)}}>Submit</Button></Link>
                             </Box>}
                             {/* <Flex> */}
                                     {/* <Text>Already have an account </Text> <Text color='blue' pl='5px'><Link to="/" className='link'>Sign in</Link></Text> */}
                             {/* </Flex> */}
     

                             {
                        (!isNext&& relationship!=="")&&<Text color='red' textAlign='center'>Incorrect Inputs</Text>
                            }
                     </VStack>
             </Card>} 

    

           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
        </Box>
       )
     }
     