import React from "react";

import {BorderlessButton} from "react-native-gesture-handler";

import Icon from "react-native-vector-icons/MaterialIcons";

import {
    Container,
    CartContainer,
    ItemContainer,
    Image,
    InfoContainer,
    ItemText,
    ItemPrice,
    Item,
    FooterItem,
    Quant,
    QuantItem,
    SubTotal
} from "./styles";

function Cart(){
    return (
        <Container>
            <CartContainer>
                <Item>
                    <ItemContainer>
                        <Image source={{uri: "https://static.netshoes.com.br/produtos/tenis-venetto-casual-caminhada-leve-confortavel-masculino/06/EPL-0186-006/EPL-0186-006_zoom1.jpg?ts=1596040169&?ims=544xhttps://static.netshoes.com.br/produtos/tenis-venetto-casual-caminhada-leve-confortavel-masculino/06/EPL-0186-006/EPL-0186-006_zoom1.jpg?ts=1596040169&?ims=1088x"}}/>
                        <InfoContainer>
                            <ItemText>Tenis caminhada leve confortável</ItemText>
                            <ItemPrice>R$ 123,00</ItemPrice>
                        </InfoContainer>
                        <BorderlessButton>
                            <Icon name="delete-forever" color="#7159c1" size={30}/>
                        </BorderlessButton>
                    </ItemContainer>
                    <FooterItem>
                        <Quant>
                             <BorderlessButton>
                                <Icon
                                    name="remove-circle-outline"
                                    color="#7159c1"
                                    size={30}
                                />
                             </BorderlessButton>
                            <QuantItem>3</QuantItem>
                            <BorderlessButton>
                                <Icon
                                    name="add-circle-outline"
                                    color="#7159c1"
                                    size={30}
                                />
                             </BorderlessButton>
                        </Quant>
                        <SubTotal>R$555,90</SubTotal>
                    </FooterItem>
                </Item>
            </CartContainer>
        </Container>
    );
}

export default Cart;