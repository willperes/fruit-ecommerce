import Logo from '../../assets/images/Header/logo.png';
import CartIcon from '../../assets/images/Header/cart-icon.svg';

import './styles.scss';

function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <ul>
          <li>
            <div className="header-left-content">
              <a className='header-logo' href="https://www.flaticon.com/free-icons/food-and-restaurant" title="food and restaurant icons"><img src={Logo} alt="FruitHouse logo" /></a>
              <p>FruitHouse</p>
            </div>
            <div className="header-mid-content">
              <a href="#">Início</a>
              <a href="#">Produtos</a>
              <a href="#">Perguntas frequentes</a>
            </div>
            <div className="header-right-content">
              <img src={CartIcon} alt="Ícone de um carrinho de compras" />
              <a href="#">Carrinho (0)</a>
            </div>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;