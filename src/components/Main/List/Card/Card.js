import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { useData } from '../../../../Store/RecipeProvider';
import * as getInfo from '../../../../services/getRecipeInfo';

const Card = ({ item }) => {

    const { setCurrentRecipe, setFetching, currentRecipe, setRecipe, setRecipeFetching, recipeFetching, recipe } = useData();

    const obj = {
        ...item
    }

    const getRecipeData = async (obj) => {
        setCurrentRecipe(obj);
        setFetching(true);
    }

    console.log(recipe, currentRecipe)


    return (
        <Box onClick={() => getRecipeData(obj.id)}>
            <StyledLink to='/recipe'>
                <Img src={`https://webknox.com/recipeImages/${obj.image}`} />
                <Box2>
                    <Header>{obj.title}</Header>
                    <Second>Ready in: {obj.readyInMinutes} min</Second>
                </Box2>
            </StyledLink>
        </Box>
    )
};


export default Card;

const StyledLink = styled(Link)`
display: flex;
height: auto;
width: 100%;
box-sizing: border-box;
border-bottom: 1px solid #bab2b5;
padding: 5px;
align-items: center;
justify-content: center;
cursor: pointer;
text-decoration: none;
color: black;

&:nth-child(1) {
    border-top: 1px solid #bab2b5;
}

@media only screen and (min-width: 768px) {
    border: solid 1px #bab2b5;
    margin: 10px 0;
}
`;

const Box = styled.div`
/* display: flex;
height: auto;
width: 100%;
box-sizing: border-box;
border-bottom: 1px solid #bab2b5;
padding: 5px;
align-items: center;
justify-content: center;
cursor: pointer;

&:nth-child(1) {
    border-top: 1px solid #bab2b5;
}

@media only screen and (min-width: 768px) {
    border: solid 1px #bab2b5;
    margin: 10px 0;
} */
`;

const Box2 = styled.div`
width: 73%;
height: 100%;
`;

const Img = styled.img`
height: 90px;
width: 25%;
border-radius: 50%;

@media only screen and (min-width: 768px) {
    height: 200px;
    border-radius: 0;
}
`;

const Header = styled.h2`
font-size: 20px;

@media only screen and (min-width: 768px) {
    font-size: 40px;
}
`;

const Second = styled.h4`

@media only screen and (min-width: 768px) {
    font-size: 24px;
}
`;
