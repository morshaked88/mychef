export const RecipeData = async (query) => {
    try {
        const res = await fetch(`https://api.spoonacular.com/recipes/search?query=${query}&number=10&apiKey=80fc19d55dd24b3189dc01f9a394beba`);
        return res.json();
    } catch (error) {
        console.log(error)
    }
}