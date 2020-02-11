import React from 'react';
import styled from 'styled-components';

import { useData } from '../../Store/RecipeProvider';
import Empty from './Empty/Empty';
import List from './List/List';
import Loader from '../Loader/Loader';

const Main = () => {

    const { isFetching } = useData();


    return (
        <Box>
            {isFetching ? <Empty /> : <List />}
        </Box>
    )
};

export default Main;

const Box = styled.div`
margin-top: 70px;
width: 100%;
height: 100%;
color: black;
display: flex;
justify-content: center;
text-align: center;
overflow: auto;

@media only screen and (min-width: 768px) {
    padding: 0 10%;
}
`;