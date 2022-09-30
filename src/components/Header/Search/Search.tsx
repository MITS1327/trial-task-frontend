import React from 'react';
import styles from './Search.module.css';
import {TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import { setSearch } from "../../../redux/slices/searchSlice";
// @ts-ignore
import debounce from 'lodash.debounce';

const Search = () => {
    // @ts-ignore
    const search : string = useSelector(state => state.searchSlice.search);
    const dispatch = useDispatch();

    const updateSearch = React.useCallback(
        debounce( (str : string) => {
            dispatch(setSearch(str));
            console.log('call');
        }, 500),
        []
    )

    const handleOnSearch = (event : any) => {
        updateSearch(event.target.value.toLowerCase());
    }

    return (
        <TextField onChange={handleOnSearch} className={styles.input} label="Поиск" variant="standard" />
    )
};

export default Search ;