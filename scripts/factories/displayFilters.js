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
    selectIngredients()

    let displayAppareils = appliancesArray.map((appareil) => {
        return `<li><a class="dropdown-item" href="#">${appareil}</a></li>`
    }
    )
    displayAppareils = displayAppareils.join('')
    filterGreen.innerHTML = displayAppareils
    selectAppareils()

    let displayUstensiles = ustensilsArray.map((ustensil) => {
        return `<li><a class="dropdown-item" href="#">${ustensil}</a></li>`
    }
    )
    displayUstensiles = displayUstensiles.join('')
    filterRed.innerHTML = displayUstensiles
    selectUstensils()

}


function showInput() {
    const first = document.querySelector('.first_button')
    const second = document.querySelector('.second_button')
    const third = document.querySelector('.third_button')

    first.addEventListener('click', () => {
        const btn_primary = document.querySelector('.btn-primary')
        const input_group1 = document.querySelector('.input_group1')
        const ingredientButton = document.querySelector('.ingredients_input')
        if (btn_primary.style.display === 'none') {
            btn_primary.style.display = 'block'
            input_group1.style.display = 'none'
        } else {
            btn_primary.style.display = 'none'
            input_group1.style.display = 'flex'
            ingredientButton.select()
        }
    })

    second.addEventListener('click', () => {
        const btn_success = document.querySelector('.btn-success')
        const input_group2 = document.querySelector('.input_group2')
        const appliance = document.querySelector('.appliances_input')
        if (btn_success.style.display === 'none') {
            btn_success.style.display = 'block'
            input_group2.style.display = 'none'
        } else {
            btn_success.style.display = 'none'
            input_group2.style.display = 'flex'
            appliance.select()
        }
    })

    third.addEventListener('click', () => {
        const btn_danger = document.querySelector('.btn-danger')
        const input_group3 = document.querySelector('.input_group3')
        const ustensil = document.querySelector('.ustensils_input')
        if (btn_danger.style.display === 'none') {
            btn_danger.style.display = 'block'
            input_group3.style.display = 'none'
        } else {
            btn_danger.style.display = 'none'
            input_group3.style.display = 'flex'
            ustensil.select()
        }
    })
}

showInput()

function filterInput() {
    const ingredientButton = document.querySelector('.ingredients_input')
    const appliance = document.querySelector('.appliances_input')
    const ustensil = document.querySelector('.ustensils_input')

    ingredientButton.addEventListener('input', () => {
        const filterBlue = document.querySelector('.blue')
        const filterBlueArray = Array.from(filterBlue.children)
        filterBlueArray.forEach((filter) => {
            if (filter.innerText.toLowerCase().includes(ingredientButton.value.toLowerCase())) {
                filter.style.display = 'block'
            } else {
                filter.style.display = 'none'
            }
        })
    })

    appliance.addEventListener('keyup', () => {
        const filterGreen = document.querySelector('.green')
        const filterGreenArray = Array.from(filterGreen.children)
        filterGreenArray.forEach((filter) => {
            if (filter.innerText.toLowerCase().includes(appliance.value.toLowerCase())) {
                filter.style.display = 'block'
            } else {
                filter.style.display = 'none'
            }
        })
    })

    ustensil.addEventListener('keyup', () => {
        const filterRed = document.querySelector('.red')
        const filterRedArray = Array.from(filterRed.children)
        filterRedArray.forEach((filter) => {
            if (filter.innerText.toLowerCase().includes(ustensil.value.toLowerCase())) {
                filter.style.display = 'block'
            } else {
                filter.style.display = 'none'
            }
        })
    })
}

filterInput()













