import React from 'react';
import {Button, TextField} from "@mui/material";
import styles from "./AddForm.module.css";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setClicked } from "../../../redux/slices/submitSlice";


const AddForm = () => {
    const [inputValueTitle, setInputValueTitle] = React.useState('');
    const [inputValueText, setInputValueText] = React.useState('');
    const dispatch = useDispatch();
    // @ts-ignore
    const clicked : boolean = useSelector(state => state.submitSlice.cklicked);

    const handleOnChangeTitle = (event : any) => {
        setInputValueTitle(event.target.value);
    }

    const handleOnChangeText = (event : any) => {
        setInputValueText(event.target.value);
    }
    
    const onSubmitForm = () => {
        axios
            .post('https://631119f2826b98071a5208b4.mockapi.io/items', {
                "title" : inputValueTitle,
                "text" : inputValueText
            })

        dispatch(setClicked(!clicked));
    }
    
    return (
        <div className={styles.form}>
            <TextField onChange={handleOnChangeTitle}  className={styles.input} label="Заголовок" variant="standard" />
            <TextField onChange={handleOnChangeText} label="Заметка" variant="standard" />
            <Button onClick={() => onSubmitForm()} sx={{ mt: 5 }} variant="contained">Добавить</Button>
        </div>
    )
};

export default AddForm ;