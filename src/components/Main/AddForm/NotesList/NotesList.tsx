import React from 'react';
import axios from "axios";
import { useSelector } from "react-redux";
import Note from "../../Note/Note";
import { Grid } from '@mui/material';
import Skeleton from "../../Skeleton/Skeleton";
import {KeyboardArrowLeft} from "@mui/icons-material";

const NotesList = () => {
    const [notes, setNotes] = React.useState([]);
    const [loaded, setLoaded] = React.useState(false);
    // @ts-ignore
    const clicked : boolean = useSelector(state => state.submitSlice.cklicked);
    // @ts-ignore
    const search : string = useSelector(state => state.searchSlice.search);

    React.useEffect( () => {
        setLoaded(false);
        axios
            .get(`https://631119f2826b98071a5208b4.mockapi.io/items?title=${search}`)
            .then((res : any) => {
                setNotes(res.data);
                setLoaded(true);
            });
        console.log(search)
    }, [ clicked, search ]);

    // @ts-ignore
    // @ts-ignore
    return (
        <Grid container spacing={4}>
            {
                loaded ?
                notes
                    .map( (obj, index) =>
                        <Grid item xs={6}>
                            <Note
                                // @ts-ignore
                                title={obj.title}
                                // @ts-ignore
                                text={obj.text}
                                key={index}
                            />
                        </Grid>
                    ) : [...new Array(6)].map( (_, index) => (<Grid item xs={6}><Skeleton key={index} /></Grid>))
            }
        </Grid>

    )
};

export default NotesList;
