import React from 'react';
import styled from 'styled-components';

import { useData } from '../../../Store/RecipeProvider';
import Card from './Card/Card';

const List = () => {
    const { recipes } = useData();

    const show = (recipes.map(item => {

        return (
            <Card item={item} key={item.id} />
        )
    }))

    return (
        <Box>
            <Results>
                {recipes.length} recipes found
            </Results>
            <UL>
                {show}
            </UL>

        </Box>
    )
};

export default List;

const Box = styled.div`
height: 100%;
width: 100%;
`;

const Results = styled.p`
margin-top: 10px;

@media only screen and (min-width: 768px) {
    font-size: 25px;
}
`;

const UL = styled.ul`
margin-top: 15px;
list-style: none;
`;