import { createContext, useState } from 'react'

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const AddItem = (item) => {
        setCart((preItems) => {
            const existingItem = preItems.find((cartItem) => cartItem.id === item.id);
            
            if (existingItem) {
                return preItems.map((cartItem) =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
            } else {
                return [...preItems, { ...item, quantity: 1 }];
            }
        })
    };

    const ClearCart = () => {
        setCart([]);
    };
    
    const GetCartItemCount = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    };
    console.log(cart)

    return (
        <CartContext.Provider value={{cart, AddItem, ClearCart, GetCartItemCount}}>{children}</CartContext.Provider>
    )
}

export default CartProvider
export {CartContext}