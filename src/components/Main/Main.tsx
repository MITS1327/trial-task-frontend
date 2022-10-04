import React from 'react';
import AddForm from './AddForm/AddForm';
import NotesList from "./AddForm/NotesList/NotesList";

const Main = () => {
    return (
//         use empty tag instead of strict mode to avoid unnecessary rerenders
        <>
            <AddForm />
            <NotesList />
        </>
    )
};

export default Main ;
