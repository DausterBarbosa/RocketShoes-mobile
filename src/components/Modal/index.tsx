import React from "react";

import Icon from "react-native-vector-icons/MaterialIcons";

import {ModalContainer, ErrorText} from "./styles";

function Modal(){
    return (
        <ModalContainer>
            <Icon name="error" color="#FFF" size={30}/>
            <ErrorText>Quantidade solicitada fora de estoque.</ErrorText>
        </ModalContainer>
    );
}

export default Modal;