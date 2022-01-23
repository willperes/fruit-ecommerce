import List from '@mui/material/List';

import './styles.scss';
import CartItem from '../CartItem';

function Cart() {
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