

export const calculateItemTotal = (item) => {
  const extrasTotal = item.extras.reduce(
    (sum, e) => sum + e.price,
    0
  );
  return item.price + extrasTotal;
};

export const calculateGrandTotal = (cartItems) => {
  return cartItems.reduce(
    (sum, item) => sum + item.totalPrice * item.quantity,
    0
  );
};
