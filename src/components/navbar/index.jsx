import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <AppBar color="primary" position="static">
            <Toolbar>
                <Typography variant="h6" component={Link} to="/recipes" color="inherit" sx={{ flexGrow: 1 }}>
                    Recipe App
                </Typography>
                <Button component={Link} to="/add-recipe" color="inherit">Add New Recipe</Button>
            </Toolbar>
        </AppBar>
    );
}