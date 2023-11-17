import React from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import meals from "../../assets/js/dummy-meals";
import Card from "../UI/Card";
const AvailableMeals = () => {
  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <Card className={classes.meals}>
      <ul>{mealsList}</ul>
    </Card>
  );
};

export default AvailableMeals;
