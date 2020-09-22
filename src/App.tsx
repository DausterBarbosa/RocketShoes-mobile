import React from "react";

import {StatusBar} from "react-native";

import {NavigationContainer} from "@react-navigation/native";

import Header from "./components/Header";

import Routes from "./routes";

function App(){
    return (
        <NavigationContainer>
            <StatusBar backgroundColor={"#191920"}/>
            <Header/>
            <Routes/>
        </NavigationContainer>
    );
}

export default App;