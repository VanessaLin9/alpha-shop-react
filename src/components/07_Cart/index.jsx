import { memo } from 'react';
// import { useCartContext } from '../cartContext';
import shallow from 'zustand/shallow';
import useCartStore from '../../store/useCartStore';
import LineItem from './LineItem';
import './cart.scss';

const Cart = memo(() => {
  const {
    step,
    lineItems,
    totalPrice,
    shippingFee,
    onUpdateLineItemQuantity,
    onRemoveItem,
  } = useCartStore();
  // const { lineItems } = state;
  // const deliver = state.deliverFee.id === 'shipping-standard' ? '免費' : '$500';

  return (
    <div className="cart-container col col-lg-5 col-sm-12">
      <section className="cart m-3" data-name="Cart">
        <h3 className="cart-title align-start">購物籃</h3>
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
          <div className="text align-start">step:</div>
          <div className="price">{step}</div>
        </section>
        <section className="checkout">
          <div className="text align-start">運費</div>
          <div className="price">{shippingFee}</div>
        </section>
        <section className="checkout">
          <div className="text align-start">小計</div>
          <div className="price">{totalPrice}</div>
        </section>
      </section>
    </div>
  );
});
export default Cart;
