import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartContext from "./store/cart-context";
import CartProvider from "./store/CartProvider";

function App() {

  const[openCart, setOpenCart] = useState(false);

  const openCartHandler = () => {
    setOpenCart(true);
  }

  const closeCartHandler = () => {
    setOpenCart(false);
  }

  return (
    <CartProvider>
     {openCart && <Cart onCloseCart={closeCartHandler}/>}
      <Header onOpenCart={openCartHandler}  />
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
