import { configureStore } from '@reduxjs/toolkit';
import submitSlice from "./slices/submitSlice";
import searchSlice from "./slices/searchSlice";

export const store = configureStore({
    reducer: {
//         instanse reducers
        submitSlice,
        searchSlice
    },
});
