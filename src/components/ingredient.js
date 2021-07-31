import React from 'react';

const Ingredient = (props) => (
    <div className="product">
        <div>{props.name}</div>
        <div className="currentPrice">{props.price} KGS</div>
        <div className="amount"> X {props.amount}</div>
        <div className="remove">X</div>
    </div>
);

export default Ingredient;