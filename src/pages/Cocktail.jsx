import React from 'react'
import { useLoaderData, Link ,Navigate } from 'react-router-dom';
import axios from 'axios';
import Wrapper from '../assets/wrappers/CocktailPage';

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${singleCocktailUrl} ${id}`)
  //console.log(data);
  return { id, data }
}


const Cocktail = () => {
  const { id, data } = useLoaderData();
  // if (!data) return <h2>something went wrong...</h2>
  if (!data) return <Navigate to ='/' />

  const singleDring = data.drinks[0];
  
  const { strDrink: name,
    strDrinmkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions:
    instructions } = singleDring;

  // Convertig Object into an array
  const validIngredients = Object.keys(singleDring).filter((key) => key.startsWith('strIngredient') && singleDring[key] !== null).map((key) => singleDring[key])
  console.log(validIngredients);

  return (
    <Wrapper>
      <header>
        <Link to='/' className='btn'>Back Home</Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className='img' />
        <div className='drink-info' >
          <p>
            <span className='drink-data'>name : </span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category : </span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info : </span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass : </span>
            {glass}
          </p>

          <p>
            <span className='drink-data' >ingredient</span>
            {validIngredients.map((item, index) => {
              return <span className='ing' key={item}>
                {item} {index < validIngredients.length - 1 ? ',' : ''}
              </span>
            })}
          </p>
          <p>
            <span className='drink-data'>instructions : </span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}



export default Cocktail;