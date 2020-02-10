import React from 'react';
import styled from 'styled-components';

import { useData } from '../../../Store/RecipeProvider';

const SearchDesktop = () => {
    const { setInput, inputOnClick, setInputOnClick } = useData();

    const getInputE = (e) => {
        if (e.charCode === 13) {
            setInput(e.target.value);
        }
    }

    const getInputB = () => {
        setInput(inputOnClick);
    }

    return (
        <Box>
            <Input type='text' placeholder='Search for Recipe' onKeyPress={(e) => getInputE(e)} onChange={(e) => setInputOnClick(e.target.value)} />
            <Btn onClick={() => getInputB()}>search</Btn>
        </Box>
    )
};

export default SearchDesktop;

const Box = styled.div`
display: none;

@media only screen and (min-width: 768px) {
height: 100%;
width: 35%;
display: flex;
align-items: center;
justify-content: space-between;
}
`;

const Btn = styled.button`
height: 65%;
width: 20%;
border-radius: 6px;
border: none;
font-family: 'Fjalla One', sans-serif;
text-transform: uppercase;
font-size: 23px;
background-color: #edc7b7;
cursor: pointer;
transition: all 0.3s;

&:hover{
    transform: scale(1.05);
    font-size: 25px;
}
`;


const Input = styled.input`
display: none;

@media only screen and (min-width: 768px) {
    display: block;
    width: 75%;
    height: 70%;
    border-radius: 8px;
    border: none;
    padding: 15px;
    font-size: 25px;
    background-color: #EEE2DC;

    &::placeholder{
        font-size: 20px;
    }

    &:focus{
        outline: none;
    }
}
`;