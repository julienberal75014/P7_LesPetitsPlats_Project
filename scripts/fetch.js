async function fetchRecipes() {
    await fetch('data/recipes.js')
        .then((results) => results.json())
        .then((results) => (recipes = results))
        .catch((error) => console.log(error))


    return recipes
}



