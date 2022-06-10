import classes from './MealItem.module.css';
import react from 'react';


const MealItem = props=>{

    const price = `$${props.price.toFixed(2)}`;// to make sure it always renders two decimal plcaes
    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            
            </div>
            <div>

            </div>
        </li>

    );
}
export default MealItem;

