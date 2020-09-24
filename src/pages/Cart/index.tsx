import React, {useContext} from "react";

import CartContext from "../../Context/CartContext";

import {ScrollView} from "react-native";

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
    SubTotal,
    FooterCartContainer,
    TotalText,
    TotalPrice,
    Button,
    ButtonLabel
} from "./styles";

function Cart(){
    const {cartItems, addToCart, removeToCart} = useContext(CartContext);

    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <CartContainer>
                    {cartItems.map(item => (
                        <Item key={item.id}>
                            <ItemContainer>
                                <Image source={{uri: `${item.image}`}}/>
                                <InfoContainer>
                                    <ItemText>{item.title}</ItemText>
                                    <ItemPrice>{item.priceFormatted}</ItemPrice>
                                </InfoContainer>
                                <BorderlessButton>
                                    <Icon name="delete-forever" color="#7159c1" size={30}/>
                                </BorderlessButton>
                            </ItemContainer>
                            <FooterItem>
                                <Quant>
                                    <BorderlessButton onPress={() => removeToCart(item)}>
                                        <Icon
                                            name="remove-circle-outline"
                                            color="#7159c1"
                                            size={30}
                                        />
                                    </BorderlessButton>
                                    <QuantItem>{item.amount}</QuantItem>
                                    <BorderlessButton onPress={() => addToCart(item)}>
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
                    ))}
                    <FooterCartContainer>
                        <TotalText>TOTAL</TotalText>
                        <TotalPrice>R$567,99</TotalPrice>
                        <Button>
                            <ButtonLabel>FINALIZAR PEDIDO</ButtonLabel>
                        </Button>
                    </FooterCartContainer>
                </CartContainer>
            </ScrollView>
        </Container>
    );
}

export default Cart;