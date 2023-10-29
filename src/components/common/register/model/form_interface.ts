export interface PersonalData{
 firstName:string,
 middleName:string,
 lastName:string,
 email:string,
 
 nationality:string,
 address:string

}

export interface EducationalData{
    gender:string,
    telephone:number
    highestQualification:string
    program:string
    // document:File,
    // passport:File

}

export interface GuardianData{
    guardianFirstName: string
    guardianMiddleName: string
    guardianLastName: string
    guardianCity: string
    guardianTel: number
    relationship: string
}