import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Las mejoras pizzas y empanadas estan en Paso del rey</h2>
      <p>
        Elegi cualquier comida de la lista que esta debajo, tenemos las mejores pizza y empanadas del conurbano 
        bonarense
      </p>
      <p>
        Todo esta realizado por las manos de Raquel Raies, una viejita simpatica y muy laburadora.
      </p>
    </section>
  );
};

export default MealsSummary;
