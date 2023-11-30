export const getCartProducQty = (cartObj) => {
  const countsArr = Object.values(cartObj);
  const count = countsArr.reduce((total, item) => total + item);

  return count;
}