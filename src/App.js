import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {

  const[openCart, setOpenCart] = useState(false);

  const openCartHandler = () => {
    setOpenCart(true);
  }

  const closeCartHandler = () => {
    setOpenCart(false);
  }

  return (
    <Fragment>
     {openCart && <Cart onCloseCart={closeCartHandler}/>}
      <Header onOpenCart={openCartHandler}  />
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
