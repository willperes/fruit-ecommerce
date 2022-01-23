import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { Link } from 'react-scroll'

import ProductCard from '../ProductCard';
import ScrollTop from '../ScrollTop';
import './styles.scss';

function Products() {
  return (
    <section className='products' id='products'>
      <div className='product-cards'>
        <ProductCard />
        <ScrollTop>
          <Link to='products' spy={true} smooth={true}>
            <Fab color="secondary" size="small" aria-label="scroll back to top" className='products-scroll-button'>
              <KeyboardArrowUpIcon />
            </Fab>
          </Link>
        </ScrollTop>
      </div>
    </section>
  )
}

export default Products;