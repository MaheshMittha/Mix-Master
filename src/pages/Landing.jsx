import React from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import CocktailList from '../Components/CocktailList'



export const loader = async ()=>{
  const searchTerm = ''; // margarita
  const response = await axios.get( `${cocktailSearchUrl}${searchTerm} `)
  console.log(response);
  return {drinks: response.data.drinks, searchTerm}   // 👈 data contains the actual data
}

// Base Url
const cocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
const Landing = () => {
const {drinks, searchTerm} = useLoaderData();


  return (
  <CocktailList drinks={drinks} />
  )
}

export default Landing