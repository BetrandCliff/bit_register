export interface PersonalData{
 fullName:string,
 email:string,
 gender:string,
 nationality:string,
 address:string

}

export interface EducationalData{
    telephone:number
    highestQualification:string
    program:string
    // document:File,
    // passport:File

}

export interface GuardianData{
    guardianFirstName: string
    guardianLastName: string
    guardianCity: string
    guardianTel: number
    relationship: string
}