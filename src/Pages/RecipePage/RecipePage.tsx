import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Recipe from '../../Components/Recipe/Recipe'
import { getCocktailRecipe } from '../../Scripts/network-functions'

const RecipePage = () => {
  const {drinkId} = useParams();
  const {data, error} = useQuery('recipe', () => getCocktailRecipe(drinkId ?? ''))
  console.log('data', data)
  const recipe = useMemo(() => {
    if (!data) return;
    return data.drinks[0]
  }, [data])
  console.log('recipe', recipe)
  if (!data) return <h2>Loading...</h2>
  if(error) return <h2>There has been an error getting your drink. Please return to the bar</h2>
  return (
    <div>
     {
       recipe && <Recipe recipe={recipe} />
     }
    </div>
  )
}

export default RecipePage
