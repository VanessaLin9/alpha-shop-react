import React, { memo } from 'react';
import { useCartContext } from '../cartContext';
import type { CartType } from '../../type';
import './cart.scss';

const LineItem: React.FC<CartType> = memo((props) => {
  const { id, name, img, price, quantity } = props;
  const { atDeleteItem, atReduceItem, atIncreaseItem } = useCartContext();
  const reduceBtn = (
    <i
      id="downBtn"
      className="fa fa-minus-circle down control-button"
      aria-hidden="true"
      onClick={() => atReduceItem(id)}
    />
  );
  const removeBtn = (
    <i
      id="downBtn"
      className="fa fa-minus-circle down control-button"
      aria-hidden="true"
      onClick={() => atDeleteItem(id)}
    />
  );
  let minusBtn = reduceBtn;
  if (quantity === 1) {
    minusBtn = removeBtn;
  }
  return (
    <section className="product-list" data-total-price="0">
      {/* render card */}
      <div className="item " data-count="0" data-price={price}>
        <div className="col-md-4">
          <img className="imgContainer" src={img} alt="..." />
        </div>
        <div className="productInfo">
          <div className="productName">{name}</div>
          <div className="productControlContainer">
            <div className="productControl">
              {minusBtn}
              <span className="productCount">{quantity}</span>
              <i
                id="upBtn"
                className="fa fa-plus-circle up control-button"
                aria-hidden="true"
                onClick={() => atIncreaseItem(id)}
              />
            </div>
            <div className="productRemove">
              <button
                type="button"
                className="remove btn btn-outline-secondary btn-sm"
                onClick={() => atDeleteItem(id)}
              >
                remove
              </button>
            </div>
          </div>
          <div className="price">${price}</div>
        </div>
      </div>
    </section>
  );
});
export default LineItem;
