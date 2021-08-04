import classes from "./AvailableMeals.module.css";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "1/2 Doc Empanadas Carne",
    description: "Media docena de empanadas",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Pizza de muzza",
    description: "Riqui Riqui",
    price: 16.5,
  },
  {
    id: "m3",
    name: "1 Doc Empanadas Pollo",
    description: "Chico Poio",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Pizza con Jamon y Morrones",
    description: "La mejor",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
