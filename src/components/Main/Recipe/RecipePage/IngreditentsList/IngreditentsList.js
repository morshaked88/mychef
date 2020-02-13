import React from 'react';
import styled from 'styled-components';
import { useData } from '../../../../../Store/RecipeProvider';
import IngredientCard from './IngredientCard';

const IngreditentsList = () => {
    const { recipe } = useData();

    return (
        <Box>
            <IngredientCard list={recipe[0].extendedIngredients} />
        </Box>
    )
};

export default IngreditentsList;

const Box = styled.div`
@media only screen and (min-width: 768px) {
    margin-bottom: 100px;
}
`;