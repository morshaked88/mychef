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

    const addToCart = (e, item) => {
        const newIngredient = {
            name: item.name,
            image: `https://spoonacular.com/cdn/ingredients_100x100/${item.image}`
        }
        if (shoppingList.includes(newIngredient)) {
            console.log('double')
        } else {
            addToShopping([...shoppingList, newIngredient])
        }
    }
    // addToShopping([...shoppingList, { name: item.name, image: `https://spoonacular.com/cdn/ingredients_100x100/${item.image}` }])

    console.log(shoppingList)

    return (
        <Box>
            {list.map(item => {

                return (
                    <Card key={item.id} onClick={(e) => addToCart(e, item)}><FontAwesomeIcon icon={faCircle} style={circleStyle} />{item.original}</Card>
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

@media only screen and (min-width: 768px) {
    font-size: 22px;
    margin: 15px 0;
    cursor: pointer;
    transition: all 0.5s;

    &:hover{
        color: #AC3B61;
        font-size: 24px;
    }
}
`;