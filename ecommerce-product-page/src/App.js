import React, { useState } from 'react';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Product from './components/Product';

function App() {
  const [cart, setCart] = useState({name: 'Fall Limited Edition Sneakers', price: 125, quantity: 0});
  const [trigger, setTrigger] = useState(false);

  function handleCartUpdate() {
    setTrigger(!trigger);
  };

  function handleDelete() {
    setCart(prevState => ({...prevState, quantity: prevState.quantity = 0}));
  };

  function handleTrigger() {
    setTrigger(!trigger);
  };

  function handlePlusQuantity() {
    setCart(prevState => {
      return {...prevState, quantity: prevState.quantity + 1}
    });
  };

  function handleMinusQuantity() {
    setCart(prevState => {
      if (prevState.quantity === 0) return prevState  ;
      return {...prevState, quantity: prevState.quantity - 1}
    });
  };

  return(
    <>
      <GlobalStyle />
      <Header trigger={trigger} handleTrigger={handleTrigger} cart={cart} handleDelete={handleDelete}/>
      <Product handleCartUpdate={handleCartUpdate} handlePlusQuantity={handlePlusQuantity} handleMinusQuantity={handleMinusQuantity} cart={cart}/>
    </>
  );
};

export default App;
