
import { Box,Text ,Button, Card, FormControl, Image, FormLabel, Input, VStack, Heading, Flex, Select, Alert, AlertIcon, AlertDescription, AlertTitle, FormErrorMessage} from '@chakra-ui/react'

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import backArrow from '../assets/images/back_arrow.svg'
import { useAppDispatch, useAppSelector } from '../../../services/common/hooks'
import { admissionAction, postAdmissionAction } from '../../../services/registration/admissionSlice'
import { useFormik } from 'formik'
import { useForm,Controller } from 'react-hook-form'
import { EducationalData, GuardianData, PersonalData } from './model/form_interface'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

const Register = () => {
const dispatch = useAppDispatch()
const [fullNames,setFullName ]= useState('')
// const [lastName,setLastName ]= useState('')
const [email,setEmail]= useState('')
const [gender,setGender]= useState('')
const [nationality,setNationality ]= useState('')
const [isNext,setIsNext ]= useState(false
        )
const [address,setAddress]= useState('')

const  navigator = useNavigate()


const schema = yup.object().shape({
        firstName: yup.string().required('FirstName is required'),
        middleName: yup.string().required('MiddleName is required'),
        lastName: yup.string().required('LastName is required'),
        email: yup.string().required('Email is required').email("Invalid Email"),
        nationality: yup.string().required('Nationality is required'),
        address: yup.string().required('Address is required'),
      });
const {
        control,
        handleSubmit,
        formState: { errors }

}= useForm<PersonalData>({
        resolver: yupResolver(schema),
})


const onSubmit = (data: PersonalData) => {
        console.log("PERSONAL VALIDATION")
        dispatch(admissionAction.applicantPersonal
                ({firstName:data.firstName,middleName:data.middleName,lastName:data.lastName,email:data.email,nationality:data.nationality,address:data.address}))
                navigator('/registerForm2')
       
      };               
  return (
   <Box  display='flex' justifyContent='center' alignItems='center' h='100vh' w='100vw'   >
        
      <Card 
          h={{base:'95vh',xl:'auto','2xl':"90vh"}}
          w={{base:'95vw',xl:"40vw",'2xl':"60vw"}}
             shadow='2xl'
             justifyContent='center'
             alignItems='center'
             display='flex'
             p={{base:0,xl:'20px'}}
             >
               {/* <form onSubmit={formik.handleSubmit}>  */}
        {/* <form */}
        
            <VStack 
            as='form'
            w='80%'
        //     onSubmit={handleSubmit(onSubmit)}
               >
                        
                        <Heading fontSize='16px'>APPLICATION FORM</Heading>
                        
                        <Controller
                                name='firstName'
                                control={control}
                                render={({field})=>( 
                                        <FormControl  mt='4px' isInvalid={!!errors.firstName}>
                                        <FormLabel mb='1px' htmlFor='firstName' color='#b6b6b4'>First Names</FormLabel>
                                        <Input 
                                        id='firstName'
                                        type='text'
                                         w='100%' 

                                         {...field}
                                        autoComplete="true"
                                        placeholder="please enter your first name"
                                        
                                        
                                        />
                                        <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
                                        </FormControl>
                                 )}
                        
                        />
                          
  <Controller
          name='middleName'
          control={control}
          render={({field})=>( 
                  <FormControl  mt='4px' isInvalid={!!errors.middleName}>
                  <FormLabel mb='1px' htmlFor='fullName' color='#b6b6b4'>Middle Names</FormLabel>
                  <Input 
                  id='middleName'
                  type='text'
                   w='100%' 
                   {...field}
                  autoComplete="true"
                  placeholder="please enter your first name"
                  
                  
                  />
                  <FormErrorMessage>{errors.middleName?.message}</FormErrorMessage>
                  </FormControl>
           )}
  
  />
    
    <Controller
          name='lastName'
          control={control}
          render={({field})=>( 
                  <FormControl  mt='4px' isInvalid={!!errors.lastName}>
                  <FormLabel mb='1px' htmlFor='fullName' color='#b6b6b4'>Last Names</FormLabel>
                  <Input 
                  id='lastName'
                  type='text'
                   w='100%' 
                   {...field}
                  autoComplete="true"
                  placeholder="please enter your first name"
                  
                  
                  />
                  <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
                  </FormControl>
           )}
  
  />
                        
                        
                        
                        <Controller
         name='email'
         control={control}
         render={({field})=>( 
                 <FormControl  mt='4px' isInvalid={!!errors.email}>
                 <FormLabel mb='1px' htmlFor='email' color='#b6b6b4'>Email</FormLabel>
                 <Input 
                 id='email'
                 type='text'
                  w='100%' 
                  {...field}
                 autoComplete="true"
                 placeholder="please enter your first name"
                 
                 
                 />
                 <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                 </FormControl>
          )}
 
 />
                        
                        
                        <Controller
         name='nationality'
         control={control}
         render={({field})=>( 
                 <FormControl  mt='4px' isInvalid={!!errors.nationality}>
                 <FormLabel mb='1px' htmlFor='nationality' color='#b6b6b4'>Nationality</FormLabel>
                 <Input 
                 id='nationality'
                 type='text'
                  w='100%' 
                  {...field}
                 autoComplete="true"
                 placeholder="please enter your first name"
                 
                 
                 />
                 <FormErrorMessage>{errors.nationality?.message}</FormErrorMessage>
                 </FormControl>
          )}
 
 />
                        
                        
                        
                        
                        
                        
                        
                        <Controller
         name='address'
         control={control}
         render={({field})=>( 
                 <FormControl  mt='4px' isInvalid={!!errors.address}>
                 <FormLabel mb='1px' htmlFor='address' color='#b6b6b4'>Address</FormLabel>
                 <Input 
                 id='address'
                 type='text'
                  w='100%' 
                  {...field}
              
              
              
                 autoComplete="true"
                 placeholder="please enter your first name"
                 
                 
                 />
                 <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
                 </FormControl>
          )}
 
                        /> 
                                                                                                                                                                                                                                                                                                   






























                     
        
                
                        <Box mt='3px' >
                        <Link to="/register" className='link'> <Button type='submit' variant="outline" h='2.4rem' w='6rem'  onClick={handleSubmit(onSubmit)}>NEXT</Button> </Link>
                        </Box>
                 
                     
                     
                     

 
 
                

                </VStack>

                <Text mt='8px' display='flex' color='#b6b6b4'>If you already have an account <Link to='/'><Text color='blue' ml='8px'>login</Text></Link></Text>

        </Card>
   </Box>
  )
}

