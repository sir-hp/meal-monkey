import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner"
import { Link } from "@reach/router"

const TheMeal = () => {
    const [loading, setLoading] = useState(true);
    const [categorys, setCategorys] = useState();

    useEffect(() => {
        (async function IIFE() {
            let response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
            setCategorys(response.data.categories)
            setLoading(false)
        })();
    }, []);

    return loading ? <Spinner /> : (
            <>
            <h3>the meal</h3>
            {
                categorys.map(category => (
                    <Link key={category.idCategory} to={`/${category.strCategory}`}>
                        <p >{category.strCategory}</p>
                        </Link>
                ))}
                </>
                );
}

            export default TheMeal;