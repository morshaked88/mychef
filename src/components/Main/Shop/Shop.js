import React from 'react';
import styled from 'styled-components';
import { useData } from '../../../Store/RecipeProvider';
import EmptyList from '../Empty/EmptyList';
import ShopList from '../Shop/ShopList';

const Shop = () => {

    const { shoppingList } = useData();



    return (
        <Box>
            {shoppingList.length === 0 ? <EmptyList /> : <ShopList />}
        </Box>
    )
};

export default Shop;

const Box = styled.div`
width:100%;
height: 100%;
margin-top: 70px;
`;