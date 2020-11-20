import React from 'react';
import style from "./recipe.module.css";

const Recipe = ({title, calories, img, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title} </h1>
            <p>Calories: {Math.floor(calories, 2)}</p>
            <img src={img} alt="" />
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    )
};

export default Recipe;