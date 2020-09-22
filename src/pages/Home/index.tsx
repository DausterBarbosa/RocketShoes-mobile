import React from "react";

import Icon from "react-native-vector-icons/MaterialIcons";

import {
    Container,
    Item,
    Image,
    ItemInfo,
    ItemName,
    ItemPrice,
    Button,
    ButtonCart,
    Quant,
    ButtonLabel
} from "./styles";

function Home(){
    return (
        <Container>
            <Item>
                <Image source={{uri: `https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&`}}/>
                <ItemInfo>
                    <ItemName>Tênis de caminhada leve e confortável.</ItemName>
                    <ItemPrice>R$ 122,00</ItemPrice>

                    <Button>
                        <ButtonCart>
                            <Icon name="add-shopping-cart" size={25} color="#FFF"/>
                            <Quant>1</Quant>
                        </ButtonCart>
                        <ButtonLabel>ADICIONAR</ButtonLabel>
                    </Button>
                </ItemInfo>
            </Item>
        </Container>
    );
}

export default Home;