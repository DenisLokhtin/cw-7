import React from 'react';
import BinImage from "../assets/bin.png";


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
        {/*<img onClick={props.remove} className="remove" src={BinImage} alt="bin"/>*/}
        {/*<div className="amount">X {props.amount}</div>*/}
    </div>
);

export default Card;