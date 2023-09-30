import { ThunkAction, configureStore,Action } from "@reduxjs/toolkit";







import admissionApplicantReducer from '../services/registration/admissionSlice'


export const store =configureStore({
    reducer:{
        admissionApplicant : admissionApplicantReducer,
    }
})

export type AppDispatch         = typeof store.dispatch
export type RootState           = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void>= ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<String>>