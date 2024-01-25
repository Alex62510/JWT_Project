import {createSlice} from "@reduxjs/toolkit";

type ErrorType={
    message: string;

};
export type UserType={
    _id:string,
    username:string,
    email:string,
    profilePicture:string,
    createdAt:string,
    updatedAt:string,
    __v:number
}
type InitialStateType = {
    currentUser:UserType | null,
    loading:boolean,
    error:ErrorType | boolean,
}
const initialState:InitialStateType = {
    currentUser: null,
    loading: false,
    error: false
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state: InitialStateType) => {
            state.loading = true
        },
        signInSuccess: (state: InitialStateType, action) => {
            state.currentUser = action.payload
            state.error = false
            state.loading = false
        },
        signInFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})
export const {signInStart, signInFailure, signInSuccess} = userSlice.actions
export default userSlice.reducer