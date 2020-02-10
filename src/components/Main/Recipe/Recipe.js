import React from 'react';
import styled from 'styled-components';
import { useData } from '../../../Store/RecipeProvider';


const Recipe = () => {
    const { currentRecipe } = useData();


    return (
        <Box>
            <HeadBox>

            </HeadBox>
        </Box>
    )
};

export default Recipe;

const Box = styled.div`
width: 100%;
height: 100%;
padding: 0 10px;
`;

const HeadBox = styled.div``;