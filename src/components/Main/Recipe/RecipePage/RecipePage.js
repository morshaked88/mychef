import React from 'react';
import styled from 'styled-components';
import { useData } from '../../../../Store/RecipeProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import IngreditentsList from './IngreditentsList/IngreditentsList';
import InstructionsList from './InstructionsList/InstructionsList';
import Loader from '../../../Loader/Loader';


const RecipePage = () => {
    const { recipe, recipeFetching } = useData();

    const upStyle = {
        color: '#2ecc71',
        fontSize: '19px'
    }

    const downStyle = {
        color: '#e74c3c',
        fontSize: '18px'
    }

    const up = <FontAwesomeIcon icon={faThumbsUp} style={upStyle} />
    const down = <FontAwesomeIcon icon={faThumbsDown} style={downStyle} />

    return (
        <Box>
            {recipeFetching ? <Loader /> :
                <>
                    <BoxHeader>
                        <Img src={recipe[0].image} />
                        <Header>{recipe[0].title}</Header>
                    </BoxHeader>
                    <BoxHeader>
                        <Text>Ready in: {recipe[0].readyInMinutes} min | Serving: {recipe[0].servings} diners</Text>
                    </BoxHeader>
                    <ScoreBox>
                        <Box2>
                            <div>
                                <Name>
                                    Vegan
                    </Name>
                            </div>
                            <Score>
                                {recipe[0].vegan ? up : down}
                            </Score>
                        </Box2>
                        <Box2>
                            <div>
                                <Name>
                                    Gluten Free
                    </Name>
                            </div>
                            <Score>
                                {recipe[0].glutenFree ? up : down}
                            </Score>
                        </Box2>
                        <Box2>
                            <div>
                                <Name>
                                    Cheap
                    </Name>
                            </div>
                            <Score>
                                {recipe[0].cheap ? up : down}
                            </Score>
                        </Box2>
                        <Box2>
                            <div>
                                <Name>
                                    Healthy
                    </Name>
                            </div>
                            <Score>
                                {recipe[0].healthScore}/100
                </Score>
                        </Box2>
                        <Box2>
                            <div>
                                <Name>
                                    MyChef Score
                    </Name>
                            </div>
                            <Score>
                                {recipe[0].spoonacularScore}%
                </Score>
                        </Box2>
                    </ScoreBox>
                    <Ingredients>
                        <Title>Ingredients</Title>
                        <p style={{ color: '#AC3B61' }}>Click the ingredient to add to your shopping list</p>
                        <IngreditentsList />
                    </Ingredients>
                    <Instructions>
                        <Title>Instructions</Title>
                        <InstructionsList />
                    </Instructions>
                </>}

        </Box>
    )
};

export default RecipePage;

const Box = styled.div`
height: 100%;
width: 100%;
`;

const BoxHeader = styled.div`
display: flex;
margin-top: 10px;
height: auto;
align-items: center;
justify-content: center;
`;

const Img = styled.img`
height: 100px;
width: 140px;
`;

const Header = styled.h1`
text-align: center;
margin-left: 10px;
font-size: 26px;
`;

const Text = styled.p`
font-size: 18px;
`;

const Box2 = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const Name = styled.h6`
font-size: 13px;
`;

const Title = styled.h2`
text-align: center;
font-size: 25px;

&:after{
    content: " ";
    display: block;
    height: 3px;
    width: 80px;
    background-color: black;
    margin: 5px auto 10px auto;
}
`;

const Score = styled.div`
margin-top: 2px;
`;

const ScoreBox = styled.div`
display: flex;
justify-content: space-around;
margin-top: 10px;
`;

const Ingredients = styled.div`
width: 100%;
height: auto;
margin-top: 10px;
`;

const Instructions = styled.div`
width: 100%;
height: auto;
margin-top: 10px;
`;
