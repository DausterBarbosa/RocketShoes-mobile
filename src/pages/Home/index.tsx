import React, {useEffect, useState, useContext} from "react";

import CartContext from "../../Context/CartContext";

import {FlatList} from "react-native";

import Api from "../../services/Api";

import {formatPrice} from "../../utils/format";

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

interface Product{
    id: number,
    title: string,
    price: number,
    image: string,
    priceFormatted?: string
}

function Home(){
    const {addToCart} = useContext(CartContext);

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function getProducts(){
            const request = await Api.get("/products");

            const newProducts = request.data.map((product:Product) => ({
                ...product,
                priceFormatted: formatPrice(product.price)
            }));

            setProducts(newProducts);
        }

        getProducts();
    }, []);

    return (
        <Container>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={products}
                keyExtractor={item => String(item.id)}
                renderItem={({item}) => (
                    <Item>
                    <Image source={{uri: `${item.image}`}}/>
                    <ItemInfo>
                        <ItemName>{item.title}</ItemName>
                        <ItemPrice>{item.priceFormatted}</ItemPrice>

                        <Button onPress={() => addToCart(item)}>
                            <ButtonCart>
                                <Icon name="add-shopping-cart" size={25} color="#FFF"/>
                                <Quant>1</Quant>
                            </ButtonCart>
                            <ButtonLabel>ADICIONAR</ButtonLabel>
                        </Button>
                    </ItemInfo>
                </Item>
                )}
            />
        </Container>
    );
}

export default Home;