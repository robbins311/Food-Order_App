import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import useHttp from "../../hooks/use-http";
const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  // 항상 렌더링되는 파일이여서 true
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    //useEffect 안에서는 async를 쓰면 안됨. (promise 반환ㅇ ㅣ되지않음)
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-https-4b1d6-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went Wrong!");
      }
      const responseData = await response.json();
      //json 객체로 반환되서 배열로 고쳐야함
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({ id: key, ...responseData[key] });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  // const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  // useEffect(() => {
  //   //useEffect 안에서는 async를 쓰면 안됨. 이렇게 useeffecT의 일부로 써야함
  //   const transformMeals = (mealsobj) => {
  //     const loadedMelas = [];
  //     for (const taskKey in mealsobj) {
  //       console.log(taskKey);
  //       console.log(mealsobj[taskKey]);
  //       loadedMelas.push({ id: taskKey, ...mealsobj[taskKey] });
  //     }
  //     setMeals(loadedMelas);
  //     console.log(loadedMelas);
  //   };
  //   fetchMeals(
  //     {
  //       url: "https://react-https-4b1d6-default-rtdb.firebaseio.com/meals.json",
  //     },
  //     transformMeals
  //   );
  // }, [fetchMeals]);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }
  if (error) {
    return (
      <section className={classes.MealsError}>
        <p>{error}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => {
    console.log(meal);
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
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
