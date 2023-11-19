import styles from './CartBtn.module.css';
import icon from './cart.png';

export const CartBtn = ({ productsCount,toggleCart }) => {
  const { cart, img } = styles;

  return (
    <div className={ cart } onClick={ toggleCart}>
      <div className={ img } data-count={ productsCount }>
        <img src={ icon } alt="cart icon" />
      </div>
    </div>
  );
};
