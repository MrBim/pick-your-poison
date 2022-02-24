export const getIngredients = async () => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`
    const res = fetch(url);
    return await (await res).json()
}

export const getCocktails = async (searchTerm: string) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchTerm}`
    const res = fetch(url);
    return await (await res).json()
}

export const getCocktailRecipe = async (drinkId: string) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
    const res = fetch(url);
    return await (await res).json()
}

