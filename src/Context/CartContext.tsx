import React, {createContext, useState} from "react";

interface CartContextProps {
    addToCart(item:Product): void;
    removeToCart(item:Product): void;
    deleteToCart(item:Product): void;
    cartItems: Product[]
}

const CartContext = createContext<CartContextProps>({} as CartContextProps);

interface Product{
    id: number,
    title: string,
    price: number,
    image: string,
    priceFormatted?: string
    amount: number
}

export const Cart:React.FC = ({children}) => {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    function addToCart(item:Product){
        const product = cartItems.findIndex(product => product.id === item.id);
        
        if(product !== -1){
            cartItems[product].amount += 1;

            setCartItems([...cartItems]);
        }else{
            setCartItems([...cartItems, {...item, amount: 1}])
        }
    }

    function removeToCart(item:Product){
        const product = cartItems.findIndex(product => product.id === item.id);

        if(cartItems[product].amount !== 1){
            cartItems[product].amount -= 1;

            setCartItems([...cartItems]);
        }
    }

    function deleteToCart(item:Product){
        const product = cartItems.findIndex(product => product.id === item.id);

        cartItems.splice(product, 1);

        setCartItems([...cartItems]);
    }

    return (
        <CartContext.Provider value={{addToCart, removeToCart, deleteToCart, cartItems}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;