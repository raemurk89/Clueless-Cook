import axios from "axios";

async function getVideos(searchQuery) {
    try {
        const outcomeVideos = await axios.get('https://api.spoonacular.com/food/videos/search', {
            params: {
                apiKey: '',
                query: searchQuery
            },
            headers: {
                "Content-Type": "application/json"
            }
        })

        console.log(outcomeVideos.data);

    } catch (e) {
        console.error(e);
    }
}




export default getVideos;