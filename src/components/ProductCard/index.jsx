import { useState, useEffect } from 'react';
import addToCart from '../../utils/addToCart';
import fetchProducts from '../../utils/fetchProducts';
import fetchFruits from '../../utils/fetchFruits';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';

import './styles.scss';

function ProductCard() {
  const [products, setProducts] = useState([]);
  const [fruits, setFruits] = useState([]);

  function getFruitCost(id) {
    for (let fruit of fruits) {
      if(fruit.id === id) {
        return fruit.cost.toFixed(2);
      }
    }
  }

  function getFruitImage(id) {
    for (let fruit of fruits) {
      if(fruit.id === id) {
        return fruit.img;
      }
    }
  }

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data);
    })
    fetchFruits().then(data => {
      setFruits(data);
    })
  }, [])

  return (
    <>
      {products && ( fruits && (
        <>
          {products.map(product => (
            <div className='product-card' key={product.id}>
              <Card sx={{ maxWidth: 280 }}>
                <CardMedia
                  component="img"
                  height="275"
                  image={getFruitImage(product.id)}
                  alt="green iguana"
                />
                <CardContent>
                  <div className="product-card-wrapper">
                    <div className="product-card-typography">
                      <Typography variant="h5" color='text.primary'>
                        {product.name}
                      </Typography>
                      <Typography variant="p" color="text.secondary">
                        1kg
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        R${getFruitCost(product.id)}
                      </Typography>
                    </div>
                  </div>
                  <Button className='product-card-button' variant="contained" color="primary">Valores nutricionais</Button>
                  <Button 
                    className='product-add-cart-button'
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      addToCart(product);
                    }}
                  >
                    Adicionar ao carrinho
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </>
      ))}
    </>
  )
}

export default ProductCard;