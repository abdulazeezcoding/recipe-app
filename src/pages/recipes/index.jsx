import { Container, Grid, TextField } from "@mui/material";
import RecipeItem from "../../components/recipe-item/index.jsx";
import { useEffect, useState } from "react";


export default function Recipes() {

    const [recipes, setRecipes] = useState([]);

    const searchRecipes = () => {
        // prepare url
        const url = new URL('https://api.spoonacular.com/recipes/complexSearch');
        url.searchParams.append('apiKey', 'd7ee1bf646464cd1b530677aa9b10bae');
        // fetch recipes
        // console.log(data);
        fetch(url).then((response) => response.json()).then((data) => {
            // update the recipes state
            setRecipes(data.results)
            // console.log(data);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(searchRecipes, []);

    return (
        <Container sx={{ my: '2rem' }} s>
            <TextField fullWidth id="outlined-basic" label="Enter a keyword to search recipes and hit Enter" variant="outlined" />
            <Grid sx={{ mt: '1rem' }} container spacing={3}>
               {recipes.map((recipe) =>  <RecipeItem key= {recipe.id} title={recipe.title} image={recipe.image} /> )}
            </Grid>
        </Container>
    );
}