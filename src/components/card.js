import React from 'react';

const Card = (props) => (
    <div className="card" onClick={props.add}>
        <div>
            <img className="ingredientImg" src={props.img} alt={props.ingredient}/>
        </div>
        <div>
            <div className="ingredient">{props.ingredient}</div>
        </div>
        <div>
            <p>price: {props.price} KGS</p>
        </div>
    </div>
);

export default Card;