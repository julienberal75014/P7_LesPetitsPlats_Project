const searchBar = document.getElementById('search-bar');
const selectedItems = document.querySelector('.selected-items');
let ingredientTerm = []
let appareilsTerm = []
let ustensilsTerm = []

async function filterSearchBar() {
    recipes = await fetchRecipes();
    let recettes = [];

    if (searchBar.value.length >= 3) {
        // on filtre les recettes en fonction de la recherche
        recipes.filter((recipe) => {
            // on vérifie si le nom, la description ou les ingrédients contiennent la recherche
            if (recipe.name.toLowerCase().includes(searchBar.value.toLowerCase())
                || recipe.description.toLowerCase().includes(searchBar.value.toLowerCase())
                || recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(searchBar.value.toLowerCase()))
            ) {
                // on ajoute la recette à la liste des recettes à afficher
                recettes.push(recipe);
            }
        });
    } else {
        // on affiche toutes les recettes
        recettes = recipes;
    }

    if (ingredientTerm.length > 0) {
        recettes = recettes.filter((recipe) => {
            return recipe.ingredients.some((ingredient) => ingredientTerm.includes(ingredient.ingredient));
        });
    }

    if (appareilsTerm.length > 0) {
        recettes = recettes.filter((recipe) => {
            return appareilsTerm.includes(recipe.appliance);
        });
    }


    if (ustensilsTerm.length > 0) {
        recettes = recettes.filter((recipe) => {
            return recipe.ustensils.some((ustensil) => ustensilsTerm.includes(ustensil));
        });
    }



    displayResult(recettes);

    return recettes;

}

async function selectIngredients() {
    let ingredientsLists = document.querySelectorAll('.first_button ul>li a');
    ingredientsLists.forEach((ingredient) => {
        ingredient.addEventListener('click', (e) => {
            selectedItems.innerHTML += `
         <button class="btn btn-blue"> ${ingredient.innerText}
         <img src="./assets/close_icon.svg" alt="check">
            </button>
          `
            ingredientTerm.push(ingredient.innerText)

            filterSearchBar()
        })
    })
}

async function selectAppareils() {
    let appareilsLists = document.querySelectorAll('.second_button ul>li a');
    appareilsLists.forEach((appliance) => {
        appliance.addEventListener('click', (e) => {
            selectedItems.innerHTML += `
            <button class="btn btn-green"> ${appliance.innerText}
            <img src="./assets/close_icon.svg" alt="check">
            </button>
            `
            appareilsTerm.push(appliance.innerText)

            filterSearchBar()
        })
    })
}

async function selectUstensils() {
    let ustensilsLists = document.querySelectorAll('.third_button ul>li a');
    ustensilsLists.forEach((ustensil) => {
        ustensil.addEventListener('click', (e) => {
            selectedItems.innerHTML += `
            <button class="btn btn-red"> ${ustensil.innerText}
            <img src="./assets/close_icon.svg" alt="check">
            </button>
            `
            ustensilsTerm.push(ustensil.innerText)

            filterSearchBar()
        })
    })
}

/*async function removeSelectedItems() {
    let selectedItemsLists = document.querySelectorAll('.selected-items button');
    selectedItemsLists.forEach((selectedItem) => {
        selectedItem.addEventListener('click', (e) => {
            selectedItem.remove()
            if (ingredientTerm.includes(selectedItem.innerText)) {
                ingredientTerm = ingredientTerm.filter((ingredient) => ingredient !== selectedItem.innerText)
            }
            if (appareilsTerm.includes(selectedItem.innerText)) {
                appareilsTerm = appareilsTerm.filter((appareil) => appareil !== selectedItem.innerText)
            }
            if (ustensilsTerm.includes(selectedItem.innerText)) {
                ustensilsTerm = ustensilsTerm.filter((ustensil) => ustensil !== selectedItem.innerText)
            }
            filterSearchBar()
        })
    })
}
*/


searchBar.addEventListener('keyup', filterSearchBar);











