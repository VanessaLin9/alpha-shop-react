import { memo } from 'react';
import style from './Cart.module.css';
import { useCartContext } from '../cartContext';
import LineItem from './LineItem';

const Cart = memo(() => {
  const { step, lineItems, totalAmount } = useCartContext();

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
        <section className={style.checkout}>
          <div className="text align-start">step:</div>
          <div className={style.price}>{step + 1}</div>
        </section>
        <section className={style.checkout}>
          <div className="text align-start">運費</div>
          <div className={style.price}>免費</div>
        </section>
        <section className={style.checkout}>
          <div className="text align-start">小計</div>
          <div className={style.price}>${totalAmount}</div>
        </section>
      </section>
    </div>
  );
});
export default Cart;
