import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import react, {useContext} from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton =(props)=>{

    const Cartctx = useContext(CartContext);

    const numberOfCartItems= Cartctx.items.reduce((currNumber, item)=>{return currNumber+item.amount;
    }, 0);

    return <button className={classes.button} onClick = {props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>

        <span className={classes.badge}>{numberOfCartItems}</span>




    </button>

}
export default HeaderCartButton;