export default Register





export const RegisterForm2 = () => {




const dispatch =useAppDispatch()

const [document,setDocs]= useState<File>()
const [passport,setPassport]= useState<File>()


const  navigator = useNavigate()


const schema = yup.object().shape({
        gender: yup.string().required('Gender is required'),
        telephone: yup.number().required('Telelpho is required'),
        highestQualification: yup.string().required('highestQualification is required'),
        program: yup.string().required('Program is required'),
      });
const {
        control,
        handleSubmit,
        formState: { errors }

}= useForm<EducationalData>({
        resolver: yupResolver(schema),
})


const onSubmit = (data: EducationalData) => {
        console.log("PERSONAL VALIDATION")
         dispatch(admissionAction.applicantEducation(
                {gender:data.gender,telephone:data.telephone,highestQualification:data.highestQualification,
                        program:data.program,document,passport}))
        
                navigator('/registerForm3')
       
      };               

const handleFile =(e:React.ChangeEvent<HTMLInputElement>, name="")=>{
        if(e.target.files){
                name==="document"?
                setDocs(e.target.files[0]):setPassport(e.target.files[0])
        }
}
       return (
        <Box  display='flex' justifyContent='center' alignItems='center' h='100vh' w='100vw'   >
             
            
             <Card 
              h={{base:'95vh',xl:'auto','2xl':"90vh"}}
              w={{base:'95vw',xl:"40vw",'2xl':"60vw"}}
                
             
                  shadow='2xl'
                  justifyContent='center'
                  alignItems='center'
                  display='flex'
                  p={{base:0,xl:'20px'}}
                  >
                   <Link to="/"><Box position='absolute' top={4} left={4}><Image src={backArrow} w='30px'/></Box></Link>  
                 
                 <VStack 
                  w='80%'
                    >
                             
                             <Heading fontSize='16px'>APPLICATION FORM</Heading>  


        
<Controller
         name='gender'
         control={control}
         render={({field})=>( 
                 <FormControl  mt='4px' isInvalid={!!errors.gender}>
                 <FormLabel mb='1px' htmlFor='gender' color='#b6b6b4'>Gender</FormLabel>
                 
                 <Select 
                 id='gender'
                {...field}
                >  
                   <option value=''>None</option>
                   <option value='Male'>Male</option>
                   <option value='Female'>Female</option>

                </Select>
                 
                 <FormErrorMessage>{errors.gender?.message}</FormErrorMessage>
                 </FormControl>
          )}
 
 />

                                
<Controller
         name='telephone'
         control={control}
         render={({field})=>( 
                 <FormControl  mt='6px' isInvalid={!!errors.telephone}>
                 <FormLabel mb='3px' htmlFor='telephone' color='#b6b6b4'>Telephone</FormLabel>
                 
                
                
                
                
                
                
                 <Input id='telephone' w='100%'  placeholder="please enter your telephone" {...field}/>


                
                 
                 <FormErrorMessage>{errors.telephone?.message}</FormErrorMessage>
                 </FormControl>
          )}
 
 />









                                
<Controller
         name='highestQualification'
         control={control}
         render={({field})=>( 
                 <FormControl  mt='6px' isInvalid={!!errors.highestQualification}>
                 <FormLabel mb='3px' htmlFor='program' color='#b6b6b4'>Highest qualification</FormLabel>
                 
                 <Select 
                 id='highestQualification'
                {...field}
                >  
                     <option value=''>None</option>
                     <option value ='First School'>Frist school</option>
                     <option value ='GCE Ordinary level'>GCE Ordinary Level</option>
                     <option value ='Advance Level'>GCE Advance Level</option>
                     <option value='Baccalereat'>Baccalereat</option>
                     <option value='National Diploma'>National Diploma</option>
                     <option value='Higher National Diploma'>Higher National Diploma</option>
                     <option value='Bachelors Degree'>Bachelors Degree</option>
                     <option value='Masters Degree'> Masters Degree</option>
                     <option value='PHD'>PHD</option>
                     <option value='Other'>Other</option>
                   
                   

                </Select>
                 
                 <FormErrorMessage>{errors.highestQualification?.message}</FormErrorMessage>
                 </FormControl>
          )}
 
 />
                            


                            
                                
<Controller
         name='program'
         control={control}
         render={({field})=>( 
                 <FormControl  mt='6px' isInvalid={!!errors.program}>
                 <FormLabel mb='3px' htmlFor='program' color='#b6b6b4'>Program</FormLabel>
                 
                 <Select 
                 id='program'
                {...field}
                >  
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
                 
                 <FormErrorMessage>{errors.program?.message}</FormErrorMessage>
                 </FormControl>
          )}
 
 />
                            
                            
                            
                            
                                     
                        <FormControl  mt='6px'>
                                <FormLabel  htmlFor='email'>Qualification Document</FormLabel>
                                   <Input border="none"  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{handleFile(e,'document')}} type="file"/> 
                                <Text fontSize='13px' fontStyle='italic' >upload all documents as one pdf file</Text>
                        </FormControl>


                        <FormControl  mt='6px'>

                        <FormLabel  htmlFor='email'>Passport Photo</FormLabel>
                         
                           
                           <Input border="none"  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{handleFile(e,'passport')}} type="file"/> 
                       
                        {/* <Text fontSize='13px' fontStyle='italic' >upload all documents as one pdf file</Text> */}
                        </FormControl>
     
                            
                        
                            
                             
                           
        <Button type='submit' variant="outline" h='2.4rem' w='6rem' mt={15} onClick={handleSubmit(onSubmit)}>NEXT</Button> 
                             

                             
                           
                           
                           

                           
                           
                           
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
        
