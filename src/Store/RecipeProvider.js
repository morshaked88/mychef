import React, { useEffect, useState, useContext, createContext } from 'react';
import * as searchRecipe from '../services/RecipeData';

const list = [
    {
        "id": 548180,
        "title": "Italian Sausage Tortellini Soup",
        "readyInMinutes": 40,
        "servings": 6,
        "image": "Italian-Sausage-Tortellini-Soup-548180.jpg",
        "imageUrls": [
            "Italian-Sausage-Tortellini-Soup-548180.jpg"
        ]
    },
    {
        "id": 507501,
        "title": "Creamy Mushroom-Fontina Pasta",
        "readyInMinutes": 45,
        "servings": 4,
        "image": "Creamy-Mushroom-Fontina-Pasta-507501.jpg",
        "imageUrls": [
            "Creamy-Mushroom-Fontina-Pasta-507501.jpg"
        ]
    },
    {
        "id": 548458,
        "title": "Creamy Tomato Tortellini Soup",
        "readyInMinutes": 35,
        "servings": 6,
        "image": "Creamy-Tomato-Tortellini-Soup-548458.jpg",
        "imageUrls": [
            "Creamy-Tomato-Tortellini-Soup-548458.jpg"
        ]
    },
    {
        "id": 628008,
        "title": "Bucatini with Butter-Roasted Tomato Sauce",
        "readyInMinutes": 45,
        "servings": 4,
        "image": "Bucatini-with-Butter-Roasted-Tomato-Sauce-628008.jpg",
        "imageUrls": [
            "Bucatini-with-Butter-Roasted-Tomato-Sauce-628008.jpg"
        ]
    },
    {
        "id": 757883,
        "title": "Spaghetti with Lemon and Toasted Walnuts",
        "readyInMinutes": 45,
        "servings": 8,
        "image": "spaghetti-with-lemon-and-toasted-walnuts-757883.jpg",
        "imageUrls": [
            "spaghetti-with-lemon-and-toasted-walnuts-757883.jpg"
        ]
    },
    {
        "id": 248949,
        "title": "Gnocchi Poutine with Short Rib Ragu and Gremolatta",
        "readyInMinutes": 15,
        "servings": 1,
        "image": "Gnocchi-Poutine-with-Short-Rib-Ragu-and-Gremolatta-248949.jpg",
        "imageUrls": [
            "Gnocchi-Poutine-with-Short-Rib-Ragu-and-Gremolatta-248949.jpg"
        ]
    },
    {
        "id": 494968,
        "title": "One-Pot Pasta Primavera",
        "readyInMinutes": 20,
        "servings": 6,
        "image": "One-Pot-Pasta-Primavera-494968.jpg",
        "imageUrls": [
            "One-Pot-Pasta-Primavera-494968.jpg"
        ]
    },
    {
        "id": 535914,
        "title": "Threaded Spaghetti Hot Dog Bites with Homemade Marinara Sauce",
        "readyInMinutes": 60,
        "servings": 4,
        "image": "Threaded-Spaghetti-Hot-Dog-Bites-with-Homemade-Marinara-Sauce-535914.jpg",
        "imageUrls": [
            "Threaded-Spaghetti-Hot-Dog-Bites-with-Homemade-Marinara-Sauce-535914.jpg"
        ]
    },
    {
        "id": 934810,
        "title": "One Pot Creamy Sun Dried Tomato Pasta",
        "readyInMinutes": 30,
        "servings": 4,
        "image": "one-pot-creamy-sun-dried-tomato-pasta-934810.jpg",
        "imageUrls": [
            "one-pot-creamy-sun-dried-tomato-pasta-934810.jpg"
        ]
    },
    {
        "id": 695678,
        "title": "No-Bake Macaroni & Cheese",
        "readyInMinutes": 25,
        "servings": 4,
        "image": "no-bake-macaroni-cheese-695678.jpg",
        "imageUrls": [
            "no-bake-macaroni-cheese-695678.jpg"
        ]
    }
]

const RecipeContext = createContext();
const { Provider } = RecipeContext;

const useData = () => {
    const context = useContext(RecipeContext);
    if (!context) {
        throw new Error('context must be used withing the provider')
    }
    return context;
}

const RecipeProvider = ({ children }) => {
    const [isFetching, setFetching] = useState(true);
    const [searchInput, setInput] = useState('');
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false);
    const [recipes, setRecipes] = useState(list);
    const [shoppingList, addToShopping] = useState([]);
    const [inputOnClick, setInputOnClick] = useState('');
    const [currentRecipe, setCurrentRecipe] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const data = await searchRecipe.RecipeData(searchInput);
            console.log(data)
            setFetching(false);
        }

        if (searchInput !== '') {
            getData();
        }
    }, [searchInput])

    const state = {
        isFetching,
        searchInput,
        error,
        open,
        recipes,
        shoppingList,
        inputOnClick,
        currentRecipe
    }

    const cb = {
        setFetching,
        setInput,
        setError,
        setOpen,
        setRecipes,
        addToShopping,
        setInputOnClick,
        setCurrentRecipe
    }

    return (
        <Provider value={{ ...state, ...cb }}>
            {children}
        </Provider>
    )
};

export { RecipeProvider, useData };