import React, { useEffect } from 'react';

import { SCart } from './styles';

import thumbPhoto01 from '../../assets/images/image-product-1-thumbnail.jpg';
import deleteIcon from '../../assets/images/icon-delete.svg';

export default function CartPopup({ trigger, cart, handleDelete }) {
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return( 
    trigger ? 
    <SCart>
      <div id="header">
        <h1>
          Cart
        </h1>
      </div>
      
      {Object.keys(cart).length >= 2 && cart.quantity > 0 ? 
        <>
          <div id="cart-info">
            <img src={thumbPhoto01}></img>
            <div>
              <h2>{cart.name}</h2>
              <p>${cart.price.toFixed(2)} × {cart.quantity} <span>${(cart.price * cart.quantity).toFixed(2)}</span></p>
            </div>
            <img onClick={handleDelete} src={deleteIcon}></img>
          </div>
          <button>
            Checkout
          </button>
        </>
        :
        <div id="cart-empty">
          <p>
            {'Your cart is empty.'}
          </p>
        </div> 
      }
      
    </SCart> : 
    
    ""
  );
};
