import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem';
import { useEffect, useState } from 'react';



const AvailableMeals = ()=>{

  const [meals, setMeals] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(()=>{
    setisLoading(true);

    const fetchMeals = async()=>{

      const response = await fetch('https://react-http-76fdb-default-rtdb.firebaseio.com/meals.json');

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData){
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        })
      }

      setMeals(loadedMeals);
      setisLoading(false);




    };

    fetchMeals();

    

  }, []);

  if(isLoading){
    return(<section>
      <p className={classes.MealsLoading}>Loading...</p>
    </section>)

  };



    const mealsList = meals.map((meal) =><MealItem 
    id = {meal.id}
    key = {meal.id} 
    name = {meal.name}
    description = {meal.description} 
    price = {meal.price}
    />);

    return (
        <section className={classes.meals}>
           <Card>
               <ul>
               {mealsList}

                </ul>
            </Card> 
        </section>
    );



}
export default AvailableMeals;