import { FaCcVisa, FaCcMastercard, FaCcStripe, FaCcPaypal } from 'react-icons/fa';
import { RiBillFill } from 'react-icons/ri';
import GooglePlayBadge from '../../assets/images/Footer/googleplay-badge.svg';
import AppStoreBadge from '../../assets/images/Footer/appstore-badge.svg';

import './styles.scss';

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <ul>
          <li><h5>Conheça-nos</h5></li>
          <li><a href="#">Informações corporativas</a></li>
          <li><a href="#">Carreiras</a></li>
          <li><a href="#">Comunicados à imprensa</a></li>
          <li><a href="#">Comunidade</a></li>
          <li><a href="#">Acessibilidade</a></li>
          <li><a href="#"></a></li>
        </ul>
        <ul>
          <li><h5>Deixe-nos ajudar você</h5></li>
          <li><a href="#">Sua conta</a></li>
          <li><a href="#">Frete e prazo de entrega</a></li>
          <li><a href="#">Devoluções e reembolsos</a></li>
          <li><a href="#">Ajuda</a></li>
          <li><a href="#">Código de Defesa do Consumidor</a></li>
          <li><a href="#"></a></li>
        </ul>
        <ul>
          <li><h5>Formas de pagamento</h5></li>
          <li><h6>Cartão de Crédito</h6></li>
          <li><div className='footer-payment-card'>
            <FaCcVisa className='footer-icon' />
            <FaCcMastercard className='footer-icon' />
            <FaCcStripe className='footer-icon' />
            <FaCcPaypal className='footer-icon' />
          </div></li>
          <li><h6>Boleto Bancário</h6></li>
          <li><RiBillFill className='footer-icon' /></li>
          <li><a href="#">Pague em até 6x</a></li>
          <li><a href="#">Confira as condições</a></li>
          <li><h6>Boleto Antecipado</h6></li>
          <li><a href="#">À vista com 3% de desconto em produtos</a></li>
        </ul>
        <ul>
          <li><h5>Baixe nosso aplicativo</h5></li>
          <li><div className="footer-icon-wrapper">
            <img src={GooglePlayBadge} alt="Google Play download badge" />
            <img src={AppStoreBadge} alt="App Store download badge" />
          </div></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;