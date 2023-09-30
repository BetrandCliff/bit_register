
import { createSlice } from "@reduxjs/toolkit"


export interface AdmissionState{
  

    activeLink:string,
    activeApplicant:string,
    mobileAppLink:boolean,
    
    // notification:Boolean
}

 const initialState:AdmissionState={

    activeLink:"",
    activeApplicant:"",
    mobileAppLink:false
}

export const AdmissionSlice = createSlice({
    name:'activLinks',
    initialState,
    reducers:{
        // changeLinkState(state, action){
        //     state.activeLink=action.payload
           
        // },

        changeAppliedJob(state,action){
            state.activeApplicant= action.payload
            
        },
        
        mobileBackArrowAdmission(state){
            state.mobileAppLink=!state.mobileAppLink
        },
        // Notification(state,action){
        //     state.notification=!state.notification
        // }

    }
})


export const  actions = AdmissionSlice.actions
export default AdmissionSlice.reducer