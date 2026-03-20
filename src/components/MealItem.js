import { useContext } from "react";
import Button from "./UI/Button"
import { CartContext } from "../store/CartContext";

const MealItem = (props) => {
    const price = new Intl.NumberFormat("de-DE", {style: "currency",
    currency: "EUR",}).format(props.meal.price);

    const {AddItem} = useContext(CartContext);

    return (
        <li className="meal-item">
            <article className="meal-item article">
                <img className="meal-item img" src={require(`../assets/${props.meal.image}`)} alt={props.meal.name}/>
                <div>
                    <h3 className="meal-item h3">{props.meal.name}</h3>
                    <p className="meal-item-price">{price}</p>
                    <p className="meal-item-description">{props.meal.description}</p>
                </div>
                    <p className="meal-item-actions">
                        <Button onClick={() => AddItem(props.meal)}>Add to Cart</Button>
                    </p>
            </article>
        </li>
    )
}

export default MealItem;