import React from 'react';

const Product = (props) => (
    <div className="product">
        <div>{props.name}</div>
        <div onClick={props.remove} className="remove"> &#10006; </div>
        <div className="currentPrice">{props.price} KGS</div>
        <div className="amount"> X {props.amount}</div>
    </div>
);

export default Product;