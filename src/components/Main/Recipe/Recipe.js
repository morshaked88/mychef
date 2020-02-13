import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useData } from '../../../Store/RecipeProvider';
import Loader from '../../Loader/Loader';
import RecipePage from './RecipePage/RecipePage';
import * as getInfo from '../../../services/getRecipeInfo';

const Recipe = () => {
    const { recipeFetching, currentRecipe, recipe, setRecipe, setRecipeFetching } = useData();


    useEffect(() => {

        const info = async () => {
            const data = await getInfo.RecipeData(currentRecipe);
            setRecipe(data);
            setRecipeFetching(!recipeFetching);
        }

        info();

        return () => {
            setRecipeFetching(!recipeFetching);
        }
    }, [])

    return (
        <Box>
            <HeadBox>
                {!recipeFetching ? <RecipePage /> : <Loader />}
            </HeadBox>
        </Box>
    )
};


export default Recipe;

const Box = styled.div`
width: 100%;
height: 100%;
padding: 0 10px;
margin-top: 70px;
`;

const HeadBox = styled.div``;