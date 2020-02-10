export const RecipeData = async (query) => {
    try {
        const res = await fetch(`https://api.spoonacular.com/recipes/search?query=${query}&number=10&apiKey=148115adb3cd4c7cadaba8b13e93bbf9`);
        return res.json();
    } catch (error) {
        console.log(error)
    }
}