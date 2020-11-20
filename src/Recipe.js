import React from 'react';

const Recipe = ({title, calories, img, ingredients}) => {
    return (
        <div>
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