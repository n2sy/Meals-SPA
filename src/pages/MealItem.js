
import { useContext, useState } from 'react';
import CartContext from '../store/cart-context';
import classes from './MealItem.module.css';


export default function MealItem(props) {
    const [newItem, setNewItem] = useState('');


    const cartCtx = useContext(CartContext);

    function changeHandler(e) {
        setNewItem(e.target.value);
    }

    function addToCart(e) {
        e.preventDefault();

        cartCtx.addItem(
            {
                id: props.meal.id,
                name: props.meal.name,
                prix: Number(props.meal.price.toFixed(2)),
                qte: Number(newItem)


            }
        );

    }

    return (
        <li className={classes.meal}>
            <div>
                <div><h3>{props.meal.name}</h3></div>
                <div className={classes.description}>{props.meal.description}</div>
                <div className={classes.price}>{`${props.meal.price.toFixed(2)}$`}</div>

            </div>
            <form className={classes.form} onSubmit={addToCart}>
                <div className={classes.input}>
                    <label>Amount</label>
                    <input label="Amount" type='number' min='1' max='5' step='1' defaultValue='0'
                        onChange={changeHandler}></input>
                </div>
                <button className="btn btn-outline-secondary" type="submit">+ Add</button>


            </form>

        </li>
    )
}