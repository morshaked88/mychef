import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { useData } from '../../Store/RecipeProvider';

import Logo from './Logo/Logo';
import Search from './Search/SearchMobile';
import SearchDesktop from './Search/SearchDesktop';

const NavBar = () => {

    const { shoppingList, open, setOpen } = useData();

    const deviceWidth = window.innerWidth;

    const iconStyleS = {
        color: '#EEE2DC',
        height: '100%',
        fontSize: '30px',
        display: `${deviceWidth < 768 ? 'block' : 'none'}`
    }


    const iconStyleC = {
        color: '#EEE2DC',
        height: '100%',
        fontSize: '30px'
    }

    return (
        <Nav>
            {!open ?
                <Box>
                    <Box3>
                        <FontAwesomeIcon icon={faSearch} style={iconStyleS} onClick={() => setOpen(!open)} />
                    </Box3>
                    <Logo />
                    <SearchDesktop />
                    <Box2>
                        <FontAwesomeIcon icon={faShoppingCart} style={iconStyleC} />
                        <Span>x {shoppingList.length}</Span>
                    </Box2>
                </Box>
                :
                <Search />}

        </Nav>
    )
};

export default NavBar;

const Nav = styled.nav`
width: 100%;
height: 70px;
position: fixed;
`;

const Box = styled.div`
display: flex;
width: 100%;
height: 100%;
background-color: #123C69;
box-sizing: border-box;
padding: 2px 10px 2px 10px;
justify-content: space-between;
align-items: center;

/* tablets size */
@media only screen and (min-width: 600px) {}

/* Desktop size */
@media only screen and (min-width: 768px) {
    padding: 0 10%;
}
`;

const Box2 = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`;

const Box3 = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: center;


/* Desktop size */
@media only screen and (min-width: 768px) {
    display: none;
}
`;

const Span = styled.span`
color: #EEE2DC;
font-size: 16px;
margin-left: 3px;
`;

