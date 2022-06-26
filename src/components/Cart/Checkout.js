import classes from './Checkout.module.css';
import { useRef, useState } from 'react';

const isEmpty = value => value.trim() !== "";

const isNotFiveChars = value => value.trim().length !== 5;


const Checkout = (props) => {

    const [formInputValidity, setformInputValidity]= useState({
        name: true,
        street: true,
        city: true,
        postal: true,
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();





    const confirmHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameValid= !isEmpty(enteredName);
        const enteredStreetValid = !isEmpty(enteredStreet);
        const enteredCityValid = !isEmpty(enteredCity);
        const enteredPostalValid = !isNotFiveChars(enteredPostal);

        const formIsValid = enteredNameValid && enteredStreetValid && enteredCityValid && enteredPostalValid; 

        if(!formIsValid){
            return;
        }



        
    };




  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef}/>
        {!formInputValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!formInputValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalInputRef}/>
        {!formInputValidity.postal && <p>Please enter a valid postal code!</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef}/>
        {!formInputValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;