import {useState} from "react";
import MeatImage from './assets/meat.png';
import CheeseImage from './assets/cheese.png';
import SaladImage from './assets/salad.png';
import BaconImage from './assets/bacon.png';
import Coffee from './assets/coffee.png';
import Cutlery from './assets/cutlery.png';
import Card from "./components/card";
import Price from "./components/price";
import BreadTop from "./components/breadTop"
import Ingredient from "./components/ingredient"
import './App.css';

function App() {

    const [ingredients, setIngredients] = useState([
        {name: 'Hamburger', count: 0, image: Cutlery, price: 80, currentPrice: 0},
        {name: 'Coffee', count: 0, image: Coffee, price: 70, currentPrice: 0},
        {name: 'Fries', count: 0, image: Cutlery, price: 45, currentPrice: 0},
        {name: 'Tea', count: 0, image: Coffee, price: 50, currentPrice: 0},
        {name: 'Cheeseburger', count: 0, image: Cutlery, price: 90, currentPrice: 0},
        {name: 'Cola', count: 0, image: Coffee, price: 40, currentPrice: 0},
    ]);

    const [price, setPrice] = useState(0);

    const updatePrice = (index) => {
        ingredients[index].currentPrice = ingredients[index].count * ingredients[index].price;
        const sum = ingredients.reduce((sum, ingredient) => {
            return ingredient.currentPrice + sum
        }, 0)

        setPrice(sum)
    }

    const AddIngredients = (index) => {
        ingredients[index].count++;
        updatePrice(index)
        setIngredients([...ingredients]);
    };

    const removeIngredients = (index) => {
        if (ingredients[index].count > 0) {
            ingredients[index].count--;
            updatePrice(index)
            setIngredients([...ingredients]);
        }
    };


    return (
        <div className="container">
            <fieldset className="fieldset-2">
                <legend>Order details:</legend>

                    {ingredients.map((ingredient, index) => {
                        const renderIngredient = []
                        for (let i = 0; i < ingredient.count; i++) {
                            if (ingredient.count === 1) {
                                renderIngredient.push(<Ingredient name={ingredient.name} amount={ingredient.count} price={ingredient.currentPrice}/>);
                            }
                        }
                        return renderIngredient
                    })}

                <div className="line"/>
                <Price price={price}/>

            </fieldset>

            <fieldset className="fieldset-1">
                <legend>Add items:</legend>

                {ingredients.map((ingredient, index) => {
                    return <Card  price={ingredient.price} ingredient={ingredient.name} img={ingredient.image} amount={ingredient.count}
                                 add={() => {
                                     AddIngredients(index)
                                 }}/>
                })}

            </fieldset>
        </div>
    );
}

export default App;
