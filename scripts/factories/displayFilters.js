let ingredientsArray = [];
let ustensilsArray = [];
let appliancesArray = [];
const filterBlue = document.querySelector('.blue')
const filterGreen = document.querySelector('.green')
const filterRed = document.querySelector('.red')
const btn_primary = document.querySelector('.btn-primary')
const input_group1 = document.querySelector('.input_group1')
const btn_success = document.querySelector('.btn-success')
const input_group2 = document.querySelector('.input_group2')
const btn_danger = document.querySelector('.btn-danger')
const input_group3 = document.querySelector('.input_group3')
const ingredientButton = document.querySelector('.ingredients_input')
const appliance = document.querySelector('.appliances_input')
const ustensil = document.querySelector('.ustensils_input')


async function displayFilters(filtersList) {
    if (filtersList === undefined) {
        filtersList = await fetchRecipes()
    }

    const ingredients = filtersList.map((recipe) => recipe.ingredients.map((ingredient) => ingredient.ingredient))
    const ingredientsArray = ingredients.flat()
    const ingredientsSet = new Set(ingredientsArray)
    const ingredientsList = [...ingredientsSet].sort()

    const appliances = filtersList.map((recipe) => recipe.appliance)
    const appliancesSet = new Set(appliances)
    const appliancesList = [...appliancesSet].sort()

    const ustensils = filtersList.map((recipe) => recipe.ustensils)
    const ustensilsArray = ustensils.flat()
    const ustensilsSet = new Set(ustensilsArray)
    const ustensilsList = [...ustensilsSet].sort()

    const ingredientsListHTML = ingredientsList.map((ingredient) => `<li><a class="dropdown-item" href="#">${ingredient}</a></li>`).join('')
    const appliancesListHTML = appliancesList.map((appliance) => `<li><a class="dropdown-item" href="#">${appliance}</a></li>`).join('')
    const ustensilsListHTML = ustensilsList.map((ustensil) => `<li><a class="dropdown-item" href="#">${ustensil}</a></li>`).join('')
    filterBlue.innerHTML = ingredientsListHTML
    filterGreen.innerHTML = appliancesListHTML
    filterRed.innerHTML = ustensilsListHTML

    selectItems()
}

function showInput() {
    const first = document.querySelector('.first_button')
    const second = document.querySelector('.second_button')
    const third = document.querySelector('.third_button')


    first.addEventListener('click', () => {
        const ingredient_list = document.querySelector('.blue')
        if (btn_primary.style.display === 'none') {
            btn_primary.style.display = 'block'
            input_group1.style.display = 'none'
            ingredient_list.style.display = 'none'
        } else {
            btn_primary.style.display = 'none'
            input_group1.style.display = 'flex'
            ingredient_list.style.display = 'grid'
            ingredientButton.select()
        }
    })

    second.addEventListener('click', () => {
        const appliance_list = document.querySelector('.green')
        if (btn_success.style.display === 'none') {
            btn_success.style.display = 'block'
            input_group2.style.display = 'none'
            appliance_list.style.display = 'none'
        } else {
            btn_success.style.display = 'none'
            input_group2.style.display = 'flex'
            appliance_list.style.display = 'grid'
            appliance.select()
        }
    })

    third.addEventListener('click', () => {
        const ustensil_list = document.querySelector('.red')
        if (btn_danger.style.display === 'none') {
            btn_danger.style.display = 'block'
            input_group3.style.display = 'none'
            ustensil_list.style.display = 'none'
        } else {
            btn_danger.style.display = 'none'
            input_group3.style.display = 'flex'
            ustensil_list.style.display = 'grid'
            ustensil.select()
        }
    })
}

showInput()

async function filterInput() {

    ingredientButton.addEventListener('input', () => {
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


document.addEventListener('click', function handleClickOutsideList(event) {

    if (event.target.closest('.first_button')) {
        return
    } else if (event.target.closest('.second_button')) {
        return
    } else if (event.target.closest('.third_button')) {
        return
    } else if (event.target.closest('.input_group1')) {
        return
    } else if (event.target.closest('.input_group2')) {
        return
    } else if (event.target.closest('.input_group3')) {
        return
    } else {
        btn_primary.style.display = 'block'
        input_group1.style.display = 'none'
        filterBlue.style.display = 'none'
        ingredientButton.value = ''
        btn_success.style.display = 'block'
        input_group2.style.display = 'none'
        filterGreen.style.display = 'none'
        appliance.value = ''
        btn_danger.style.display = 'block'
        input_group3.style.display = 'none'
        filterRed.style.display = 'none'
        ustensil.value = ''
    }

})









