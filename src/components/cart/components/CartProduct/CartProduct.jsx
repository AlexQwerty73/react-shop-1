import { useState } from 'react';
import { Img } from '../../../commons';
import styles from './CartProduct.module.css';

export const CartProduct = ({ count, productData, index, updateQtyOfProductInCart }) => {
  const { product, qtyChange, qty, qtyInput } = styles;
  const { title, price, img, id } = productData;

  const [productCount, setProductCount] = useState(count);

  const changeInputValue = (e) => {
    const val = Number(e.target.value);
    setProductCount(val);
    updateQtyOfProductInCart(id, val);
  };

  
  const changeQtyProductTo = (amount) => {
    const newCount = productCount + amount;
    setProductCount(newCount);
    updateQtyOfProductInCart(id, newCount);
  };

  const removeProduct = () => {
    updateQtyOfProductInCart(id, 0);
  };

  return (
    <div className={product}>
      <span className="number">{index}</span>
      <Img imgName={img} />
      <p className="productName">{title}</p>
      <span className={qty}>
        <input className={qtyInput} onChange={(e) => changeInputValue(e)} type="text" value={productCount} />
        <div className={qtyChange}>
          <span onClick={() => changeQtyProductTo(1)}>+</span>
          <span onClick={() => changeQtyProductTo(-1)}>-</span>
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="cost">{price * count}</span>
      <button onClick={removeProduct}>remove</button>
    </div>
  );
};
