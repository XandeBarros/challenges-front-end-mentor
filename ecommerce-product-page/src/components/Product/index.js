import React, { useEffect, useState } from 'react';

import { SContainer, SProductPhotos, SProductDescription, SPhoto, SLightbox, SLightboxPhotos, SLightboxThumb, SCloseLightbox, SThumbnail, SSubtitle, STitle, SDescription, SDiscount, SPrice, SSelectButton, SQuantity, SAddToCart } from './styles';

import photo01 from '../../assets/images/image-product-1.jpg';
import photo02 from '../../assets/images/image-product-2.jpg';
import photo03 from '../../assets/images/image-product-3.jpg';
import photo04 from '../../assets/images/image-product-4.jpg';
import thumbPhoto04 from '../../assets/images/image-product-4-thumbnail.jpg';
import thumbPhoto01 from '../../assets/images/image-product-1-thumbnail.jpg';
import thumbPhoto02 from '../../assets/images/image-product-2-thumbnail.jpg';
import thumbPhoto03 from '../../assets/images/image-product-3-thumbnail.jpg';

const imgs = [photo01, photo02, photo03, photo04];
const thumbs = [thumbPhoto01, thumbPhoto02, thumbPhoto03, thumbPhoto04];

import closeIcon from '../../assets/images/icon-close.svg';
import nextIcon from '../../assets/images/icon-next.svg';
import prevIcon from '../../assets/images/icon-previous.svg';

import minusIcon from '../../assets/images/icon-minus.svg';
import plusIcon from '../../assets/images/icon-plus.svg';
import cartIcon from '../../assets/images/icon-cart.svg';

export default function Product({ handleMinusQuantity, handlePlusQuantity, handleCartUpdate, cart }) {
  const [selectedImg, setSelectedImg] = useState(photo01);
  const [active, setActive] = useState(false);

  let width = window.innerWidth;

  return(
    <SContainer>
      <SProductPhotos> 
        {width <= 400 ? 
          <div
            onClick={() => {
              let imgIndex = imgs.indexOf(selectedImg);
              if (imgIndex === 0) {
                imgIndex = 3;
                return setSelectedImg(imgs[imgIndex]);
              }
              imgIndex = imgIndex - 1;
              return setSelectedImg(imgs[imgIndex]);
            }} 
            id="icon-prev-mobile"
          >
            <img src={prevIcon}></img>
          </div> : ''
        } 
        <SPhoto 
          onClick={() => {
            if (width <= 400) return;
            setActive(!active);
          }}
          src={selectedImg} 
        />
        {width <= 400 ?
          <div
            onClick={() => {
              let imgIndex = imgs.indexOf(selectedImg);
              if (imgIndex === 3) {
                imgIndex = 0;
                return setSelectedImg(imgs[imgIndex]);
              }
              imgIndex = imgIndex + 1;
              return setSelectedImg(imgs[imgIndex]);
            }} 
            id="icon-next-mobile"
          >
            <img src={nextIcon}></img>
          </div> : ''
        }

        {
          active && 
          
          <SLightbox>
            <SLightboxPhotos>
              <div
                onClick={() => {
                  let imgIndex = imgs.indexOf(selectedImg);
                  if (imgIndex === 0) {
                    imgIndex = 3;
                    return setSelectedImg(imgs[imgIndex]);
                  }
                  imgIndex = imgIndex - 1;
                  return setSelectedImg(imgs[imgIndex]);
                }} 
                id="icon-prev"
              >
                <img src={prevIcon}></img>
              </div>
              <SCloseLightbox
                onClick={() => setActive(!active)}
              >
                <img src={closeIcon} />
              </SCloseLightbox>
              <SPhoto 
                onClick={() => setActive(!active)}
                src={selectedImg} 
              />
              <div
                onClick={() => {
                  let imgIndex = imgs.indexOf(selectedImg);
                  if (imgIndex === 3) {
                    imgIndex = 0;
                    return setSelectedImg(imgs[imgIndex]);
                  }
                  imgIndex = imgIndex + 1;
                  return setSelectedImg(imgs[imgIndex]);
                }} 
                id="icon-next"
              >
                <img src={nextIcon}></img>
              </div>
              <div>
                {thumbs.map((img, index) => <SLightboxThumb style={{ border: selectedImg === imgs[index] ? '3px solid hsl(26, 100%, 55%)' : '', opacity: selectedImg === imgs[index] ? '.7' : '' }} key={index} onClick={() => setSelectedImg(imgs[index])} src={thumbs[index]} />)}
              </div>
            </SLightboxPhotos>
          </SLightbox> 
        }

        <div>
          {thumbs.map((img, index) => <SThumbnail style={{ border: selectedImg === imgs[index] ? '3px solid hsl(26, 100%, 55%)' : '', opacity: selectedImg === imgs[index] ? '.5' : '' }} key={index} onClick={() => setSelectedImg(imgs[index])} src={thumbs[index]} />)}
        </div>
      </SProductPhotos>
      <SProductDescription>
        <SSubtitle>
          Sneaker Company
        </SSubtitle>
        <STitle>
          Fall Limited Edition Sneakers
        </STitle>
        <SDescription>
          These low-profile sneakers are your perfect casual wear companion. Featuring a
          durable rubber outer sole, they’ll withstand everything the weather can offer.
        </SDescription>
        <div>
          <SPrice>
            $125.00
          </SPrice>
          <SDiscount>
            50%
          </SDiscount>
        </div>
        <SSelectButton>
          <SQuantity>
            <img onClick={handleMinusQuantity} src={minusIcon}></img>
            <p>
              {cart.quantity}
            </p>
            <img onClick={handlePlusQuantity} src={plusIcon}></img>
          </SQuantity>
          <SAddToCart onClick={ e => {
            console.log(e.target);
            handleCartUpdate();
          }}>
            <img src={cartIcon}></img>
            <p>
              Add to cart
            </p>
          </SAddToCart>
        </SSelectButton>
      </SProductDescription>
    </SContainer>
  );
};
