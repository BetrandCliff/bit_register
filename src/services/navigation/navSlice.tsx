
// import { createSlice } from "@reduxjs/toolkit";


// export interface NavState{
//     // this part keeps track of whick application has being clicked 
//     // for view in the individual pages

    // activeLink:string,
//     activeApp:string,

    

//     //this when the dashboard load listening to changes

//     initial:boolean,
//     // the variable is to controll all the navigation from the list of applicant 
//     // to the details of each applicant back and forth

//     mobileAppLink:Boolean,
// }

//  const initialState:NavState={

//     activeLink:"Dashboard",
//     activeApp:"",
   
    
//     initial:true,
//     mobileAppLink:false,
   

// }


// export const navSlice = createSlice({
//     name:'activLinks',
//     initialState,
//     reducers:{
//         changeLinkState(state, action){
//             state.activeLink=action.payload
//             state.initial=false
//         },
//         changeAppliedJob(state,action){
//             state.activeApp= action.payload
            
//         },
       

//         mobileBackArrowApplied(state,action){
//             state.mobileAppLink=!state.mobileAppLink
//         },
       

//     }
// })


// export const  actions = navSlice.actions
// export default navSlice.reducer





import { createSlice } from "@reduxjs/toolkit";


export interface NavState{
    // this part keeps track of whick application has being clicked 
    // for view in the individual pages

    activeLink:string,
    activeApp:string,

    

    //this when the dashboard load listening to changes

    initial:boolean,
    // the variable is to controll all the navigation from the list of applicant 
    // to the details of each applicant back and forth

    mobileAppLink:Boolean,
}

 const initialState:NavState={

    activeLink:"Dashboard",
    activeApp:"",
   
    
    initial:true,
    mobileAppLink:false,
   

}


export const navSlice = createSlice({
    name:'activLinks',
    initialState,
    reducers:{
        changeLinkState(state, action){
            state.activeLink=action.payload
            state.initial=false
        },
        changeAppliedJob(state,action){
            state.activeApp= action.payload
            
            
        },
       

        mobileBackArrowApplied(state,action){
            state.mobileAppLink=!state.mobileAppLink
        },
       

    }
})


export const  actions = navSlice.actions
export default navSlice.reducer