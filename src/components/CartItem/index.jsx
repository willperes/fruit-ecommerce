import { useState, useEffect } from 'react';
import removeFromCart from '../../utils/removeFromCart';
import cartProduct from '../../utils/cartProduct';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

import './styles.scss';

function CartItem() {
  const [cart, setCart] = useState([]);

  function updateCart() {
    let cartProduct = [];
    if (localStorage.hasOwnProperty('cartProducts')) {
      cartProduct = JSON.parse(localStorage.getItem('cartProducts'));
    }
    setCart(cartProduct);
    document.addEventListener("updateCart", newHandle);
  }

  const newHandle = function() {
    document.removeEventListener('updateCart', newHandle);
    console.log('Atualizando carrinho...');
    updateCart();
  };

  useEffect(() => {
    document.addEventListener("updateCart", newHandle);
    setCart(cartProduct());
  }, [])

  return (
    <>
      {cart
        ?
        <>
          {cart.map(item => (
            <div className='shopping-cart-item' key={item.id}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    alt={item.name}
                    src={item.img}
                    sx={{ width: 50, height: 50 }}
                  />
                </ListItemAvatar>
                <ListItemText primary={item.name} secondary={`R$${(item.cost * item.qty).toFixed(2)} (x${item.qty})`} />
                <IconButton aria-label="delete" onClick={() => removeFromCart(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          ))}
        </>
        : <p>Seu carrinho está vazio.</p>
      }
    </>
  )
}

export default CartItem;