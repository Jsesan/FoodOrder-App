import React, { Fragment }  from "react";

import empanadasImg from "../../assets/headerImg.png";

import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Pizzas y Empanadas "Raquel"</h1>
                <HeaderCartButton onClick={props.onOpenCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={empanadasImg} />
            </div>
        </Fragment>
    );
};

export default Header;