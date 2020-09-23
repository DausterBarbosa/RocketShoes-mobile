import React from "react";

import {StackNavigationProp} from "@react-navigation/stack";

import {TouchableOpacity} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

import LogoImage from "../../assets/logo.png";

import {HeaderContainer, Logo, CartInfo, CartQuant} from "./styles";

interface HeaderProps{
    navigation: StackNavigationProp<Record<string, object | undefined>, string>
}

const Header:React.FC<HeaderProps> = ({navigation}) =>{
    return (
        <HeaderContainer>
            <Logo source={LogoImage}/>
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                <CartInfo>
                    <Icon name="shopping-basket" size={25} color="#FFF"/>
                    <CartQuant>0</CartQuant>
                </CartInfo>
            </TouchableOpacity>
        </HeaderContainer>
    );
}

export default Header;