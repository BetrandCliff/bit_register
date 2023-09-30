
// export interface AdmissionDetails{

import exp from "constants"

//     name:                       string|null
//     email:                      string|null
//     tel:                        string|null
//     address:                    string|null
//     program:                    string|null
//     sex:                        string|null
//     highestQualification:       string|null
//     guardian:                   string|null
//     guardianTel:                string|null
//     guardianEmail:              string|null
//     // documents             
//     certificate:                string|null
//     nid:                        string|null

// }

// export interface Admission{
//     applicants:AdmissionDetails[]
// }

// export const mockAdmissionData =[
//     {
//         name:"John Doe",
//         email:"Johnoe@gmail.com",
//         tel:"672000678",
//         address:"Buea",
//         program:"Web Master",
//         sex:"Male",
//         highestQualification:"A-level",
//         guardian:"John Doe",
//         guardianEmail:"johndoe@gmail.com",
//         guardianTel:"673493003",
//         certificate:"a.pdf",
//         nid:"nid.pdf",
//     },
//     {
//         name:"John Doe",
//         email:"Johndoe@gmail.com",
//         tel:"672000678",
//         address:"Buea",
//         program:"Web Master",
//         sex:"Male",
//         highestQualification:"A-level",
//         guardian:"John Doe",
//         guardianEmail:"johndoe@gmail.com",
//         guardianTel:"673493003",
//         certificate:"a.pdf",
//         nid:"nid.pdf",
//     },
//     {
//         name:"John Doe",
//         email:"Johndo@gmail.com",
//         tel:"672000678",
//         address:"Buea",
//         program:"Web Master",
//         sex:"Male",
//         highestQualification:"A-level",
//         guardian:"John Doe",
//         guardianEmail:"johnoe@gmail.com",
//         guardianTel:"673493003",
//         certificate:"a.pdf",
//         nid:"nid.pdf",
//     }
// ]


export interface applicantsPersonal{
    firstName: string,
    lastName: string,
    email: string,
    gender: string,
    nationality:string
    address:string
 }

 export interface applicantsEducational{

    
    program:string,
    telephone:number,
    highestQualification:string,
    document:File|null
    passport:File|null

 }
 export interface applicantsGuardian{
        guardianFirstName:         string|null
        guardianLastName:          string|null
        guardianTel:               number|null
        guardianCity:              string|null
        relationshipWithGuardian:  string|null
 }

export interface AdmissionDetails{

    firstName:                       string|null
    lastName:                       string|null
    email:                      string|null
    gender:                        string|null
    town:                    string|null
    program:                    string|null
    telephone:                        number|null
    nationality:                        string|null
    highestQualification:       string|null
    guardianFirstName:                   string|null
    guardianLastName:                   string|null
    guardianTel:                number|null
    guardianCity:              string|null
    relationshipWithGuardian:  string|null
    created_at               :string,         
    document:                File|null
    passport:                File|null
   

}

export interface Admission{
    applicants:AdmissionDetails[],
    applicantPersonalData:applicantsPersonal,
    applicantEducation:applicantsEducational,
    applicantGuardian:applicantsGuardian
    admissionStatus:boolean|null

}

export interface ApplicationStatus{
    name:string|null
    email:string|null
    status:string|null
}

export const mockAdmissionData =[
       {
        firstName:"John Doe",
        lastName:"John Doe",
        email:"Johnoe@gmail.com",
        telephone:672000678,
        town:"Buea",
        program:"Web Master",
        gender:"Male",
        nationality:"Cameroonian",
        highestQualification:"A-level",
        guardianFirstName:"John Doe",
        guardianLastName:"John Doe",
        guardianCity:"Buea",
        guardianTel:673493003,
        relationshipWithGuardian:"Sibling",
        document:null,
        created_at:""
    }
]
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
