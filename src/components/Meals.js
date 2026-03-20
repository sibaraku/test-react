import React, { useState, useEffect } from "react";

const Meals = () => {
    const [data, setData] = useState([]);
    const url = "http://localhost:3001/meals";

    const fetchData = () => {
        return fetch(url)
        .then((res) => res.json())
        .then((d) => setData(d));
    };
    useEffect(() => {
        fetchData();
    }, []);
    console.log(data);

    return (
        <ul id="meals">
            { 
                // list of meals
            }
        </ul>
    )
}

export default Meals