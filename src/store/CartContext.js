import { createContext, useState } from 'react'

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const AddItem = (item) => {
        setCart((preItems) => [...preItems, item])
    }
    console.log(cart)
    
    return (
        <CartContext.Provider value={{cart, AddItem}}>{children}</CartContext.Provider>
    )
}

export default CartProvider
export {CartContext}