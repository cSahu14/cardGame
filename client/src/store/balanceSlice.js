import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    count : 10
}

const balanceSlice = createSlice({
    name : "balance",
    initialState,
    reducers: {
        add(state, action) {
            state.wallet += action.payload
        },
        remove(state, action) {
            state.wallet += action.payload
        },
    }
})

export const {add, remove} = balanceSlice.actions;
export default balanceSlice.reducer