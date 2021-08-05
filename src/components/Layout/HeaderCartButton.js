import classes from "./HeaderCartButton.module.css";

import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnAnimate, setBtnAnimate] = useState(false);
  const ctx = useContext(CartContext);

  const cartItems = ctx.items.reduce((current, item) => {
      return current + item.amount;
  }, 0);

  const buttonClasses = `${classes.button} ${btnAnimate ? classes.bump : ''}`;

  const {items} = ctx;

  useEffect(()=>{
    if(items.length === 0){
      return;
    }
    setBtnAnimate(true);
    const timer = setTimeout(()=>{
      setBtnAnimate(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  },[items]);

  return (
    <button onClick={props.onClick} className={buttonClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Tu carrito</span>
      <span className={classes.badge}>{cartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
