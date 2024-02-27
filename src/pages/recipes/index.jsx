import { Container, Grid, TextField } from "@mui/material";
import RecipeItem from "../../components/recipe-item/index.jsx";
import { useEffect, useState } from "react";


export default function Recipes() {

    const [recipes, setRecipes] = useState([]);
    const [recipeInput, setRecipeInput] = useState("");

    const searchRecipes = () => {
        // prepare url
        const url = new URL('https://api.spoonacular.com/recipes/complexSearch');
        url.searchParams.append('apiKey', process.env.REACT_APP_SPOONACULAR_API_KEY);
        url.searchParams.append('query', setRecipeInput);
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
            <TextField fullWidth id="outlined-basic" label="Enter a keyword to search recipes and hit Enter" variant="outlined" value={recipeInput} onChange={(event) => setRecipeInput(event.target.value)} onKeyDown={event => event.key == 'Enter' && searchRecipes()} />
            <Grid sx={{ mt: '1rem' }} container spacing={3}>
                {recipes.map((recipe) => <RecipeItem key={recipe.id} title={recipe.title} image={recipe.image} />)}
            </Grid>
        </Container>
    );
}