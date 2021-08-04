import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: '1/2 Doc Empanadas Carne',
      description: 'Media docena de empanadas',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Pizza de muzza',
      description: 'Riqui Riqui',
      price: 16.5,
    },
    {
      id: 'm3',
      name: '1 Doc Empanadas Pollo',
      description: 'Chico Poio',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Pizza con Jamon y Morrones',
      description: 'La mejor',
      price: 18.99,
    },
  ];

  const AvailableMeals = ()=>{
      const mealsList = DUMMY_MEALS.map( meal => <li>{meal.name}</li>);
    return <section className={classes.meals}>
        <ul>
            {mealsList}
        </ul>
    </section>
  };

  export default AvailableMeals;