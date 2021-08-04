import React, { Fragment }  from "react";

import empanadasImg from "../../assets/headerImg.png";

import classes from './Header.module.css';
const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Raquel pizza y empanadas</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={empanadasImg} />
            </div>
        </Fragment>
    );
};

export default Header;