import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Recipes from './pages/recipes';
import Recipe from './pages/recipe';
import AddRecipePage from './pages/add-recipe/index.jsx';

const router = createBrowserRouter([
  {path: '/', element: <Recipes />},
  {path: '/recipes', element: <Recipes />},
 {path: '/recipes/:id', element: <Recipe />},
 {path: '/add-recipe', element: <AddRecipePage />},
]);

function App() {
  return (
   <RouterProvider router={router} />
  );
}

export default App;
