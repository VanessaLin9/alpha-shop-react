import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <section className="cart m-3" data-name="Cart">
      <h3 className="cart-title align-start">購物籃</h3>
      <section className="product-list" data-total-price="0">
        {/* render card */}
        <div className="item row" data-count="0" data-price="100">
          <div className="col-md-4">
            <img
              className="img-container"
              src="https://shoplineimg.com/58a81a0d72fdc0ec2700333f/6105c27cdcd838002f865f4a/2000x.webp?source_format=jpg"
              alt="..."
            />
          </div>

          <div className="product-info col-md-8">
            <div className="product-name align-start">貓咪罐罐</div>
            <div className="product-control-container">
              <div className="product-control">
                <i
                  id="downBtn"
                  className="fa fa-minus-circle down control-button"
                  aria-hidden="true"
                ></i>
                <span className="product-count">1</span>
                <i
                  id="upBtn"
                  className="fa fa-plus-circle up control-button"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="product-remove">
                <button
                  type="button"
                  className="remove btn btn-outline-secondary btn-sm"
                >
                  remove
                </button>
              </div>
            </div>
            <div className="price">$100</div>
          </div>
        </div>

        <div className="item row" data-count="0" data-price="200">
          <div className="col-md-4">
            <img
              className="img-container"
              src="https://img.shoplineapp.com/media/image_clips/60f003c85579ff001a2c455e/original.jpg?1626342344"
              alt="..."
            />
          </div>
          <div className="product-info col-md-8">
            <div className="product-name align-start">貓咪乾乾</div>
            <div className="product-control-container">
              <div className="product-control">
                <i
                  id="downBtn"
                  className="fa fa-minus-circle down control-button"
                  aria-hidden="true"
                ></i>
                <span className="product-count">1</span>
                <i
                  id="upBtn"
                  className="fa fa-plus-circle up control-button"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="product-remove">
                <button
                  type="button"
                  className="remove btn btn-outline-secondary btn-sm"
                >
                  remove
                </button>
              </div>
            </div>
            <div className="price">$200</div>
          </div>
        </div>
      </section>

      <section className="checkout shipping col col-12 ">
        <div className="text align-start">運費</div>
        <div className="price">免費</div>
      </section>
      <section className="checkout total col col-12">
        <div className="text align-start">小計</div>
        <div className="price">$300</div>
      </section>
    </section>
  );
};
export default Cart;
