import { Container, Grid, TextField } from "@mui/material";
import RecipeItem from "../../components/recipe-item/index.jsx";
import { useEffect, useState } from "react";
import noRecipes from "../../assets/images/undraw_no_data_re_kwbl.svg"
import spinner from "../../assets/images/infinite-spinner.svg"

export default function Recipes() {

    const [recipes, setRecipes] = useState([]);
    const [recipeInput, setRecipeInput] = useState("");
    const [loading, setLoading] = useState(false);

    const searchRecipes = () => {
        setLoading(true);
        // prepare url
        const url = new URL('https://api.spoonacular.com/recipes/complexSearch');
        url.searchParams.append('apiKey', process.env.REACT_APP_SPOONACULAR_API_KEY);
        url.searchParams.append('query', recipeInput);
        // fetch recipes
        // console.log(data);
        fetch(url).then((response) => response.json()).then((data) => {
            // update the recipes state
            setRecipes(data.results)
            // console.log(data);
        }).catch((error) => {
            console.log(error);
        }).finally(()=> setLoading(false));
    }

    useEffect(searchRecipes, [recipeInput]);

    return (
        <Container sx={{ my: '2rem' }} s>
            <TextField fullWidth id="outlined-basic" label="Enter a keyword to search recipes and hit Enter" variant="outlined" value={recipeInput}
                onChange={(event) => setRecipeInput(event.target.value)}
                onKeyDown={event => event.key === 'Enter' && searchRecipes(event.target.value)} />
            <Grid sx={{ mt: '1rem' }} container spacing={3}> 
                {loading ? (<Container sx={{display: 'flex', justifyContent: 'center' }}> <img src={spinner} width="25%" />
                </Container> ) :
                recipes.length > 0 ? recipes.map((recipe) => <RecipeItem key={recipe.id} title={recipe.title} image={recipe.image} />) : (
                    <Container sx={{display:'flex', justifyContent:'center', marginTop: 10}} >
                        <img src={noRecipes} width="25%" />
                    </Container>
                )}
            </Grid>
        </Container>
    );
}