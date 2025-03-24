
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Landing, About, HomeLayout, Cocktail, NewsLetter, Error, SinglePageError } from './pages'
import {loader as landingLoader } from './pages/Landing';
import {loader as singleCocktailLoader } from './pages/Cocktail';
import {action as newsletterAction} from './pages/NewsLetter'


// 2. Creating a Router
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,  // Home Page
    errorElement: <Error/>,
    children: [
      {
        index : true,
        element: <Landing />, // Landing Page
        errorElement: <SinglePageError/>,
        loader : landingLoader,
      },
      {
        path: 'cocktail/:id',
        errorElement: <SinglePageError/>,
        loader: singleCocktailLoader,
        element : <Cocktail/>, // Cocktail
      },
      {
        path: 'newsletter',
        element: <NewsLetter/>, // Newsletter
        action: newsletterAction,
        errorElement:<SinglePageError/>
      },

      {
        path: 'about',
        element: <About/>, 
      },

    ]
  }, 
])


// 3. Rendering the Router in React

const App = () => {
  return <RouterProvider router={router} />; // It connects router configuration (created using createBrowserRouter)

};

export default App;
