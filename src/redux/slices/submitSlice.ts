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

// export function to use in components
export const { setClicked } = submitSlice.actions;
// export reducer to instance in store
export default submitSlice.reducer;
