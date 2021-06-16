import axios from "axios";
import { link } from "@reach/router"
const Meal = ({ category }) => {
    return (
        <h1>{category}</h1>
    );
}

export default Meal;