import axios from "axios";
import getRandomRec from "./Function Random Recipe";


async function fetchRandomRecipe(){
    try {

        const outcomeRandom = await axios.get('https://api.spoonacular.com/recipes/random', {
            params: {
                apiKey: '5939b68221ab46389a8de2fe26529ec9'
            },
            headers: {
                "Content-Type": "application/json"
            }
        })

        console.log( outcomeRandom.data );
        const {recipes: responseData} = outcomeRandom.data;
        getRandomRec(responseData);



    } catch ( e ) {
        console.error( e );
    }

}



export default fetchRandomRecipe;


