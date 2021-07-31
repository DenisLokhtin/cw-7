import {useState} from "react";
import Coffee from './assets/coffee.png';
import Cutlery from './assets/cutlery.png';
import Card from "./components/card";
import Price from "./components/price";
import Product from "./components/product"
import './App.css';

function App() {

    const [products, setProducts] = useState([
        {name: 'Hamburger', count: 0, image: Cutlery, price: 80, currentPrice: 0},
        {name: 'Coffee', count: 0, image: Coffee, price: 70, currentPrice: 0},
        {name: 'Fries', count: 0, image: Cutlery, price: 45, currentPrice: 0},
        {name: 'Tea', count: 0, image: Coffee, price: 10, currentPrice: 0},
        {name: 'Cheeseburger', count: 0, image: Cutlery, price: 90, currentPrice: 0},
        {name: 'Cola', count: 0, image: Coffee, price: 50, currentPrice: 0},
    ]);

    const [price, setPrice] = useState(0);

    const updatePrice = (index) => {
        products[index].currentPrice = products[index].count * products[index].price;
        const sum = products.reduce((sum, product) => {
            return product.currentPrice + sum
        }, 0)

        setPrice(sum)
    }

    const AddProducts = (index) => {
        products[index].count++;
        updatePrice(index)
        setProducts([...products]);
    };

    const removeProducts = (index) => {
        if (products[index].count > 0) {
            products[index].count--;
            updatePrice(index)
            setProducts([...products]);
        }
    };

    const renderPrice = () => {
        if (price !== 0) {
            return (
                <Price price={price}/>
            )
        } else {
            return (
                <div>Order is empty! Please add some items.</div>
            )
        }
    }


    return (
        <div className="container">
            <fieldset className="fieldset-2">
                <legend>Order details:</legend>

                {products.map((product, index) => {
                    if (product.count !== 0) {
                        return (<Product name={product.name} amount={product.count} price={product.currentPrice} remove={() => {removeProducts(index)}}/>);
                    }
                })}

                {renderPrice()}

            </fieldset>

            <fieldset className="fieldset-1">
                <legend>Add items:</legend>

                {products.map((product, index) => {
                    return <Card price={product.price} product={product.name} img={product.image} amount={product.count} add={() => {AddProducts(index)}}/>
                })}

            </fieldset>
        </div>
    );
}

export default App;
