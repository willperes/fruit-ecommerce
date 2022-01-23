import { Link } from 'react-scroll'

import './styles.scss';

import Button from '@mui/material/Button';

function Hero() {
  return (
    <section className="hero" id='hero'>
      <div className="hero-wrapper">
        <h1>Muita variedade, muito sabor, tudo para você.</h1>
        <Link to='products' spy={true} smooth={true}><Button className='product-card-button' variant="contained">Confira já</Button></Link>
      </div>
    </section>
  )
}

export default Hero;