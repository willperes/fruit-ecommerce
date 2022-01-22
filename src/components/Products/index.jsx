import ProductCard from '../ProductCard';
import './styles.scss';

function Products() {
  return (
    <section className='products'>
      <div className='product-cards'>
        <ProductCard />
      </div>
    </section>
  )
}

export default Products;