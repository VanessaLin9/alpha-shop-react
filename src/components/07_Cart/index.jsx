import { memo } from 'react';
import shallow from 'zustand/shallow';
import useCartStore from '../../store/useCartStore';
import LineItem from './LineItem';

const Cart = memo(() => {
  const {
    step,
    lineItems,
    totalPrice,
    shippingFee,
    onUpdateLineItemQuantity,
    onRemoveItem,
  } = useCartStore((state) => {
    return {
      step: state.step,
      lineItems: state.lineItems,
      totalPrice: state.totalPrice,
      shippingFee: state.shippingFee,
      onUpdateLineItemQuantity: state.onUpdateLineItemQuantity,
      onRemoveItem: state.onRemoveItem,
    };
  }, shallow);

  return (
    <section className="cart-container" data-name="Cart">
      <h3 className="cart-title">購物籃</h3>
      {lineItems.map((lineItem) => (
        <LineItem
          id={lineItem.id}
          quantity={lineItem.quantity}
          name={lineItem.name}
          price={lineItem.price}
          img={lineItem.img}
          key={lineItem.id}
          onQuantityChange={onUpdateLineItemQuantity}
          onRemoveItem={onRemoveItem}
        />
      ))}
      <section className="checkout">
        <div className="text">step:</div>
        <div className="product-price">{step === 4 ? '送出訂單' : step}</div>
      </section>
      <section className="checkout">
        <div className="text">運費</div>
        <div className="product-price">{shippingFee}</div>
      </section>
      <section className="checkout">
        <div className="text">小計</div>
        <div className="product-price">{totalPrice}</div>
      </section>
    </section>
  );
});
export default Cart;
