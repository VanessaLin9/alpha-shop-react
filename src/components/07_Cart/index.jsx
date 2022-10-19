import { memo } from 'react';
import { useCartContext } from '../cartContext';
import LineItem from './LineItem';
import './cart.scss';

const Cart = memo(() => {
  const { step, state } = useCartContext();
  const { lineItems } = state;
  const deliver = state.deliverFee.id === 'shipping-standard' ? '免費' : '$500';

  return (
    <div className="cart-container col col-lg-5 col-sm-12">
      <section className="cart m-3" data-name="Cart">
        <h3 className="cart-title align-start">購物籃</h3>
        {lineItems.map((item) => {
          return (
            <LineItem
              key={item.id}
              id={item.id}
              name={item.name}
              img={item.img}
              price={item.price}
              quantity={item.quantity}
            />
          );
        })}
        <section className="checkout">
          <div className="text align-start">step:</div>
          <div className="price">{step + 1}</div>
        </section>
        <section className="checkout">
          <div className="text align-start">運費</div>
          <div className="price">{deliver}</div>
        </section>
        <section className="checkout">
          <div className="text align-start">小計</div>
          <div className="price">${state.totalAmount}</div>
        </section>
      </section>
    </div>
  );
});
export default Cart;
