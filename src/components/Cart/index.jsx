import { useState } from 'react';

import List from '@mui/material/List';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import './styles.scss';
import CartItem from '../CartItem';

function Cart() {

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  return (
    <section className='shopping-cart'>
      <div className='shopping-cart-content'>
        <h6>Produtos no seu carrinho</h6>
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
          }}
        >
          <CartItem />
        </List>
      </div>
    </section>
  )
}

export default Cart;