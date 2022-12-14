let ingredientsArray = [];
let ustensilsArray = [];
let appliancesArray = [];


async function displayFilters(filtersList) {
    if (filtersList === undefined) {
        filtersList = await fetchRecipes()
    }

    const filterBlue = document.querySelector('.blue')
    const filterGreen = document.querySelector('.green')
    const filterRed = document.querySelector('.red')

    filtersList.forEach((filter) => {
        filter.ingredients.forEach((ingredient) => {
            ingredientsArray.push(ingredient.ingredient)
        })
        filter.ustensils.forEach((ustensil) => {
            ustensilsArray.push(ustensil)
        })
        appliancesArray.push(filter.appliance)
    })

    ingredientsArray = [...new Set(ingredientsArray)].sort()
    ustensilsArray = [...new Set(ustensilsArray)].sort()
    appliancesArray = [...new Set(appliancesArray)].sort()

    let displayIngredients = ingredientsArray.map((ingredient) => {
        return `<li><a class="dropdown-item" href="#">${ingredient}</a></li>`
    })
    displayIngredients = displayIngredients.join('')
    filterBlue.innerHTML = displayIngredients

    let displayAppareils = appliancesArray.map((appareil) => {
        return `<li><a class="dropdown-item" href="#">${appareil}</a></li>`
    }
    )
    displayAppareils = displayAppareils.join('')
    filterGreen.innerHTML = displayAppareils

    let displayUstensiles = ustensilsArray.map((ustensil) => {
        return `<li><a class="dropdown-item" href="#">${ustensil}</a></li>`
    }
    )
    displayUstensiles = displayUstensiles.join('')
    filterRed.innerHTML = displayUstensiles

}

const btn = document.querySelector('#button')
const arrow = document.querySelector('.arrow')

function showBtn() {

    if (btn.classList.contains('show')) {
        arrow.setAttribute('src', 'assets/arrow_up.svg')
    } else {
        arrow.setAttribute('src', 'assets/arrow_down.svg')
    }
}

function showInput() {
    const input = document.querySelector('.input')

    if (input.classList.active) {
        input.style.display = 'block'
    } else {
        input.style.display = 'none'
    }
}








