import React, { memo } from 'react';
import type { CartType } from '../../type';

const LineItem: React.FC<CartType> = memo((props) => {
  const { id, quantity, name, price, img, onQuantityChange, onRemoveItem } =
    props;

  const reduceBtn = (
    <i
      id="downBtn"
      className="fa fa-minus-circle down control-button"
      aria-hidden="true"
      onClick={() => onQuantityChange(id, quantity - 1)}
    />
  );
  const removeBtn = (
    <i
      id="downBtn"
      className="fa fa-minus-circle down control-button"
      aria-hidden="true"
      onClick={() => onRemoveItem(id)}
    />
  );
  let minusBtn = reduceBtn;
  if (quantity === 1) {
    minusBtn = removeBtn;
  }
  return (
    <div className="product-item" data-count="0" data-price={price}>
      <img className="img-container" src={img} alt="..." />
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-control-container">
          <div className="product-control">
            {minusBtn}
            <span className="product-count">{quantity}</span>
            <i
              id="upBtn"
              className="fa fa-plus-circle up control-button"
              aria-hidden="true"
              onClick={() => onQuantityChange(id, quantity + 1)}
            />
          </div>
          {/* <div className="product-remove">
            <button
              type="button"
              className="remove btn btn-outline-secondary btn-sm"
              onClick={() => onRemoveItem(id)}
            >
              remove
            </button>
          </div> */}
        </div>
        <div className="product-price">${price}</div>
      </div>
    </div>
  );
});
export default LineItem;
