import { useState } from 'react';
import { Products } from './components/Products';
import { CartBtn, Logo } from './components/commons';
import { Cart } from './components/cart';

const App = () => {

  const products = [
    { id: 1, title: 'Product 1', price: 10000, img: 'p1.webp' },
    { id: 2, title: 'Product 2', price: 5000, img: 'p2.webp' },
    { id: 3, title: 'Product 3', price: 20000, img: 'p3.webp' },
  ];

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (id) => setCart([...cart, id]);
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const updateCart = (newCart) => setCart(newCart);

  return (
    <div className="container">

      <div className="header">
        <Logo />
        <CartBtn
          productsCount={cart.length}
          toggleCart={toggleCart}
        />
      </div>

      <div className="main">
        <Products data={products} addToCartHandler={addToCart} />
      </div>

      <div className="footer"></div>

      {
        isCartOpen
          ? <Cart
            data={products}
            cartData={cart}
            toggleCart={toggleCart}
            updateCart={updateCart}
          />
          : ''
      }
    </div>

  );
}

export default App;
