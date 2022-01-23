import { useState } from 'react';

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

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      padding: '0 4px',
    },
  }));

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
                <StyledBadge className='header-badge' badgeContent={5} color="success">
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