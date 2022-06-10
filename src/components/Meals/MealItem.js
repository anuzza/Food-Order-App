import classes from './MealItem.module.css';
import react from 'react';


const MealItem = props=>{

    const price = `$${props.pricce.toFixed(2)}`;// to make sure it always renders two decimal plcaes
    return(
        <li>
            <div>
                <h3>{props.name}</h3>
                <div>{props.description}</div>
                <div>{price}</div>
            
            </div>
            <div>
                
            </div>
        </li>

    );
}
export default MealItem;

