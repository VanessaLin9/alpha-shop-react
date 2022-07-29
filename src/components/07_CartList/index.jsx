import React from 'react';
import cx from 'classnames';
import style from './Cart.module.css';

type CartTypeProps = {
  id: string,
  name: string,
  img: string,
  price: number,
  quantity: number,
  onDeleteItem: (id: string) => void,
  onReduceItem: (id: string) => void,
  onIncreaseItem: (id: string) => void,
};

const CartList: React.FC<CartTypeProps> = (props) => {
  const {
    id,
    name,
    img,
    price,
    quantity,
    onDeleteItem,
    onReduceItem,
    onIncreaseItem,
  } = props;
  return (
    <section className="product-list" data-total-price="0">
      {/* render card */}
      <div className={style.item} data-count="0" data-price={price}>
        <div className="col-md-4">
          <img className={style.imgContainer} src={img} alt="..." />
        </div>
        <div className={style.productInfo}>
          <div className={style.productName}>{name}</div>
          <div className={style.productControlContainer}>
            <div className={style.productControl}>
              <i
                id="downBtn"
                className="fa fa-minus-circle down control-button"
                aria-hidden="true"
                onClick={() => onReduceItem(id)}
              />
              <span className={style.productCount}>{quantity}</span>
              <i
                id="upBtn"
                className="fa fa-plus-circle up control-button"
                aria-hidden="true"
                onClick={() => onIncreaseItem(id)}
              />
            </div>
            <div className={style.productRemove}>
              <button
                type="button"
                className="remove btn btn-outline-secondary btn-sm"
                onClick={() => onDeleteItem(id)}
              >
                remove
              </button>
            </div>
          </div>
          <div className={style.price}>${price}</div>
        </div>
      </div>
    </section>
  );
};
export default CartList;
