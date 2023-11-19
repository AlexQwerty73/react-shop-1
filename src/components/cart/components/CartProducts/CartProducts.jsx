import { CartProduct } from '../CartProduct/CartProduct';
// import styles from './CartProducts.module.css';

export const CartProducts = ({cartObj,data,updateQtyOfProductInCart}) => {
   return (
      <>
         {
          Object.keys(cartObj).map((key, index) => (
            <CartProduct
              key={key}
              productData={data.find(item => item.id === parseInt(key))}
              count={cartObj[key]}
              index={index + 1}
              updateQtyOfProductInCart={updateQtyOfProductInCart}
            />
          ))
        }
      </>
   );
};