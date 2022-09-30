import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cklicked : false,
};

const submitSlice = createSlice({
    name : 'submitSlice',
    initialState,
    reducers : {
        setClicked (state, action) {
            state.cklicked = action.payload;
        }
    }
});


export const { setClicked } = submitSlice.actions;
export default submitSlice.reducer;