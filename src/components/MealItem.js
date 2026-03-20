const MealItem = (props) => {
    const price = new Intl.NumberFormat("de-DE", {style: "currency",
    currency: "EUR",}).format(props.meal.price);

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
                        <button>Add to Cart</button>
                    </p>
            </article>
        </li>
    )
}

export default MealItem;