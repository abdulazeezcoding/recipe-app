import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import Recipes from './pages/recipes';
import Recipe from './pages/recipe';
import AddRecipePage from './pages/add-recipe';

const router = createBrowserRouter([
  {path: '/', element: <Recipes />},
  {path: '/recipes', element: <Recipes />},
 { path: '/recipes/:id', element: <Recipe />},
 {path: '/add-recipe', element: <AddRecipePage />},
]);

function App() {
  return (
   <>
   {/* <Navbar /> */}
   <RouterProvider router={router} />
   </>
  );
}

export default App;
