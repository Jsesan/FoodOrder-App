import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = props => {
    return <form className={classes.form}>
        <Input label="Cantidad" input = {{
            id: 'amount_' + props.id,
            type: 'number',
            min: '0',
            max: '5',
            step: '1',
            defaultValue: '0'
            }} />
        <button>+ Agregar</button>
    </form>
};

export default MealItemForm;