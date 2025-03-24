import React from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import CocktailList from '../Components/CocktailList'
import SerchForm from '../Components/SearchForm'

// Base Url 
const cocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
export const loader = async ({request}) => {
  const url = new URL (request.url);
  const searchTerm = url.searchParams.get('search') || '';
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  // console.log(response);

  return { drinks: response.data.drinks, searchTerm }   // 👈 data contains the actual data
}

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();
  return (
    <>
      <SerchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />

    </>
  )
}

export default Landing