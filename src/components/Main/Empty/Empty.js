import React from 'react';
import styled from 'styled-components'

const Empty = () => (
    <Box>
        <Header>
            The world's largest repository of recipes
        </Header>
    </Box>
);

export default Empty;

const Box = styled.div`
width: 100%;
height: 100%;
`;

const Header = styled.h1`
margin-top: 10px;
`;