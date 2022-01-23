import { useState, useEffect } from 'react';

import { GiGreenhouse } from 'react-icons/gi';
import { IconContext } from "react-icons";

import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import './styles.scss';
import Cart from '../Cart';

function Header() {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState();

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleEvent = function () {
    document.removeEventListener('updateCart', handleEvent);
    updateCount();
  };

  const StyledBadge = styled(Badge)(() => ({
    '& .MuiBadge-badge': {
      padding: '0 4px',
    },
  }));

  /*
    Atualizar a contagem do badge do carrinho com a quantidade de items que estão presentes no carrinho.
  */
  const updateCount = () => {
    let cartItems = [];
    if (localStorage.hasOwnProperty('cartProducts')) {
      cartItems = JSON.parse(localStorage.getItem('cartProducts'));
    }
    setCount(cartItems.length);
    document.addEventListener("updateCart", handleEvent);
  }

  useEffect(() => {
    document.addEventListener("updateCart", handleEvent);
    updateCount();
  }, [])

  return (
    <>
      <header>
        <div className="header-wrapper">
          <div className="header-content">
            <div className="header-left-content">
              <IconContext.Provider value={{ color: "white" }} >
                <GiGreenhouse className='header-logo' />
              </IconContext.Provider>
            </div>
            <div className="header-text-buttons">
              <a href="#">Início</a>
              <a href="#">Produtos</a>
              <a href="#">Perguntas frequentes</a>
            </div>
            <div className="header-right-content">
              <IconButton aria-label="cart" onClick={handleClick}>
                <StyledBadge className='header-badge' badgeContent={count} color="success">
                  <ShoppingCartIcon className='header-cart' />
                </StyledBadge>
              </IconButton>
            </div>
          </div>
        </div>
      </header>
      {
        open ? (
          <Cart />
        ) : null
      }
    </>
  )
}

export default Header;