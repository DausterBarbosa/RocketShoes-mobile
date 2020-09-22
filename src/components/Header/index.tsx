import React from "react";

import {BorderlessButton} from "react-native-gesture-handler";

import Icon from "react-native-vector-icons/MaterialIcons";

import LogoImage from "../../assets/logo.png";

import {HeaderContainer, Logo, CartInfo, CartQuant} from "./styles";

function Header(){
    return (
        <HeaderContainer>
            <Logo source={LogoImage}/>
            <BorderlessButton onPress={() => {}}>
                <CartInfo>
                    <Icon name="shopping-basket" size={25} color="#FFF"/>
                    <CartQuant>0</CartQuant>
                </CartInfo>
            </BorderlessButton>
        </HeaderContainer>
    );
}

export default Header;