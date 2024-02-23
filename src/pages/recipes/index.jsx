import { Card, CardContent, CardMedia, Container, Grid, TextField, Typography } from "@mui/material";

export default function Recipes() {
    return (
        <Container sx={{ my: '2rem' }} maxWidth="sm">
            <TextField fullWidth id="outlined-basic" label="Enter a keyword to search recipes and hit Enter" variant="outlined" />
            <Grid sx={{mt: '1rem' }}container spacing={3}>
                <Grid item xs={4}>
                    <Card>
                        <CardMedia
                            sx={{ height: 180 }}
                            
                            image="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnVmdXxlbnwwfHwwfHx8MA%3D%3D" />
                    </Card>
                    <CardContent>
                        <Typography variant="h5">Fufu</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Container>
    );
}