import React, { useState, useEffect } from "react";
import MealItem from "./MealItem";

const Meals = () => {
    const [data, setData] = useState([]);
    const url = "http://localhost:3001/meals";

    const fetchData = async () => {
        const res = await fetch(url);
        const d = await res.json();
        return setData(d);
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <ul id="meals">
            {data.map((meal) => (<MealItem key={meal.id} meal={meal}/>))
            }
        </ul>
    )
}

export default Meals