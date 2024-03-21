import React from "react";
import Navbar from "../../components/navbar";
import { AppBar, Toolbar, Typography, Button, Container, TextField } from "@mui/material";

export default function AddRecipePage() {
  return (
    <>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Recipe App
          </Typography>
          <Button color="inherit">ADD NEW RECIPE</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{textAlign: 'center',}}>
      <h1>Add A New Recipe</h1>
      </Container>

      <form action="">
        <TextField label="Recipe Title" />  
      </form>  

    </>
  );
}

