import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search : '',
};

const searchSlice = createSlice({
    name : 'search',
    initialState,
    reducers : {
        setSearch (state, action) {
            state.search = action.payload;
        }
    }
});

// export function to use in components
export const { setSearch } = searchSlice.actions;
// export reducer to instance in store
export default searchSlice.reducer;
