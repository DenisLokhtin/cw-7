import {useState} from "react";
import MeatImage from './assets/meat.png';
import CheeseImage from './assets/cheese.png';
import SaladImage from './assets/salad.png';
import BaconImage from './assets/bacon.png';
import Card from "./components/card";
import Price from "./components/price";
import BreadTop from "./components/breadTop"
import Ingredient from "./components/ingredient"
import './App.css';

function App() {

    const [ingredients, setIngredients] = useState([
        {name: 'Meat', count: 0, image: MeatImage, price: 50, currentPrice: 0},
        {name: 'Cheese', count: 0, image: CheeseImage, price: 20, currentPrice: 0},
        {name: 'Salad', count: 0, image: SaladImage, price: 5, currentPrice: 0},
        {name: 'Bacon', count: 0, image: BaconImage, price: 30, currentPrice: 0},
        {name: 'Bacon', count: 0, image: BaconImage, price: 30, currentPrice: 0},
        {name: 'Bacon', count: 0, image: BaconImage, price: 30, currentPrice: 0},
    ]);

    const [price, setPrice] = useState(20);

    const updatePrice = (index) => {
        ingredients[index].currentPrice = ingredients[index].count * ingredients[index].price;
        const sum = ingredients.reduce((sum, ingredient) => {
            return ingredient.currentPrice + sum
        }, 20)

        setPrice(sum)
    }

    const AddIngredients = (index) => {

        ingredients[index].count++;
        updatePrice(index)
        setIngredients([... ingredients]);
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
            <fieldset className="fieldset-1">
                <legend>Add items:</legend>

                {ingredients.map ((ingredient, index) => {
                        return <Card ingredient={ingredient.name} img={ingredient.image} amount={ingredient.count} add={() => {AddIngredients(index)}} remove={() => {removeIngredients(index)}}/>
                })}

            </fieldset>

            <fieldset className="fieldset-2">
                <legend>Order details:</legend>

                <div className="Burger">

                    <BreadTop/>

                    {ingredients.map ((ingredient, index) => {
                        const renderIngredient = []
                        for (let i=0; i < ingredient.count; i++) {
                            renderIngredient.push(<Ingredient ingredient={ingredient.name}/>);
                        }
                        return renderIngredient
                    })}

                    <div className="BreadBottom"/>

                </div>

                <Price price={price}/>

            </fieldset>
        </div>
    );
}

export default App;
