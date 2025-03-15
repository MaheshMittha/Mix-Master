
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Landing, About, HomeLayout, Cocktail, NewsLetter, Error , NavLink } from './pages'


// 2. Creating a Router
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,  // Home Page
    children: [
      {
        index : true,
        element: <Landing />, // Landing Page
      }, 
      {
        path: 'cocktail',
        element : <Cocktail/>, // Cocktail
      },
      {
        path: 'newsletter',
        element: <NewsLetter/>, // Newsletter
      },

      {
        path: 'about',
        element: <About/>, 
      }
    ]
  }, 
])


// 3. Rendering the Router in React

const App = () => {
  <NavLink to="/about">Go to About</NavLink>
  return <RouterProvider router={router} />; // It connects router configuration (created using createBrowserRouter)

};
export default App;
