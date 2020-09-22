import React from "react";

import {TouchableOpacity} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

import LogoImage from "../../assets/logo.png";

import {HeaderContainer, Logo, CartInfo, CartQuant} from "./styles";

function Header(){
    return (
        <HeaderContainer>
            <Logo source={LogoImage}/>
            <TouchableOpacity onPress={() => {}}>
                <CartInfo>
                    <Icon name="shopping-basket" size={25} color="#FFF"/>
                    <CartQuant>0</CartQuant>
                </CartInfo>
            </TouchableOpacity>
        </HeaderContainer>
    );
}

export default Header;