import React from 'react';
import styled from 'styled-components';
import { useData } from '../../../../../Store/RecipeProvider';

const InstructionsList = () => {
    const { recipe } = useData();

    return (
        <Box>
            {recipe[0].analyzedInstructions[0].steps.map(item => {

                return (
                    <Ingredient key={item.number} style={{ backgroundColor: `${item.number % 2 === 0 ? '#ebebeb' : '#c9c9c9'}` }}>
                        {item.number}. {item.step}
                    </Ingredient>
                )
            })}
        </Box>
    )
};

export default InstructionsList;

const Box = styled.div`
width: 100%;
height: auto;
`;

const Ingredient = styled.div`
display: flex;
align-items: center;
font-size: 15px;
padding: 3px 0;
`;