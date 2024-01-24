import {createSlice} from "@reduxjs/toolkit";

type ErrorType={
    message: string;

};
type InitialStateType = typeof initialState
const initialState = {
    currentUser: null,
    loading: false,
    error: false as ErrorType | boolean,
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