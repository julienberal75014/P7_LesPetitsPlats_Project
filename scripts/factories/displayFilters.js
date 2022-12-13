let tabIngredients = [];
let tabUstensiles = [];
let tabAppareils = [];


async function displayFilters(filtersList) {
    if (filtersList === undefined) {
        filtersList = await fetchRecipes()
    }
    const filters = filtersList
    const filterBlue = document.querySelector('.blue')
    const filterGreen = document.querySelector('.green')
    const filterRed = document.querySelector('.red')

    filtersList.forEach((filter) => {
        filter.ingredients.forEach((ingredient) => {
            tabIngredients.push(ingredient.ingredient)
        })
        filter.ustensils.forEach((ustensil) => {
            tabUstensiles.push(ustensil)
        })
        tabAppareils.push(filter.appliance)
    })

    tabIngredients = [...new Set(tabIngredients)].sort()
    tabUstensiles = [...new Set(tabUstensiles)].sort()
    tabAppareils = [...new Set(tabAppareils)].sort()

    let displayIngredients = tabIngredients.map((ingredient) => {
        return `<li><a class="dropdown-item" href="#">${ingredient}</a></li>`
    })
    displayIngredients = displayIngredients.join('')
    filterBlue.innerHTML = displayIngredients

    let displayAppareils = tabAppareils.map((appareil) => {
        return `<li><a class="dropdown-item" href="#">${appareil}</a></li>`
    }
    )
    displayAppareils = displayAppareils.join('')
    filterGreen.innerHTML = displayAppareils

    let displayUstensiles = tabUstensiles.map((ustensil) => {
        return `<li><a class="dropdown-item" href="#">${ustensil}</a></li>`
    }
    )
    displayUstensiles = displayUstensiles.join('')
    filterRed.innerHTML = displayUstensiles

}