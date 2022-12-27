async function displayResult(recettesList) {
  if (recettesList === undefined) {
    recettesList = await fetchRecipes()
  }
  const recettes = recettesList
  const recettesContainer = document.querySelector('.recipes_container')
  let displayRecettes = recettes.map((recette) => {
    return `
        <div class="recipe_card">
        <svg width ="380" height="178" viewBox="0 0 380 178" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 5C0 2.23858 2.23858 0 5 0H375C377.761 0 380 2.23858 380 5V178H0V5Z" fill="#C7BEBE"/>
        </svg>
        <div class="content">
          <div class="first_line">
            <h5 class="card-title ">${recette.name} </h5>
            <p class="time">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10.5 5H9V11L14.2 14.2L15 12.9L10.5 10.2V5Z" fill="black"/>
            </svg> 
              <b>${recette.time} min</b>
            </p>
          </div>
          <div class="content_card">
          <div class="ingredient_list">
            <ul class="group_list">
         
            ${recette.ingredients
        .map(
          (ingredient) =>
            '<li clas="group_item"> <b>' +
            ingredient.ingredient +
            '</b> ' +
            (ingredient.quantity === undefined
              ? ''
              : ': ' + ingredient.quantity) +
            ' ' +
            (ingredient.unit === undefined ? '' : ingredient.unit) +
            '</li>'
        )
        .join('')}
            </ul>
          </div>  
          <div class="text_card">
            ${recette.description.substring(0, 300)} ...
          </div>
          </div>
         </div>
        </div>
        `
  }
  )
    .join('')
  if (recettesList.length === 0) {
    recettesContainer.innerHTML = `<p class="mt-5 lead text-center"> Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson »</p>`
    return
  }

  recettesContainer.innerHTML = displayRecettes
}



