import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useData } from '../../../Store/RecipeProvider';

const ShopList = () => {

    const { shoppingList, addToShopping } = useData();

    const deviceWidth = window.innerWidth >= 768;

    const trashStyle = {
        fontSize: `${deviceWidth ? '40px' : '25px'}`,
        cursor: 'pointer'
    }

    const removeItem = (name) => {
        const newList = shoppingList.filter(item => {
            if (item.name !== name) {
                return item;
            }
        })

        addToShopping(newList)
    }

    return (
        <Box>
            <HeadBox>
                <Title>Shopping List</Title>
            </HeadBox>
            <ItemBox>
                {shoppingList.map(item => (
                    <Card key={item.name} >
                        <ImageBox>
                            <Img src={item.image} alt='item image' />
                        </ImageBox>
                        <TextBox>
                            <Text>{item.name}</Text>
                            <TrashBox onClick={() => removeItem(item.name)}>
                                <FontAwesomeIcon icon={faTrashAlt} style={trashStyle} />
                            </TrashBox>
                        </TextBox>
                    </Card>
                ))}
            </ItemBox>
        </Box>
    )
};

export default ShopList;

const TrashBox = styled.div`
height: 100%;
width: 20%;
display: flex;
align-items: center;
justify-content: center;
`;

const Box = styled.div`
width: 100%;
height: 100%;
padding: 0 3%;

@media only screen and (min-width: 768px) {
    padding: 0 20%;
}
`;

const TextBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 80%;
margin-left: 10px;
`;

const ImageBox = styled.div`
height: 100%;
width: 20%;
`;

const Text = styled.h4`

@media only screen and (min-width: 768px) {
    font-size: 30px;
}
`;

const HeadBox = styled.div`
height: auto;
width: 100%;
text-align: center;
margin-top: 10px;
margin-bottom: 30px;

@media only screen and (min-width: 768px) {
    margin-top:80px;
    margin-bottom: 50px;
}
`;

const ItemBox = styled.div`
width: 100%;
height: auto;
border-top: 1px solid black;
border-left: 1px solid black;
border-right: 1px solid black;
margin-top: 10px;
background-color: rgba(238, 238, 238, 0.8);
display: flex;
flex-direction: column;
border-radius: 5px;
`;

const Title = styled.h1`

&:after{
    content: " ";
    display: block;
    height: 3px;
    width: 100px;
    background-color: black;
    margin: 0 auto;
    margin-top: 10px;
}

@media only screen and (min-width: 768px) {
    font-size:60px;

    &:after{
    width: 200px;
}
}
`;

const Card = styled.div`
width: 100%;
height: auto;
border-bottom: 1px solid black;
padding: 5px 10px;
display: flex;
`;

const Img = styled.img`
height: 50px;
width: 100%;

@media only screen and (min-width: 768px) {
    height: 100px;
    width: 50%;
}
`;