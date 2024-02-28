import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import Recipes from './pages/recipes';
import Recipe from './pages/recipe';

const router = createBrowserRouter([
  {path: '/', element: <Recipes />},
  {path: '/recipes', element: <Recipes />},
 { path: '/recipes/:id', element: <Recipe />},

]);

function App() {
  return (
   <>
   <Navbar />
   <RouterProvider router={router} />
   </>
  );
}

export default App;
