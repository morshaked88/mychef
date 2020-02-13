import React from 'react';
import styled from 'styled-components';

const EmptyList = () => (
    <Box>
        <Header>
            You have 0 items on your shopping list
        </Header>
    </Box>
);

export default EmptyList;

const Box = styled.div`
width: 100%;
height: 100%;
`;

const Header = styled.h1`
margin-top: 10px;
text-align: center;
`;