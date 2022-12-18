import Card from "../layout/Card";
import MealItem from "./MealItem";

import classes from './Meals.module.css'


const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.50,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.50,
    },
    {
        id: 'm3',
        name: 'Cheese Burger',
        description: 'American, raw, meaty',
        price: 13.00,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const Meals = (props) => {
    return (

        <section className={classes.meals}>
            <Card>
                <ul>
                    {DUMMY_MEALS.map((m) => {
                        return <MealItem key={m.id} meal={m}></MealItem>
                    })}
                </ul>
            </Card>
        </section>

    )
}

export default Meals;