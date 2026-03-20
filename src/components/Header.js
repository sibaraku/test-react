import { useContext } from "react";
import logo from '../assets/logo.jpg'
import Button from "./UI/Button"
import {CartContext} from "../store/CartContext"
import Modal from "./UI/Modal";

const Header = () => {
    const {cart, GetCartItemCount} = useContext(CartContext);
    const ItemsTotal = cart.length
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
                <Button textonly={true}>Cart ({GetCartItemCount()})</Button>
                <Modal></Modal>
            </nav>
        </header>
    )
}

export default Header