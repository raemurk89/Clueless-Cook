import axios from "axios";

async function fetchData2( searchQuery ){
    try {

        const response = await axios.get('https://api.spoonacular.com/recipes/findByIngredients', {
            params: {
                // apiKey: '5939b68221ab46389a8de2fe26529ec9',
                apiKey: 'ae874aeab97e4ab5b2fe382c263415ed',
                ingredients: searchQuery,
                number: 3
            },
            headers: {
                "Content-Type": "application/json"
            }
        })

        console.log( response.data );
        createResults( response.data );


    } catch ( e ) {
        console.error( e );
    }

}


const inputFridge = document.getElementById('search-bar-fridge');
const submitFridge = document.getElementById('submit-bar');

submitFridge.addEventListener('submit', ( e ) => {

    e.preventDefault();

    fetchData2( inputFridge.value ).then();

})


function createResults( recipes ){

    const resultsRecipesFridge = document.getElementById('list-of-recipes');

    resultsRecipesFridge.innerHTML = recipes.map((recipe) => {
        return `
        <h2>${recipe.title}</h2>
        <img src="${recipe.image}" alt="">
        `
    })
}

export default fetchData2;

