import axios from "axios";

async function getCuisine(cuisine) {
    try {
        const outcomeCuisine = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
            params: {
                apiKey: '5939b68221ab46389a8de2fe26529ec9',
                number: 5,
                cuisine: cuisine
            },
            headers: {
                "Content-Type": "application/json"
            }
        })

        console.log(outcomeCuisine.data)
        cuisineOptions(outcomeCuisine.data)

    } catch (e) {
        console.error(e);
    }
}

getCuisine('french').then();



function cuisineOptions(recipes) {
    const middleEastern = document.getElementById('meastern-options');

    middleEastern.innerHTML = recipes.map((recipe) => {
        return `
        <h2>${recipe.title}</h>
        <img src="${recipe.image}" alt"${recipe.title}">
        `
    }) .join();
}

export default getCuisine;