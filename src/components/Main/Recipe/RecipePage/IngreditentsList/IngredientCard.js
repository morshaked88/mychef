import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { useData } from '../../../../../Store/RecipeProvider';


const IngredientCard = ({ list }) => {

    const { addToShopping, shoppingList } = useData();

    const circleStyle = {
        fontSize: '5px',
        marginRight: '5px'
    }

    console.log(shoppingList)

    return (
        <Box>
            {list.map(item => {

                return (
                    <Card key={item.id} onClick={() => addToShopping([...shoppingList, { name: item.name, image: `https://spoonacular.com/cdn/ingredients_100x100/${item.image}` }])}><FontAwesomeIcon icon={faCircle} style={circleStyle} />{item.original}</Card>
                )
            })}
        </Box>
    )
};

export default IngredientCard;

const Box = styled.ul`
width: 100%;
height: auto;
`;

const Card = styled.div`
margin: 7px 0;
display: flex;
align-items: center;
font-size: 15px;
`;