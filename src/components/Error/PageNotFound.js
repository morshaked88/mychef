import React from 'react';
import styled from 'styled-components'

const NotFound = () => (
    <Box>
        <Title>
            404 Page not found
        </Title>
    </Box>
);

export default NotFound;

const Box = styled.div`
width: 100%;
height: 100%;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
`;

const Title = styled.h1`
font-size: 40px;

@media only screen and (min-width: 768px) {
    font-size: 80px;
}
`;