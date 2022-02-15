import React, { useState } from 'react';

import { SHeader, SNavbar, SCartProfile, SQuantity } from './styles';

import logo from '../../assets/images/logo.svg';
import menu from '../../assets/images/icon-menu.svg';
import deleteIcon from '../../assets/images/icon-close.svg';
import cartIcon from '../../assets/images/icon-cart.svg';
import avatar from '../../assets/images/image-avatar.png';

import CartPopup from '../Cart';

export default function Header({ cart, handleTrigger, trigger, handleDelete }) {
  const [active, setActive] = useState(false);
  let width = window.innerWidth;

  return(
    <SHeader>
      <SNavbar>
        {
          width <= 400 ? <img onClick={() => setActive(!active)} src={menu}></img> : ''
        }
        <img src={logo}></img>
        <nav>
          <a href="#">Collections<div id="collection"></div></a>
          <a href="#">Men<div id="men"></div></a>
          <a href="#">Women<div id="women"></div></a>
          <a href="#">About<div id="about"></div></a>
          <a href="#">Contact<div id="contact"></div></a>
        </nav>

        {
          active &&  
          <div id="mobile">
            <div id="mobile-div">
              <img 
                onClick={() => setActive(!active)}
                src={deleteIcon}
              ></img>
              <div id="mobile-nav">
                <a href="#">Collections<div id="collection"></div></a>
                <a href="#">Men<div id="men"></div></a>
                <a href="#">Women<div id="women"></div></a>
                <a href="#">About<div id="about"></div></a>
                <a href="#">Contact<div id="contact"></div></a>
              </div>
            </div>
          </div>
        }

        <SCartProfile>
          <CartPopup handleDelete={handleDelete} cart={cart} trigger={trigger} />
          {cart.quantity > 0 ? <SQuantity><p>{cart.quantity}</p></SQuantity> : ""}
          <img 
            onClick={handleTrigger} 
            src={cartIcon}
          ></img>
          <img id="profile-img" src={avatar}></img>
        </SCartProfile>
      </SNavbar>
    </SHeader>
  );
};
