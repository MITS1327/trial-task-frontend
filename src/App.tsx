import React from 'react';
import {Container} from "@mui/material";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
        <Container maxWidth="sm">
            <Header />
            <Main />
        </Container>
    </div>
  );
}

export default App;
