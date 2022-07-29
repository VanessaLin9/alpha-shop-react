import style from './CartSum.module.css'

const CartSum = (props) => {
  const { sum } = props;
  return (
    <section>
      <section className={style.checkout}>
        <div className="text align-start">運費</div>
        <div className={style.price}>免費</div>
      </section>
      <section className={style.checkout}>
        <div className="text align-start">小計</div>
        <div className={style.price}>${sum}</div>
      </section>
    </section>
  );
};
export default CartSum;
