import React, { useEffect, useState, useContext, createContext } from 'react';
import * as searchRecipe from '../services/RecipeData';

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
    const [recipes, setRecipes] = useState(null);
    const [shoppingList, addToShopping] = useState([]);
    const [inputOnClick, setInputOnClick] = useState('');
    const [currentRecipe, setCurrentRecipe] = useState(null);
    const [recipe, setRecipe] = useState(null);
    const [recipeFetching, setRecipeFetching] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const data = await searchRecipe.RecipeData(searchInput);
            setRecipes(data.results)
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
        currentRecipe,
        recipe,
        recipeFetching
    }

    const cb = {
        setFetching,
        setInput,
        setError,
        setOpen,
        setRecipes,
        addToShopping,
        setInputOnClick,
        setCurrentRecipe,
        setRecipe,
        setRecipeFetching
    }

    return (
        <Provider value={{ ...state, ...cb }}>
            {children}
        </Provider>
    )
};

export { RecipeProvider, useData };