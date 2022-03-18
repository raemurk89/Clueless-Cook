function getRandomRec(recipes) {
    const randomBox = document.getElementById("random");

    randomBox.innerHTML = recipes.map((recipe) => {
        return `
        <img src="${recipe.image}" alt="">
        <h3>${recipe.title}</h3>
        `;
    } ).join("");
}

export default getRandomRec;


// <li>${recipe.instructions}</li>
