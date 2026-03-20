import { useContext, useState } from "react";
import logo from '../assets/logo.jpg'
import Button from "./UI/Button"
import {CartContext} from "../store/CartContext"
import Modal from "./UI/Modal"

const Header = () => {
    const {cart, GetCartItemCount, ClearCart} = useContext(CartContext)
    const [isCartOpen, setIsCartOpen] = useState(false)

    const HandleCartClick = () => {
        setIsCartOpen(!isCartOpen)
    }
    
    const HandleCheckout = () => {
        alert("Order is placed!")
        ClearCart();
        setIsCartOpen(false);
    }

    const HandleClear = () => {
        ClearCart()
        setIsCartOpen(false)
    }
    
    const TotalSum = cart.reduce((total, item) => {
        return total + parseFloat(item.price) * item.quantity
    }, 0)

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
                <Button textOnly={true} onClick={HandleCartClick}>Cart({GetCartItemCount()})</Button>
                <Modal></Modal>
            </nav>
            {isCartOpen && (
                <Modal isOpen={isCartOpen}>
                    <h2>Your cart</h2>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                {item.name} - {item.quantity}
                            </li>))}
                    </ul>
                    <div className="cart-total">
                        <strong>Total: {TotalSum.toFixed(2)}€</strong>
                    </div>
                    <div className="modal-actions">                       
                        <Button onClick={HandleCartClick} textOnly={true}>Close</Button>
                        <Button onClick={HandleClear}>Clear</Button>
                        <Button onClick={HandleCheckout}>Checkout</Button>
                    </div>
                </Modal>
            )}
        </header>
    )
}

export default Header