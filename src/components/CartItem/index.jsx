import { useState, useEffect } from 'react';
import removeFromCart from '../../utils/removeFromCart';

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
  const [cost, setCost] = useState(0);

  const updateCart = () => {
    let cartItems = [];
    if (localStorage.hasOwnProperty('cartProducts')) {
      cartItems = JSON.parse(localStorage.getItem('cartProducts'));
    }
    setCart(cartItems);
    document.addEventListener("updateCart", newHandle);
  }

  const updateCost = (items) => {
    let initialCost = 0;
    for (let i = 0; i < items.length; i++) {
      initialCost += (items[i].cost * items[i].qty);
    }
    const finalCost = initialCost.toFixed(2);
    setCost(finalCost);
  }

  const newHandle = function() {
    document.removeEventListener('updateCart', newHandle);
    updateCart();
  };

  useEffect(() => {
    document.addEventListener("updateCart", newHandle);
    updateCart();
  }, [])

  useEffect(() => {
    updateCost(cart);
  }, [cart]);

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
          <h6>R${cost}</h6>
        </>
        : <p>Seu carrinho está vazio.</p>
      }
    </>
  )
}

export default CartItem;