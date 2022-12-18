

import Modal from '../layout/Modal';
import classes from './Cart.module.css'
import { useContext } from 'react';
import CartContext from '../store/cart-context';
export default function Cart(props) {
    const cartCtx = useContext(CartContext);
    // console.log(cartCtx.items);

    function addHandler(item) {
        console.log("add");

    }
    function removeHandler(id) {
        console.log("delete");

    }

    return (
        <Modal onClose={props.onClose}>
            <ul className={classes['cart-items ']}>
                {cartCtx.items.map((i) => {
                    //  console.log(".........");
                    return (
                        <li key={Math.random().toString()} className={classes['cart-item']}>
                            <div>
                                <h2>{i.name}</h2>
                                <div className={classes.summary}>
                                    <span className={classes.price}>{i.prix}</span>
                                    <span className={classes.amount}>x {i.qte}</span>
                                </div>
                            </div>
                            <div className={classes.actions}>
                                <button>−</button>
                                <button onClick={() => {

                                    cartCtx.addItem({
                                        id: i.id, name: i.name,
                                        prix: i.prix,
                                        qte: 1,
                                    })
                                }}>+</button>
                            </div>
                        </li>);
                })}

            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{cartCtx.totalAmount().toFixed(2)}</span>

            </div>
            <div className={classes.actions}>
                <button onClick={() => { props.onClose() }} className={classes['button--alt']}>Close</button>
                <button className={classes['buttons']}>Order</button>

            </div>

        </Modal>
    )
}