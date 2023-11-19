// import styles from './CartTotalPrice.module.css';

export const CartTotalPrice = ({ cartData, data }) => {
   return (
      <>
         <span>Total:</span>
         <span>
            {
               cartData.reduce((sum, id) => sum + data.find(prod => prod.id === id).price, 0)
            }
         </span>
      </>
   );
};