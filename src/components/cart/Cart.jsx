import styles from './Cart.module.css';
import { CartTotalPrice } from './components';
import { CartProducts } from './components/CartProducts';

export const Cart = ({ cartData, data, toggleCart, updateCart }) => {
  const { cart, header, btnHeader, main, footer } = styles;

  const cartObj = cartData.reduce((acc, current) => {
    acc[current] = (acc[current] || 0) + 1;
    return acc;
  }, {});

  const updateQtyOfProductInCart = (id, qty) => {
    const updatedCart = cartData.filter(item => item !== id);
    updatedCart.push(...Array(qty).fill(id));
    console.log(updateCart);
    updateCart(updatedCart);
  };

  return (
    <div className={cart}>

      <div className={header}>
        <h4>Products</h4>
        <button className={btnHeader} onClick={toggleCart}>X</button>
      </div>

      <div className={main}>

        <CartProducts
          cartObj={cartObj}
          data={data}
          updateQtyOfProductInCart={updateQtyOfProductInCart}
        />

      </div>

      <div className={footer}>

        <CartTotalPrice
          cartData={cartData}
          data={data}
        />

      </div>
    </div>
  );
};
