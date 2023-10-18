// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { Admission, AdmissionDetails, mockAdmissionData } from "./model/admissionModel";
// import { getAdmissionApplicant, postAdmissionApplicant } from "./services/admissionService";


// const initialState:Admission={
//     applicants: mockAdmissionData
//     // applicants: []
//                             }


// export const getAdmissionApplicantsAction=createAsyncThunk(
//     'admission',
//     async()=>{
//         const response = await getAdmissionApplicant()
//         return response.data
//     }
//     )

// export const postAdmissionAction=createAsyncThunk(
//     'postAdmission',
//     async(data:AdmissionDetails)=>{

//         const response = await postAdmissionApplicant(data) 
//         return response.data
//     }
// )

// const admissionSlice =createSlice({
//     name:"admission",
//     initialState,
//     reducers:{},
//     extraReducers(builder) {
//         builder.addCase(getAdmissionApplicantsAction.fulfilled,(state,action)=>{
//             state.applicants=action.payload
//         })
//         .addCase(postAdmissionAction.fulfilled,(state,action)=>{
//             console.log(action.payload)
//         })
//     },

// })


// export const admissionAction = admissionSlice.actions
// export default admissionSlice.reducer





import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Admission, AdmissionDetails, ApplicationStatus, mockAdmissionData } from "./model/admissionModel";
import { postAdmissionApplicant } from "./service/studentService";
// import { applicationStatus, deleteApplicant, getAdmissionApplicant, postAdmissionApplicant, postStudent } from "./RegistrationSlice";


const initialState:Admission={
    // applicants: mockAdmissionData,
    applicants: [],
    applicantPersonalData: {
        fullNames: "",
       
        email: "",
        gender: "",
        nationality:"",
        address:"",
    },
    applicantEducation: {
        
        program:"",
        telephone:0,
        highestQualification:"",
        document: null,
        passport: null
    },
    applicantGuardian: {


        guardianFirstName:        "",
        guardianLastName:         "",
        guardianTel:              0,
        guardianCity:             "",
        relationshipWithGuardian: ""
    },

    admissionStatus:null
}

    // this is for student to apply for admission
export const postAdmissionAction=createAsyncThunk(
    'postAdmission',
    async(data:AdmissionDetails)=>{
        console.log("THIS IS THE STUDENT ADMITTED")
        console.log(data)
        const response = await postAdmissionApplicant(data) 
        return response.data
    }
)



const admissionSlice =createSlice({
    name:"admission",
    initialState,
    reducers:{
        applicantPersonal(state,action){
                    state.applicantPersonalData= action.payload
              
                                          },
        applicantEducation(state,action){
            state.applicantEducation=action.payload
        },

        applicantGuardian(state,action){
            state.applicantGuardian=action.payload
        }

         },

        
    // asynchronous 
    extraReducers(builder) {
        builder.

        addCase(postAdmissionAction.fulfilled,(state,action)=>{
            state.admissionStatus= action.payload
            console.log(action.payload)
        })
    },

})


export const admissionAction = admissionSlice.actions
export default admissionSlice.reducer