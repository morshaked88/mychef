import React from 'react';
import styled from 'styled-components'

import siteLogo from '../../../assets/images/Logof.png';
import { Link } from 'react-router-dom';

const Logo = () => {

    return (
        <Box>
            <StyledLink to='/'>
                <IMG src={siteLogo} alt='logo' />
            </StyledLink>
        </Box>
    )
};

export default Logo;

const Box = styled.div`
height: 100%;
`;

const IMG = styled.img`
height: 100%;

`;

const StyledLink = styled(Link)`

`;