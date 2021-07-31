import React from 'react';

const Price = (props) => (
    <div>
        <div className="line"/>
        <p className="price">Total price: <p className="totalPrice">{props.price} KGS</p></p>
    </div>
);

export default Price;