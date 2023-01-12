const searchBar = document.getElementById('search-bar');
const selectedItems = document.querySelector('.selected-items');
let ingredientTerm = []
let appareilsTerm = []
let ustensilsTerm = []

async function filterSearchBar() {
    recipes = await fetchRecipes();
    let recettes = [];

    if (searchBar.value.length >= 3) {

        for (let i = 0; i < recipes.length; i++) {
            if (recipes[i].name.toLowerCase().includes(searchBar.value.toLowerCase()) ||
                recipes[i].description.toLowerCase().includes(searchBar.value.toLowerCase())
            ) {
                recettes.push(recipes[i]);
            } else {
                for (let j = 0; j < recipes[i].ingredients.length; j++) {
                    if (recipes[i].ingredients[j].ingredient.toLowerCase().includes(searchBar.value.toLowerCase())) {
                        recettes.push(recipes[i]);
                        break;
                    }
                }
            }
        }

    } else {
        // on affiche toutes les recettes
        recettes = recipes;
    }

    // on filtre les recettes en fonction des ingrédients sélectionnés
    if (ingredientTerm.length > 0) {
        recettes = recettes.filter((recipe) => {
            return recipe.ingredients.some((ingredient) => ingredientTerm.includes(ingredient.ingredient));
        }
        );
    }

    // on filtre les recettes en fonction des appareils sélectionnés
    if (appareilsTerm.length > 0) {
        recettes = recettes.filter((recipe) => {
            return appareilsTerm.includes(recipe.appliance);
        });
    }
    // on filtre les recettes en fonction des ustensiles sélectionnés
    if (ustensilsTerm.length > 0) {
        recettes = recettes.filter((recipe) => {
            return recipe.ustensils.some((ustensil) => ustensilsTerm.includes(ustensil));
        });
    }

    displayResult(recettes);
    displayFilters(recettes);

    removeSelectedItems();

}

async function selectItems() {

    let ingredientsLists = document.querySelectorAll('.first_button ul>li a');
    let appareilsLists = document.querySelectorAll('.second_button ul>li a');
    let ustensilsLists = document.querySelectorAll('.third_button ul>li a');
    ingredientsLists.forEach((ingredient) => {
        // on ajoute un écouteur d'événement sur chaque ingrédient
        ingredient.addEventListener('click', (e) => {
            // on ajoute l'ingrédient sélectionné à la liste des ingrédients sélectionnés
            if (ingredientTerm.includes(ingredient.innerText)) {
                return;
            } else {
                selectedItems.innerHTML += `
         <button class="btn btn-blue"> ${ingredient.innerText}
         <img src="./assets/close_icon.svg" alt="check">
            </button>
          `
                ingredientTerm.push(ingredient.innerText)
                // on appelle la fonction qui affiche les recettes filtrées en fonction de la recherche et des ingrédients sélectionnés
                filterSearchBar()
            }
        })
    })
    appareilsLists.forEach((appliance) => {
        appliance.addEventListener('click', (e) => {
            if (appareilsTerm.includes(appliance.innerText)) {
                return;
            } else {
                selectedItems.innerHTML += `
            <button class="btn btn-green"> ${appliance.innerText}
            <img src="./assets/close_icon.svg" alt="check">
            </button>
            `
                appareilsTerm.push(appliance.innerText)

                filterSearchBar()

            }
        })
    })
    ustensilsLists.forEach((ustensil) => {
        ustensil.addEventListener('click', (e) => {
            if (ustensilsTerm.includes(ustensil.innerText)) {
                return;
            } else {
                selectedItems.innerHTML += `
            <button class="btn btn-red"> ${ustensil.innerText}
            <img src="./assets/close_icon.svg" alt="check">
            </button>
            `
                ustensilsTerm.push(ustensil.innerText)

                filterSearchBar()

            }
        })
    })
}


async function removeSelectedItems() {
    const selectIngredients = document.querySelectorAll('.selected-items .btn-blue');
    const selectAppareils = document.querySelectorAll('.selected-items .btn-green');
    const selectUstensils = document.querySelectorAll('.selected-items .btn-red');

    // on ajoute un écouteur d'événement sur chaque ingrédient sélectionné
    selectIngredients.forEach((ingredient) => {
        // on retire l'ingrédient sélectionné de la liste des ingrédients sélectionnés
        ingredient.addEventListener('click', (e) => {
            ingredientTerm = ingredientTerm.filter((item) => item !== ingredient.innerText);
            ingredient.remove();
            filterSearchBar()
        })
    })

    selectAppareils.forEach((appliance) => {
        appliance.addEventListener('click', (e) => {
            appareilsTerm = appareilsTerm.filter((item) => item !== appliance.innerText);
            appliance.remove();
            filterSearchBar()
        })
    })

    selectUstensils.forEach((ustensil) => {
        ustensil.addEventListener('click', (e) => {
            ustensilsTerm = ustensilsTerm.filter((item) => item !== ustensil.innerText);
            ustensil.remove();
            filterSearchBar()
        })
    })
}



searchBar.addEventListener('keyup', filterSearchBar);






