import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { useData } from '../../../Store/RecipeProvider';

const Search = () => {
    const { setOpen, open, searchInput, setInput } = useData();

    const iconStyle = {
        fontSize: '20px',
        margin: '0 20px',
        color: '#EEE2DC'
    }

    const getInput = (e) => {
        if (e.charCode === 13) {
            setInput(e.target.value);
            setOpen(false);
        }
    }


    return (
        <Box>
            <Input type='text' placeholder='Search for Recipe' autoFocus onKeyPress={(e) => getInput(e)} />
            <FontAwesomeIcon icon={faTimes} style={iconStyle} onClick={() => setOpen(!open)} />
        </Box>
    )
};

export default Search;

const Box = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: #123C69;
`;

const Input = styled.input`
background-color: #123C69;
height: 100%;
width: 100%;
border: none;
padding-left:15px;
-webkit-tap-highlight-color: transparent;
font-size: 35px;
color: '#EEE2DC';

&::placeholder{
    color: '#EEE2DC';
    font-size: 20px;
}

&:focus{
        outline: none;
    } 
`;