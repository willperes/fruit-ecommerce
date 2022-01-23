import './styles.scss';

import Button from '@mui/material/Button';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        <h1>Muita variedade, muito sabor, tudo para você.</h1>
        <Button className='product-card-button' variant="contained">Confira já</Button>
      </div>
    </section>
  )
}

export default Hero;