const  navigator = useNavigate()


const schema = yup.object().shape({
        guardianFirstName: yup.string().required('guardianFirstName is required'),
        guardianMiddleName: yup.string().required('guardianMiddleName is required'),
        guardianLastName: yup.string().required('guardianLastName is required'),
        guardianCity: yup.string().required('guardianCity is required'),
        guardianTel: yup.number().required('guardianTel is required'),
        relationship: yup.string().required('relationship is required'),
      });
const {
        control,
        handleSubmit,
        formState: { errors }

}= useForm<GuardianData>({
        resolver: yupResolver(schema),
})


const onSubmit = (data: GuardianData) => {

        console.log("final submit button")
        dispatch(postAdmissionAction({
                                                  
                firstName:               applicant.applicantPersonalData.firstName,
                middleName:                applicant.applicantPersonalData.middleName,
                lastName:                applicant.applicantPersonalData.lastName,
                email:                    applicant.applicantPersonalData.email,
               
                nationality:              applicant.applicantPersonalData. nationality,
                town:                     applicant.applicantPersonalData.address,
                program:                  applicant.applicantEducation.program,
                gender:                   applicant.applicantEducation.gender,
                telephone:                applicant.applicantEducation.telephone,
                highestQualification:     applicant.applicantEducation.highestQualification,
                document:                 applicant.applicantEducation.document,        
                passport:                 applicant.applicantEducation.passport,        
                guardianFirstName:        data.guardianFirstName,
                guardianMiddleName:         data.guardianMiddleName,
                guardianLastName:         data.guardianLastName,
                guardianTel:              data.guardianTel,
                guardianCity:             data.guardianCity,
                relationshipWithGuardian: data.relationship,
                created_at                : ""
                           
                                    })).then(v=>{
                                         v.payload===true?navigate('/notification'):navigate('/error')   

                                         setTimeout(()=> navigator("/"),7000)
                                         
                                    })
                                   

                                   
                                   
                                


       
      };              

       return (
        <Box  display='flex' justifyContent='center' alignItems='center' h='100vh' w='100vw'   >
             
           
             <Card 
             
             h={{base:'95vh',xl:'auto','2xl':"90vh"}}
             w={{base:'95vw',xl:"40vw",'2xl':"60vw"}}
                
                  shadow='2xl'
                  justifyContent='center'
                  alignItems='center'
                  display='flex'
                  p={{base:0,xl:'20px'}}
                  >
                   <Link to="/registerForm2"><Box position='absolute' top={4} left={4}><Image src={backArrow} w='30px'/></Box></Link>  
                 <VStack 
                  w='80%'
                    >
                             
                             <Heading fontSize='16px'>APPLICATION FORM</Heading>



                                                       
<Controller
        name='guardianFirstName'
        control={control}
        render={({field})=>( 
                <FormControl  mt='6px' isInvalid={!!errors.guardianFirstName}>
                <FormLabel mb='3px' htmlFor='telephone' color='#b6b6b4'>guardianFirstName</FormLabel>
                
               
               
               
               
               
               
                <Input id='guardianFirstName' w='100%'  placeholder="please enter your telephone" {...field}/>
               
                
                <FormErrorMessage>{errors.guardianFirstName?.message}</FormErrorMessage>
                </FormControl>
         )}
 
/>


                                                                               
<Controller
        name='guardianMiddleName'
        control={control}
        render={({field})=>( 
                <FormControl  mt='6px' isInvalid={!!errors.guardianMiddleName}>
                <FormLabel mb='3px' htmlFor='telephone' color='#b6b6b4'>guardianMiddleName</FormLabel>
                
               
               
               
               
               
               
                <Input id='guardianMiddleName' w='100%'  placeholder="please enter your telephone" {...field}/>
               
                
                <FormErrorMessage>{errors.guardianMiddleName?.message}</FormErrorMessage>
                </FormControl>
         )}
 
/>



                                                                               
<Controller
        name='guardianLastName'
        control={control}
        render={({field})=>( 
                <FormControl  mt='6px' isInvalid={!!errors.guardianLastName}>
                <FormLabel mb='3px' htmlFor='telephone' color='#b6b6b4'>guardianLastName</FormLabel>
                
               
               
               
               
               
               
                <Input id='guardianLastName' w='100%'  placeholder="please enter your telephone" {...field}/>
               
                
                <FormErrorMessage>{errors.guardianLastName?.message}</FormErrorMessage>
                </FormControl>
         )}
 
/>                        
                            
                            
                            
                            
                            
                                                                               
<Controller
        name='guardianTel'
        control={control}
        render={({field})=>( 
                <FormControl  mt='6px' isInvalid={!!errors.guardianTel}>
                <FormLabel mb='3px' htmlFor='guardianTel' color='#b6b6b4'>GuardianTel</FormLabel>
                
               
               
               
               
               
               
                <Input id='guardianTel' w='100%'  placeholder="please enter your telephone" {...field}/>
               
                
                <FormErrorMessage>{errors.guardianTel?.message}</FormErrorMessage>
                </FormControl>
         )}
 
/>
                
                                                                                                       
<Controller
        name='guardianCity'
        control={control}
        render={({field})=>( 
                <FormControl  mt='6px' isInvalid={!!errors.guardianCity}>
                <FormLabel mb='3px' htmlFor='guardianCity' color='#b6b6b4'>GuardianCity</FormLabel>
                
               
               
               
               
               
               
                <Input id='guardianCity' w='100%'  placeholder="please enter your telephone" {...field}/>
               
                
                <FormErrorMessage>{errors.guardianCity?.message}</FormErrorMessage>
                </FormControl>
         )}
 
/>
                        
                        
                        
                        
                

                        
                                                        
<Controller
         name='relationship'
         control={control}
         render={({field})=>( 
                 <FormControl  mt='6px' isInvalid={!!errors.relationship}>
                 <FormLabel mb='3px' htmlFor='relationship' color='#b6b6b4'>Relationship With Guardian</FormLabel>
                 
                 <Select 
                 id='relationship'
                {...field}
                >  
                     
                     
                     
                     <option value='Father'>Father</option>
                     <option value='Mother'>Mother</option>
                     <option value='Brother'> Brother</option>
                     <option value='Sister'> Sister</option>
                     <option value='Uncle'>Uncle</option>
                     <option value='Aunt'>Aunt</option>
                     <option value='Husband'>Husband</option>
                     <option value='Wife'>Wife</option>
                     <option value='Other'>Other</option>
                                                                     
                </Select>
                 
                 <FormErrorMessage>{errors.relationship?.message}</FormErrorMessage>
                 </FormControl>
          )}
 
 />
                                  

       
               
                             <Button type='submit' variant="outline" h='2.4rem' w='6rem' mt={15} onClick={handleSubmit(onSubmit)}>Submit</Button>
                     
                     </VStack>
             </Card>

                                        
        </Box>
       )
     }
     